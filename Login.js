document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'gioinguvc') {
        window.location.href = 'TrangChu.html';
    } else {
        alert('Tên tài khoản hoặc mật khẩu không đúng!');
    }
});
document.getElementById('openRegister').onclick = function() {
    document.getElementById('registerPopup').style.display = 'block';
  }

  document.getElementById('closeRegister').onclick = function() {
    document.getElementById('registerPopup').style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == document.getElementById('registerPopup')) {
      document.getElementById('registerPopup').style.display = 'none';
    }
  }

  document.getElementById('registerForm').onsubmit = function(event) {
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('regPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (!/^\d{10}$/.test(phoneNumber)) {
      document.getElementById('phoneError').style.display = 'block';
      event.preventDefault();
    } else {
      document.getElementById('phoneError').style.display = 'none';
    }

    if (password !== confirmPassword) {
      document.getElementById('passwordError').style.display = 'block';
      event.preventDefault();
    } else {
      document.getElementById('passwordError').style.display = 'none';
    }
  }

  function togglePasswordVisibility() {
    var passwordField = document.getElementById('password');
    var togglePassword = document.querySelector('.toggle-password');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      togglePassword.innerHTML = '&#128065;';
    } else {
      passwordField.type = 'password';
      togglePassword.innerHTML = '&#128065;';
    }
  }
  registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Tạo tài khoản thành công!');
    registerPopup.style.display = 'none';
    loginPopup.style.display = 'block';
  });
  