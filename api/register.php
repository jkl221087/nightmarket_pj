<?php
// 開啟錯誤報告
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// 記錄請求信息
error_log("Request Method: " . $_SERVER['REQUEST_METHOD']);
error_log("Raw POST data: " . file_get_contents('php://input'));

// CORS headers
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// 處理 OPTIONS 請求
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 只允許 POST 請求
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => '不允許的請求方法']);
    exit;
}

require_once '../config/database.php';

try {
    // 獲取並解析POST數據
    $rawData = file_get_contents('php://input');
    $data = json_decode($rawData, true);
    
    if ($data === null) {
        throw new Exception('無效的JSON數據: ' . json_last_error_msg());
    }
    
    // 驗證必要欄位
    if (!isset($data['username']) || !isset($data['email']) || !isset($data['password'])) {
        throw new Exception('缺少必要欄位');
    }
    
    $username = trim($data['username']);
    $email = trim($data['email']);
    $password = $data['password'];
    
    // 驗證用戶名格式
    if (strlen($username) < 3 || strlen($username) > 50) {
        throw new Exception('用戶���長度必須在3-50個字符之間');
    }
    
    // 驗證郵箱格式
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('無效的郵箱格式');
    }
    
    // 驗證密碼強度
    if (strlen($password) < 6) {
        throw new Exception('密碼長度必須至少6個字符');
    }
    
    $conn = getDBConnection();
    
    // 檢查用戶名是否已存在
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
    if (!$stmt) {
        throw new Exception('準備查詢失敗: ' . $conn->error);
    }
    
    $stmt->bind_param("s", $username);
    if (!$stmt->execute()) {
        throw new Exception('執行查詢失敗: ' . $stmt->error);
    }
    
    if ($stmt->get_result()->num_rows > 0) {
        throw new Exception('用戶名已被使用');
    }
    
    // 檢查郵箱是否已存在
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    if ($stmt->get_result()->num_rows > 0) {
        throw new Exception('郵箱已被註冊');
    }
    
    // 密碼加密
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    // 插入新用戶
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    if (!$stmt) {
        throw new Exception('準備插入失敗: ' . $conn->error);
    }
    
    $stmt->bind_param("sss", $username, $email, $hashedPassword);
    if (!$stmt->execute()) {
        throw new Exception('執行插入失敗: ' . $stmt->error);
    }
    
    echo json_encode([
        'success' => true,
        'message' => '註冊成功'
    ]);
    
} catch (Exception $e) {
    error_log('註冊錯誤: ' . $e->getMessage());
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
} finally {
    if (isset($conn)) {
        $conn->close();
    }
} 