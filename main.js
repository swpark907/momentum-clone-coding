'use strict'

// Get currnet Time and innerHTML
const clockContainer = document.querySelector('.clock');
const clockTitle = clockContainer.querySelector('.clock__title');

function currentTime() {    
    const date = new Date();    
    let hours = date.getHours();    
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();    
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours }:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;            
}
function init(){
    currentTime();
    setInterval(currentTime, 1000);    
}

init();


// Save User name to Strorage
const input = document.querySelector('.clock__input');
const inputBtn = document.querySelector('.clock__input-btn');
const userName = document.querySelector('.greeting__username');
const greeting = document.querySelector('.greeting');
const inputForm = document.querySelector('.input__form');
const USER_LS = "currentUser"

function hide(text) {    
    text.classList.remove('show')
    text.classList.add('hide');   
}

function show(text) {    
    text.classList.remove('hide')
    text.classList.add('show');
}

function loadName(){
    let currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null || currentUser === undefined) {
        show(inputForm);
        inputForm.addEventListener("submit", (event) => {
            event.preventDefault();
            localStorage.setItem(USER_LS, input.value);
            currentUser = localStorage.getItem(USER_LS);
            if(currentUser == null || currentUser === ""){
                input.placeholder = 'Please enter your name.'
            } else{
                hide(inputForm);
                show(greeting);                
                show(todoContainer);
                userName.innerHTML = currentUser;
            } 
        })        
    } else{        
        show(greeting);        
        userName.innerHTML = currentUser;                
    }    
}

