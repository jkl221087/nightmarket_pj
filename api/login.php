<?php
// 開啟錯誤報告
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();

// CORS headers
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: http://localhost');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Access-Control-Allow-Credentials: true');

// 處理 OPTIONS 請求
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 記錄請求信息
error_log('====== 開始新的登入請求 ======');
error_log('Request Method: ' . $_SERVER['REQUEST_METHOD']);
error_log('Raw POST data: ' . file_get_contents('php://input'));

require_once '../config/database.php';

try {
    $conn = getDBConnection();

    // 獲取 POST 數據
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($data['username']) || !isset($data['password'])) {
        throw new Exception('請提供用戶名和密碼');
    }

    $username = $data['username'];
    $password = $data['password'];

    // 查詢用戶
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        // 登入成功
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        
        echo json_encode([
            'success' => true,
            'message' => '登入成功',
            'user' => [
                'id' => $user['id'],
                'username' => $user['username'],
                'avatar_url' => $user['avatar_url']
            ]
        ]);
    } else {
        // 登入失敗
        throw new Exception('帳號或密碼錯誤');
    }

} catch (Exception $e) {
    error_log('登入錯誤: ' . $e->getMessage());
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