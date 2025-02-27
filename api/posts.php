<?php
// 開啟錯誤報告
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
session_start();

// 檢查是否已登入
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'message' => '請先登入']);
    exit;
}

// 資料庫連接
$conn = new mysqli("localhost", "root", "", "nightmarket");
$conn->set_charset("utf8mb4");

if ($conn->connect_error) {
    error_log("Connection failed: " . $conn->connect_error);
    echo json_encode(['success' => false, 'message' => '資料庫連接失敗']);
    exit;
}

// 處理 POST 請求（新增貼文）
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $user_id = $_SESSION['user_id'];
        $content = $_POST['content'] ?? '';
        $location = $_POST['location'] ?? '';
        
        error_log("Received POST data - user_id: $user_id, content: $content, location: $location");
        
        if (empty($content) || empty($location)) {
            echo json_encode(['success' => false, 'message' => '內容不能為空']);
            exit;
        }
        
        // 處理圖片上傳
        $images = [];
        if (isset($_FILES['images'])) {
            $upload_dir = '../uploads/';
            // 確保上傳目錄存在
            if (!file_exists($upload_dir)) {
                mkdir($upload_dir, 0777, true);
            }
            
            foreach ($_FILES['images']['tmp_name'] as $key => $tmp_name) {
                $file_name = uniqid() . '_' . $_FILES['images']['name'][$key];
                if (move_uploaded_file($tmp_name, $upload_dir . $file_name)) {
                    $images[] = 'uploads/' . $file_name;
                }
            }
        }
        
        // 將圖片路徑轉換為 JSON 字符串
        $images_json = !empty($images) ? json_encode($images) : null;
        
        // 插入貼文
        $stmt = $conn->prepare("INSERT INTO posts (user_id, content, location, images, created_at) VALUES (?, ?, ?, ?, NOW())");
        if (!$stmt) {
            throw new Exception("Prepare failed: " . $conn->error);
        }
        
        $stmt->bind_param("isss", $user_id, $content, $location, $images_json);
        
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => '發布成功']);
        } else {
            throw new Exception("Execute failed: " . $stmt->error);
        }
        
        $stmt->close();
    } catch (Exception $e) {
        error_log("Error in POST request: " . $e->getMessage());
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// 處理 GET 請求（獲取貼文列表）
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $sql = "SELECT p.*, u.id as user_id, u.username 
                FROM posts p 
                JOIN users u ON p.user_id = u.id 
                ORDER BY p.created_at DESC";
        
        $result = $conn->query($sql);
        if (!$result) {
            echo json_encode(['success' => false, 'message' => 'Query failed: ' . $conn->error]);
            exit;
        }
        
        $posts = [];
        
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                // 處理圖片 JSON 字符串
                $images = null;
                if ($row['images']) {
                    $images = json_decode($row['images']);
                }
                
                // 檢查是否已追蹤該用戶
                $stmt = $conn->prepare("SELECT COUNT(*) as is_following FROM follows WHERE follower_id = ? AND following_id = ?");
                $stmt->bind_param("ii", $_SESSION['user_id'], $row['user_id']);
                $stmt->execute();
                $follow_result = $stmt->get_result()->fetch_assoc();
                
                $posts[] = [
                    'id' => $row['id'],
                    'user_id' => $row['user_id'],
                    'username' => $row['username'],
                    'avatar' => '../672311620.jpg',
                    'content' => $row['content'],
                    'location' => $row['location'],
                    'images' => $images,
                    'created_at' => $row['created_at'],
                    'is_following' => $follow_result['is_following'] > 0
                ];
            }
        }
        
        echo json_encode(['success' => true, 'posts' => $posts]);
        exit;
    } catch (Exception $e) {
        echo json_encode([
            'success' => false, 
            'message' => 'Error loading posts: ' . $e->getMessage()
        ]);
        exit;
    }
}

$conn->close();
?> 