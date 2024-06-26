let body = document.querySelector('body'),
darkbtn = document.querySelector('.darkBtn'),
searchIcon = document.querySelector('.searchIcon'),
fullSearchBar = document.querySelector('.search-bar-2'),
menu = document.querySelector('.menu'),
closeBtn = document.querySelector('.close-2'),
list = document.querySelector('.links'),
backBtn = document.querySelector('.back');


// menu active function

menu.onclick = () => {
    menu.classList.toggle('active'),
    list.classList.toggle('active');
}
// darkbtn active
let getMode = localStorage.getItem('mode');

if (getMode && getMode === "dark") {
    body.classList.add('dark'),
    darkbtn.classList.toggle('active');
}

darkbtn.onclick = () => {
    darkbtn.classList.toggle('active'),
    body.classList.toggle('dark');

    if (!body.classList.contains('dark')) {
        return localStorage.setItem('mode' , 'light');
    }
    localStorage.setItem('mode' , 'dark');
}

// searchbar active

searchIcon.onclick = () => {
    fullSearchBar.classList.add('active');
}
closeBtn.onclick = () => {
    fullSearchBar.classList.remove('active');

}

// backbtn function

backBtn.onclick = () =>{
    history.back();
}

// card popup

let fullCards = document.querySelectorAll('.card'),
popupCards = document.querySelectorAll('.card-popup'),
popupOpens = document.querySelectorAll('.card-btn'),
popupCloses = document.querySelectorAll('.popup-close');

popupOpens.forEach((popupOpen, index) => {
    popupOpen.onclick = () => {
        popupCards[index].classList.add('active');
    }
});

popupCloses.forEach((popupClose, index) => {
    popupClose.onclick = () => {
        popupCards[index].classList.remove('active');
    }
});








    

// popup scroll function






