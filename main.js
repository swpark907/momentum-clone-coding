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
    text.style.opacity = '0';
    setTimeout(function(){inputForm.style.display = 'none'}, 1000);
}

function show(text) {    
    text.style.display = 'flex';
    setTimeout(function(){text.style.opacity = '1'}, 100);
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
                setTimeout(function(){
                    show(greeting);                
                    show(todoContainer);}, 1000)               
                userName.innerHTML = currentUser;
            } 
        })        
    } else{
        inputForm.style.display = 'none';        
        show(greeting);        
        userName.innerHTML = currentUser;                
    }    
}

// Change greeting message by currnet time

const clockGreeting = document.querySelector('.greeting__greeting');
function changeGreeting() {
    const date = new Date();
    let hours = date.getHours();    
    if(hours >= 5 && hours < 11){
        clockGreeting.innerHTML = 'Good morning! ';
    } else if(hours >= 11 && hours < 16){
        clockGreeting.innerHTML = 'Good afternoon! ';        
    } else if(hours >= 16) {
        clockGreeting.innerHTML = 'Good evening! ';
    }    
}
changeGreeting();



loadName();