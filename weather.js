'use strict'

const API_KEY = 'da5866386d83096c6b031a4d4483c3f3';
const weatherInfo = document.querySelector('.weather__info');
const weatherIcon = document.querySelector('.weather__icon')

function getWeather(lat, lon){
    fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){        
        const temp = json.main.temp;
        const cityName = json.name;
        const weatherObj = json.weather[0];
        weatherIcon.src = `https://openweathermap.org/img/wn/${weatherObj.icon}@2x.png`;
        weatherInfo.innerHTML = `${temp}&#176;C ${cityName}`;
        weatherInfo.innerHTML = `${temp}&#176;C ${cityName}`;

    })
}


function loadPosition(){
    
}

function savePosition(positionObj){        
    localStorage.setItem('position', JSON.stringify(positionObj)); 
}

function geoSuccess(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude,longitude);
    const positionObj = {
        latitude,
        longitude
    }
    savePosition(positionObj);
    getWeather(latitude,longitude);
}

function geoError(position){
    console.log("Can't not read current position");
}

function getPosition(position){
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
    
}

function showPosition(){
    const LsPosition = localStorage.getItem('position');    
    if(LsPosition === null){        
        getPosition();
    }
    const parsePosition = JSON.parse(LsPosition);
    getWeather(parsePosition.latitude, parsePosition.longitude);
}

showPosition();
