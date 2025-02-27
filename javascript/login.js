// 處理登入表單提交
async function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    try {
        const response = await fetch('/nightmarket/api/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Server response:', data);
        
        if (data.success) {
            console.log('登入成功，準備重定向...');
            const user = {
                id: data.user.id,
                username: data.user.username,
                avatar: data.user.avatar_url || "../672311620.jpg"
            };
            console.log('用戶信息：', user);

            // 儲存登入狀態
            localStorage.setItem('login_logs', 'true');
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            if (remember) {
                localStorage.setItem('rememberedUser', username);
            }

            window.location.href = '/nightmarket/pages/social.html';
        } else {
            alert(data.message || '帳號或密碼錯誤！');
        }
    } catch (error) {
        console.error('登入錯誤:', error);
        alert('登入失敗：' + error.message);
    }

    return false;
}

// 頁面加載時檢查是否有記住的用戶
document.addEventListener('DOMContentLoaded', function() {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
        document.getElementById('username').value = rememberedUser;
        document.getElementById('remember').checked = true;
    }
}); 