// 處理註冊表單提交
async function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // 基本驗證
    if (password !== confirmPassword) {
        alert('兩次輸入的密碼不一致');
        return false;
    }
    
    if (password.length < 6) {
        alert('密碼長度必須至少6個字符');
        return false;
    }
    
    try {
        const response = await fetch('http://localhost/nightmarket/api/register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            mode: 'cors',
            credentials: 'same-origin',
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            alert('註冊成功！請登入');
            window.location.href = 'login.html';
        } else {
            alert(data.message || '註冊失敗');
        }
    } catch (error) {
        console.error('註冊錯誤:', error);
        alert('註冊失敗，請稍後重試');
    }
    
    return false;
}

// 即時密碼驗證
document.getElementById('confirmPassword').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const confirmPassword = this.value;
    
    if (password !== confirmPassword) {
        this.setCustomValidity('密碼不一致');
    } else {
        this.setCustomValidity('');
    }
}); 