// 檢查用戶登入狀態
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('login_logs');
    const currentUser = localStorage.getItem('currentUser');
    
    console.log('登入狀態:', isLoggedIn);
    console.log('當前用戶:', currentUser);
    
    try {
        // 嘗試解析用戶信息
        const userObj = currentUser ? JSON.parse(currentUser) : null;
        
        if (isLoggedIn === 'true' && userObj && userObj.id) {
            console.log('用戶已登入:', userObj);
            return true;
        }
    } catch (error) {
        console.error('解析用戶信息失敗:', error);
    }
    
    console.log('用戶未登入，重定向到登入頁面');
    const currentPage = window.location.pathname;
    window.location.href = `../pages/login.html?returnUrl=${encodeURIComponent(currentPage)}`;
    return false;
}

// 當頁面加載完成時
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
    
    if (checkLoginStatus()) {
        // 獲取當前用戶信息
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('當前用戶信息:', currentUser);
        
        // 更新頁面上的用戶信息
        updateUserInfo(currentUser);
        
        // 載入訊息歷史
        loadMessages();
        
        // 直接綁定發送按鈕的點擊事件
        document.querySelector('.message-input button').onclick = function(e) {
            e.preventDefault();
            console.log('Send button clicked'); // 調試日誌
            sendMessage();
        };

        // 綁定輸入框的 Enter 鍵事件
        document.getElementById('messageInput').onkeypress = function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                console.log('Enter key pressed'); // 調試日誌
                sendMessage();
            }
        };
    }
});

// 更新用戶信息
function updateUserInfo(user) {
    // 更新聊天列表中的用戶信息
    const chatItems = document.querySelectorAll('.chat-item');
    chatItems.forEach(item => {
        const chatName = item.querySelector('.chat-name');
        if (chatName) {
            chatName.textContent = user.username;
        }
    });

    // 更新聊天頭部的用戶信息
    const headerChatName = document.querySelector('.chat-user .chat-name');
    if (headerChatName) {
        headerChatName.textContent = user.username;
    }
}

// 更新聊天列表的最新消息和時間
function updateChatList(message) {
    const chatItem = document.querySelector('.chat-item');
    const preview = chatItem.querySelector('.chat-preview');
    const timeSpan = chatItem.querySelector('.chat-time');
    const unreadCount = chatItem.querySelector('.unread-count');
    
    // 更新最新消息預覽
    preview.textContent = message.text;
    
    // 更新時間
    timeSpan.textContent = message.time;
    
    // 如果是接收到的消息，更新未讀數量
    if (!message.sent) {
        const currentUnread = parseInt(unreadCount.textContent) || 0;
        unreadCount.textContent = currentUnread + 1;
        unreadCount.style.display = 'inline-block';
    }
}

// 滾動到最新消息
function scrollToBottom() {
    const messagesContainer = document.querySelector('.messages');
    if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// 初始化消息數組
let messages = [];

// 載入訊息歷史
function loadMessages() {
    console.log('Loading messages...'); // 調試日誌
    
    // 從 localStorage 獲取消息歷史，如果沒有則使用空數組
    const savedMessages = localStorage.getItem('chatMessages');
    messages = savedMessages ? JSON.parse(savedMessages) : [];

    // 清空現有消息容器
    const messagesContainer = document.querySelector('.messages');
    if (messagesContainer) {
        messagesContainer.innerHTML = '';
        
        // 顯示所有消息
        messages.forEach(message => {
            const messageElement = createMessageElement(message);
            messagesContainer.appendChild(messageElement);
        });

        // 如果有消息，更新最後一條消息的預覽
        if (messages.length > 0) {
            updateChatList(messages[messages.length - 1]);
        }

        // 滾動到最新消息
        scrollToBottom();
    }
}

// 保存消息到 localStorage
function saveMessages() {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
}

// 發送訊息函數
function sendMessage() {
    const input = document.getElementById('messageInput');
    const text = input.value.trim();
    
    console.log('Attempting to send message:', text); // 調試日誌
    
    if (text) {
        const newMessage = {
            id: messages.length + 1,
            text: text,
            sent: true,
            time: new Date().toLocaleTimeString('zh-TW', { 
                hour: '2-digit', 
                minute: '2-digit' 
            })
        };
        
        // 添加到消息數組
        messages.push(newMessage);
        
        // 創建並添加消息元素
        const messageElement = createMessageElement(newMessage);
        document.querySelector('.messages').appendChild(messageElement);
        
        // 清空輸入框
        input.value = '';
        
        // 更新聊天列表
        updateChatList(newMessage);
        
        // 滾動到底部
        scrollToBottom();
        
        // 保存消息
        saveMessages();
        
        console.log('Message sent successfully'); // 調試日誌
        
        // 模擬回覆
        setTimeout(() => {
            const reply = {
                id: messages.length + 1,
                text: "好的，收到！",
                sent: false,
                time: new Date().toLocaleTimeString('zh-TW', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                })
            };
            
            messages.push(reply);
            const replyElement = createMessageElement(reply);
            document.querySelector('.messages').appendChild(replyElement);
            updateChatList(reply);
            scrollToBottom();
            saveMessages();
        }, 1000);
    }
}

// 創建消息元素
function createMessageElement(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${message.sent ? 'sent' : 'received'}`;
    
    messageDiv.innerHTML = `
        <span class="message-time">${message.time}</span>
        <div class="message-content">
            <img src="../672311620.jpg" alt="頭像" class="chat-avatar">
            <div class="message-bubble">
                ${message.text}
            </div>
        </div>
    `;
    
    return messageDiv;
}

// 清除未讀消息數量
function clearUnreadCount() {
    const unreadCount = document.querySelector('.unread-count');
    unreadCount.textContent = '0';
    unreadCount.style.display = 'none';
}

// 當點擊聊天項目時
document.querySelector('.chat-item').addEventListener('click', function() {
    clearUnreadCount();
});

// 其他現有的函數���持不變... 