let body = document.querySelector('body'),
menu = document.querySelector('.menu'),
toggle = document.querySelector('.toggle'),
dropdown = document.querySelector('.dropdown'),
nav = document.querySelector('.nav'),
chatBtn = document.querySelector('.chat-icon'),
chatBar = document.querySelector('.chat-bar'),
chatCloseBtn = document.querySelector('.close-btn-2'),
searchIcon = document.querySelector('.searchIcon'),
fullSearchBar = document.querySelector('.search-bar-2'),
closeBtn = document.querySelector('.close-2');


// sticky navbar
window.addEventListener('scroll', () =>  {
    nav.classList.toggle('sticky' , window.scrollY > 0);
    chatBar.classList.toggle('sticky' , window.scrollY > 0);
    dropdown.classList.toggle('sticky' , window.scrollY > 0);
});

// menu active function

menu.onclick = () => {
    dropdown.classList.toggle('active'),
    menu.classList.toggle('active');
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

// chat function
chatBtn.onclick = () => {
    chatBar.classList.add('active');
}
chatCloseBtn.onclick = () => {
    chatBar.classList.remove('active');
}

// searchbar active

searchIcon.onclick = () => {
    fullSearchBar.classList.add('active');
}
closeBtn.onclick = () => {
    fullSearchBar.classList.remove('active');

}



