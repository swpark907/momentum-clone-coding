'use strict'
const body = document.querySelector('body');
const IMAGE_NUM = 5;


function bgChanger(randomNumber){
    
    const image = new Image();
    image.src = `images/${randomNumber + 1}.jpg`
    image.classList.add('bgImage');
    body.prepend(image);
}

function init(){
    const randomNumber = Math.floor(Math.random() * IMAGE_NUM);
    bgChanger(randomNumber);    
}

init();