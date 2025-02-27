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

// 追蹤/取消追蹤用戶
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $follower_id = $_SESSION['user_id'];
    $following_id = $_POST['following_id'] ?? null;
    $action = $_POST['action'] ?? ''; // 'follow' 或 'unfollow'

    if (!$following_id || !$action) {
        echo json_encode(['success' => false, 'message' => '參數錯誤']);
        exit;
    }

    try {
        if ($action === 'follow') {
            $stmt = $conn->prepare("INSERT INTO follows (follower_id, following_id) VALUES (?, ?)");
            $stmt->bind_param("ii", $follower_id, $following_id);
        } else {
            $stmt = $conn->prepare("DELETE FROM follows WHERE follower_id = ? AND following_id = ?");
            $stmt->bind_param("ii", $follower_id, $following_id);
        }

        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => $action === 'follow' ? '追蹤成功' : '取消追蹤成功']);
        } else {
            throw new Exception($stmt->error);
        }
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// 獲取追蹤狀態
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $user_id = $_GET['user_id'] ?? null;
    
    if (!$user_id) {
        echo json_encode(['success' => false, 'message' => '參數錯誤']);
        exit;
    }

    try {
        // 檢查是否已追蹤
        $stmt = $conn->prepare("SELECT COUNT(*) as is_following FROM follows WHERE follower_id = ? AND following_id = ?");
        $stmt->bind_param("ii", $_SESSION['user_id'], $user_id);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_assoc();
        
        // 獲取追蹤者和被追蹤者數量
        $stmt = $conn->prepare("
            SELECT 
                (SELECT COUNT(*) FROM follows WHERE following_id = ?) as followers_count,
                (SELECT COUNT(*) FROM follows WHERE follower_id = ?) as following_count
        ");
        $stmt->bind_param("ii", $user_id, $user_id);
        $stmt->execute();
        $counts = $stmt->get_result()->fetch_assoc();
        
        echo json_encode([
            'success' => true,
            'is_following' => $result['is_following'] > 0,
            'followers_count' => $counts['followers_count'],
            'following_count' => $counts['following_count']
        ]);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

$conn->close();
?> 