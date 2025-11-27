document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm'); 

    const TAI_KHOAN_MAU = localStorage.getItem('registeredUsername') || 'admin';
    const MAT_KHAU_MAU = localStorage.getItem('registeredPassword') || '123456';
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const usernameInput = document.getElementById('username').value;
            const passwordInput = document.getElementById('password').value;

            if (usernameInput === TAI_KHOAN_MAU && passwordInput === MAT_KHAU_MAU) { 
                alert('Đăng nhập thành công!');

                localStorage.setItem('isLoggedIn', 'true');

                window.location.href = 'index.html'; 
            } else {
                alert('Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.');
            }
        });
    } else {
        console.error("Lỗi: Không tìm thấy form với ID 'loginForm'.");
    }
});