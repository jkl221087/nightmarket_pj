// 先定義所有函數
function openPostModal() {
    const modal = document.getElementById('postModal');
    modal.style.display = 'block';
    modal.offsetHeight;
    modal.classList.add('show');
}

function closePostModal() {
    const modal = document.getElementById('postModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.getElementById('locationSelect').value = '';
        document.getElementById('postText').value = '';
        document.getElementById('imagePreview').innerHTML = '';
        document.getElementById('imageInput').value = '';
    }, 300);
}

// 修改 submitPost 函數，添加完整的提交邏輯
async function submitPost() {
    const postText = document.getElementById('postText').value;
    const location = document.getElementById('locationSelect').value;
    const imageFiles = document.getElementById('imageInput').files;
    
    if (!postText || !location) {
        alert('請填寫完整信息');
        return;
    }
    
    try {
        // 創建 FormData 對象來發送文件和其他數據
        const formData = new FormData();
        formData.append('content', postText);
        formData.append('location', location);
        
        // 添加圖片文件
        if (imageFiles.length > 0) {
            for (let i = 0; i < imageFiles.length; i++) {
                formData.append('images[]', imageFiles[i]);
            }
        }
        
        // 發送 POST 請求到後端
        const response = await fetch('http://localhost/nightmarket_pj/api/posts.php', {
            method: 'POST',
            credentials: 'include',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (!result.success) {
            throw new Error(result.message || '發布失敗');
        }

        // 創建新的貼文 HTML
        const postElement = document.createElement('div');
        postElement.className = 'post';
        
        // 獲取當前用戶信息
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        
        postElement.innerHTML = `
            <div class="post-header">
                <img src="${currentUser.avatar || '../672311620.jpg'}" class="user-avatar" alt="用戶頭像">
                <div class="post-user-info">
                    <span class="username">${currentUser.username || 'User'}</span>
                    <span class="location">${location}</span>
                </div>
            </div>
            <div class="post-content">
                <p>${postText}</p>
                ${imageFiles.length ? '<div class="post-images"></div>' : ''}
            </div>
            <div class="post-footer">
                <span class="timestamp">${new Date().toLocaleString()}</span>
                <div class="post-actions">
                    <button class="action-btn like-btn" onclick="toggleLike(this)">
                        <i class="far fa-heart"></i>
                        <span class="like-count">0</span>
                        <span>讚</span>
                    </button>
                    <button class="action-btn comment-btn" onclick="toggleComment(this)">
                        <i class="fas fa-comment"></i>
                        <span>留言</span>
                    </button>
                    <button class="action-btn share-btn" onclick="sharePost(this)">
                        <i class="fas fa-share"></i>
                        <span>分享</span>
                    </button>
                </div>
                <div class="comments-section" style="display: none;">
                    <div class="comments-list"></div>
                    <div class="comment-input-wrapper">
                        <input type="text" class="comment-input" placeholder="寫下留言...">
                        <button class="comment-submit" onclick="submitComment(this)">發送</button>
                    </div>
                </div>
            </div>
        `;
        
        // 將新貼文添加到貼文區域的最前面
        const postsFeed = document.querySelector('.posts-container');
        postsFeed.prepend(postElement);
        
        // 如果有圖片，添加圖片預覽
        if (imageFiles.length) {
            const imagesContainer = postElement.querySelector('.post-images');
            Array.from(imageFiles).forEach(file => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    imagesContainer.appendChild(img);
                }
                reader.readAsDataURL(file);
            });
        }
        
        // 關閉模態框並清空輸入
        closePostModal();
        document.getElementById('postText').value = '';
        document.getElementById('locationSelect').value = '';
        document.getElementById('imageInput').value = '';
        document.getElementById('imagePreview').innerHTML = '';
        
        // 重新載入貼文列表
        await loadPosts();
    } catch (error) {
        console.error('發布失敗:', error);
        alert('發布失敗: ' + error.message);
    }
}

function previewImages(event) {
    const preview = document.getElementById('imagePreview');
    preview.innerHTML = '';
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.file = file;
            preview.appendChild(img);

            const reader = new FileReader();
            reader.onload = (function(aImg) {
                return function(e) {
                    aImg.src = e.target.result;
                };
            })(img);
            reader.readAsDataURL(file);
        }
    }
}

