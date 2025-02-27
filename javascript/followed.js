// 檢查登入狀態
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('login_logs');
    const currentUser = localStorage.getItem('currentUser');
    
    if (isLoggedIn !== 'true' || !currentUser) {
        window.location.href = 'http://localhost/nightmarket/pages/login.html';
        return false;
    }
    return true;
}

// 載入已追蹤的用戶
async function loadFollowedUsers() {
    try {
        const response = await fetch('http://localhost/nightmarket/api/followed.php', {
            credentials: 'include'
        });
        
        const data = await response.json();
        
        if (!data.success) {
            throw new Error(data.message || '載入失敗');
        }
        
        const container = document.querySelector('.followed-users-container');
        container.innerHTML = '';
        
        data.users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.className = 'followed-user';
            userElement.setAttribute('data-user-id', user.id);
            userElement.innerHTML = `
                <div class="user-info">
                    <img src="${user.avatar}" alt="${user.username}" class="user-avatar">
                    <div class="user-details">
                        <h3>${user.username}</h3>
                        <div class="follow-stats">
                            <span>${user.followers_count} 位追蹤者</span>
                            <span>・</span>
                            <span>追蹤 ${user.following_count} 人</span>
                        </div>
                    </div>
                </div>
                <button class="unfollow-btn" onclick="unfollowUser(${user.id}, this)">
                    取消追蹤
                </button>
            `;
            container.appendChild(userElement);
        });
    } catch (error) {
        console.error('載入已追蹤用戶失敗:', error);
        alert('載入失敗: ' + error.message);
    }
}

// 取消追蹤用戶
async function unfollowUser(userId, button) {
    try {
        const formData = new FormData();
        formData.append('following_id', userId);
        formData.append('action', 'unfollow');
        
        const response = await fetch('http://localhost/nightmarket/api/follows.php', {
            method: 'POST',
            credentials: 'include',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            // 移除用戶卡片
            const userCard = button.closest('.followed-user');
            userCard.remove();
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('取消追蹤失敗:', error);
        alert('操作失敗: ' + error.message);
    }
}

// 頁面加載完成後的初始化
document.addEventListener('DOMContentLoaded', () => {
    if (!checkLoginStatus()) {
        return;
    }
    loadFollowedUsers();
});

// 側邊欄切換
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.sidebar-toggle').classList.toggle('active');
} 