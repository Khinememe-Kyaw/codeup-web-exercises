'use strict';
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weather_Map_Key,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
})
    .done(function(data) {
    console.log('5 day forecast', data);
        let weatherHTML = '';
        let days =[ 'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday'];
        let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

        for (let i = 0; i < 5; i++) {
            let dayIndex = i * 8;
            let currentData = data.list[dayIndex];
            let todayDate = new Date(currentData.dt * 1000);
            var currentDay = days[todayDate.getDay()];
            var currentMonth = months[todayDate.getMonth()];

        weatherHTML+= `<section>
            <div>${currentDay}, ${currentMonth} ${todayDate.getDate()}</div>
            <div>${currentData.main.temp_max} / ${currentData.main.temp_min}</div>
            <div>Description: ${currentData.weather[0].description}</div>
            <div>Humidity: ${currentData.main.humidity}</div>
            <div>Wind: ${currentData.wind.gust}</div>
            <div>Pressure: ${currentData.main.pressure}</div>
        </section>`;
        }
    $("#weather-data").html(weatherHTML);
});


let accessToken = mapboxgl.accessToken = accessKey;
const weatherMap = new mapboxgl.Map({
    container: 'weather-map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 10 // starting zoom
});
