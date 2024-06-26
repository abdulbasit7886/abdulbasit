let searchIcon = document.querySelector('.search-bar'),
searchBar = document.querySelector('.search-input-full'),
searchClose = document.querySelector('.close-icon'),
backBtn = document.querySelector('.back'),
body = document.querySelector('body'),
toggle = document.querySelector('.darkbtn'),
menu = document.querySelector('.menu'),
links = document.querySelector('.links');

// back btn function
backBtn.onclick = () => {
    history.back();
}

// search bar active
searchIcon.onclick = () => {
    searchBar.classList.add('active');
}
searchClose.onclick = () => {
    searchBar.classList.remove('active');
}


// dark mode function

let getMode = localStorage.getItem('mode');

if (getMode && getMode === "dark") {
    body.classList.add('dark'),
    toggle.classList.toggle('active');
}

toggle.onclick = () => {
    toggle.classList.toggle('active'),
    body.classList.toggle('dark');

    if (!body.classList.contains('dark')) {
        return localStorage.setItem('mode' , 'light');
    }
    localStorage.setItem('mode' , 'dark');
}

// menu active function

menu.onclick = () => {
    menu.classList.toggle('active');
    links.classList.toggle('active');
}


