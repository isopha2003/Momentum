const API_KEY = "0f9ad78ba4779ce5da9e31c248c55783";


function onGeosuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child"); 
            const city = document.querySelector("#weather span:last-child"); 
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
} 

function onGeoError() {
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeosuccess, onGeoError);