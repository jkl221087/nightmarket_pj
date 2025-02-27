<?php
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
    echo json_encode(['success' => false, 'message' => '資料庫連接失敗']);
    exit;
}

// 獲取已追蹤的用戶列表
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $sql = "SELECT u.id, u.username, u.email, 
                       (SELECT COUNT(*) FROM follows WHERE following_id = u.id) as followers_count,
                       (SELECT COUNT(*) FROM follows WHERE follower_id = u.id) as following_count
                FROM users u
                JOIN follows f ON u.id = f.following_id
                WHERE f.follower_id = ?
                ORDER BY f.created_at DESC";
        
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $_SESSION['user_id']);
        $stmt->execute();
        $result = $stmt->get_result();
        
        $followed_users = [];
        while ($row = $result->fetch_assoc()) {
            $followed_users[] = [
                'id' => $row['id'],
                'username' => $row['username'],
                'email' => $row['email'],
                'avatar' => '../672311620.jpg',
                'followers_count' => $row['followers_count'],
                'following_count' => $row['following_count']
            ];
        }
        
        echo json_encode(['success' => true, 'users' => $followed_users]);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

$conn->close();
?> 