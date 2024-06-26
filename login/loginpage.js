const backBtn = document.querySelector('.back'),
darkBtn = document.querySelector('.darkbtn'),
eyeIcon = document.querySelector('.eyeoff'),
body = document.querySelector('body');

// backbtn function
backBtn.addEventListener('click', () => {
    window.history.back();
});

// dark mode
let getMode = localStorage.getItem('mode');

if (getMode && getMode === "dark") {
    body.classList.add('dark'),
    darkBtn.classList.add('active');
}

darkBtn.onclick = () => {
    darkBtn.classList.toggle('active'),
    body.classList.toggle('dark');

    if (!body.classList.contains('dark')) {
        return localStorage.setItem('mode' , 'light');
    }
    localStorage.setItem('mode' , 'dark');
}

// show password

const passwordInput = document.getElementById('password');
const showPasswordIcon = document.getElementById('show-password');

let isPasswordVisible = false;

showPasswordIcon.addEventListener('click', () => {
isPasswordVisible = !isPasswordVisible;

if (isPasswordVisible) {
    passwordInput.type = 'text';
    showPasswordIcon.name = 'eye-off';
} else {
    passwordInput.type = 'password';
    showPasswordIcon.name = 'eye';
}
});



