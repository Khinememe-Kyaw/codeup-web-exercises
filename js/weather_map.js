'use strict';
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weather_Map_Key,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
})
    .done(function(data) {
    console.log('5 day forecast', data);
    let todayDate= new Date(data.list[0].dt*1000);
    let days =[ 'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var currentDay = days[todayDate.getDay()];
    var currentMonth = months[todayDate.getMonth()];
    let weatherHTML = `<section><h1>${currentDay}, ${currentMonth} ${todayDate.getDate()}</h1>
                                <p>${data.list[0].main.temp_max} / ${data.list[0].main.temp_min}</p></section>`;
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

// ${data.list[0].main.temp_max}