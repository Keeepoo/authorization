// эта функция отвечает за переключение между формами

function showForm(formType) {
    document.querySelectorAll('.form').forEach(form => {
        form.classList.remove('active');
    });
    document.getElementById(`${formType}-form`).classList.add('active');
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    
    const message = document.getElementById('login-message');
    if (email && password) {
        message.textContent = 'Вход выполнен успешно!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Ошибка входа. Проверьте введенные данные.';
        message.style.color = 'red';
    }
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    const message = document.getElementById('register-message');
    if (name && email && password && (password === confirmPassword)) {
        message.textContent = 'Регистрация прошла успешно!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Ошибка регистрации. Проверьте введенные данные.';
        message.style.color = 'red';
    }
});

document.getElementById('reset-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('reset-email').value;

    const message = document.getElementById('reset-message');
    if (email) {
        message.textContent = 'Ссылка для восстановления пароля отправлена на ваш email.';
        message.style.color = 'green';
    } else {
        message.textContent = 'Ошибка восстановления. Проверьте введенные данные.';
        message.style.color = 'red';
    }
});