// 修改 loadPosts 函數
async function loadPosts() {
    try {
        const response = await fetch('http://localhost/nightmarket_pj/api/posts.php', {
            method: 'GET',
            credentials: 'include'
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || `HTTP error! status: ${response.status}`);
        }
        
        // 清空現有貼文
        const postsContainer = document.querySelector('.posts-container');
        postsContainer.innerHTML = '';
        
        // 添加每個貼文
        data.posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <div class="post-header">
                    <img src="${post.avatar || '../672311620.jpg'}" class="user-avatar" alt="用戶頭像">
                    <div class="post-user-info">
                        <span class="username">${post.username}</span>
                        ${post.user_id !== currentUser.id ? `
                            <button class="follow-btn" onclick="toggleFollow(this, ${post.user_id})">
                                ${post.is_following ? '已追蹤' : '追蹤'}
                            </button>
                        ` : ''}
                        <span class="location">${post.location}</span>
                    </div>
                </div>
                <div class="post-content">
                    <p>${post.content}</p>
                    ${post.images ? `
                        <div class="post-images">
                            ${post.images.map(img => `<img src="${img}" alt="貼文圖片">`).join('')}
                        </div>
                    ` : ''}
                </div>
                <div class="post-footer">
                    <span class="timestamp">${new Date(post.created_at).toLocaleString()}</span>
                    <div class="post-actions">
                        <button class="action-btn like-btn" onclick="toggleLike(this)">
                            <i class="far fa-heart"></i>
                            <span class="like-count">0</span>
                            <span>讚</span>
                        </button>
                        <button class="action-btn comment-btn" onclick="toggleComment(this)">
                            <i class="fas fa-comment"></i>
                            <span>留言</span>
                        </button>
                        <button class="action-btn share-btn" onclick="sharePost(this)">
                            <i class="fas fa-share"></i>
                            <span>分享</span>
                        </button>
                    </div>
                    <div class="comments-section" style="display: none;">
                        <div class="comments-list"></div>
                        <div class="comment-input-wrapper">
                            <input type="text" class="comment-input" placeholder="寫下留言...">
                            <button class="comment-submit" onclick="submitComment(this)">發送</button>
                        </div>
                    </div>
                </div>
            `;
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('載入貼文失敗:', error);
        console.log('完整錯誤信息:', error);
    }
}

// 立即將函數掛載到全局
window.openPostModal = openPostModal;
window.closePostModal = closePostModal;
window.submitPost = submitPost;
window.previewImages = previewImages;

// 檢查登入狀態
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('login_logs');
    const currentUser = localStorage.getItem('currentUser');
    
    if (isLoggedIn !== 'true' || !currentUser) {
        window.location.href = 'http://localhost/nightmarket_pj/pages/login.html';
        return false;
    }
    return true;
}

// 頁面加載完成後的初始化
document.addEventListener('DOMContentLoaded', () => {
    if (!checkLoginStatus()) {
        return;
    }
    
    // 更新用戶資訊
    updateUserInfo();
    
    // 載入貼文
    loadPosts();
});

// 添加登��函數
window.logout = async function() {
    try {
        const response = await fetch('http://localhost/nightmarket_pj/api/logout.php', {
            method: 'POST',
            credentials: 'include'
        });
        
        localStorage.removeItem('login_logs');
        localStorage.removeItem('currentUser');
        window.location.href = 'http://localhost/nightmarket_pj/pages/login.html';
    } catch (error) {
        console.error('登出錯誤:', error);
        alert('登出失敗，請稍後重試');
    }
};

// 點讚功能
function toggleLike(button) {
    button.classList.toggle('liked');
    const icon = button.querySelector('i');
    icon.classList.toggle('fas');
    icon.classList.toggle('far');
    const likeCount = button.querySelector('.like-count');
    let count = parseInt(likeCount.textContent);
    if (button.classList.contains('liked')) {
        likeCount.textContent = count + 1;
    } else {
        likeCount.textContent = Math.max(0, count - 1);
    }
}

// 切換留���區域顯示
function toggleComment(button) {
    const post = button.closest('.post');
    const commentsSection = post.querySelector('.comments-section');
    commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
}

// 分享功能
function sharePost(button) {
    // 這裡可���實現分享功能，例如複製連結或打開分享對話框
    alert('分享功能正在開發中...');
}

// 提交留言
function submitComment(button) {
    const post = button.closest('.post');
    const input = post.querySelector('.comment-input');
    const commentsList = post.querySelector('.comments-list');
    
    if (input.value.trim()) {
        const comment = document.createElement('div');
        comment.className = 'comment';
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        comment.innerHTML = `
            <div class="comment-user">
                <img src="${currentUser.avatar || '../672311620.jpg'}" class="comment-avatar" alt="用戶頭像">
                <div class="comment-content">
                    <div class="comment-header">
                        <span class="comment-username">${currentUser.username || 'User'}</span>
                        <span class="comment-time">${new Date().toLocaleString()}</span>
                    </div>
                    <p class="comment-text">${input.value}</p>
                </div>
            </div>
        `;
        commentsList.appendChild(comment);
        input.value = '';
    }
}

// 更新用戶資訊函數
function updateUserInfo() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const userAvatar = document.querySelector('.manname-head .user-avatar');
    const userId = document.querySelector('.manname-head .user-id');
    
    if (userAvatar) {
        userAvatar.src = currentUser.avatar || '../672311620.jpg';
    }
    
    if (userId) {
        userId.textContent = currentUser.username || '未登入';
    }
}
