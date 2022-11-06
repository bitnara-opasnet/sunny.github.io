const API_KEY = "cd4c6b8e6b1ae6afda00f92c1cc3fd5a"

function onGeoOk(position) {
     let weatherIcon = {
        '01' : 'fas fa-sun',
        '02' : 'fas fa-cloud-sun',
        '03' : 'fas fa-cloud',
        '04' : 'fas fa-cloud-meatball',
        '09' : 'fas fa-cloud-sun-rain',
        '10' : 'fas fa-cloud-showers-heavy',
        '11' : 'fas fa-poo-storm',
        '13' : 'far fa-snowflake',
        '50' : 'fas fa-smog'
    };
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    fetch(url)
        .then(response => response.json())
        .then(data=>{
            const weatherIconContainer = document.querySelector("#weather-icon");
            const city = document.querySelector("#weather-city");
            const temp = document.querySelector("#weather-temp");
            const weatherIconNum = data.weather[0].icon.slice(0,2);
            weatherIconContainer.setAttribute("class", weatherIcon[weatherIconNum]);
            city.innerText = data.name;
            temp.innerText = `${parseInt(data.main.temp)} °C`;
        });
};

function onGeoError() {
    alert("Can't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

