'use strict';
// accessing the map using key
let accessToken = mapboxgl.accessToken = accessKey;
accessToken = mapboxgl.accessToken;
//adding coordinates on HTML
const coordinates = document.getElementById('coordinates');
//modifying map with center and zoom
const weatherMap = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [0,0],
    zoom: 2
});
//adding marker on map
const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([0, 0])
    .addTo(weatherMap);
//Using onDragEnd function in order to have draggable marker and print lon and lat value on webpage
function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    //placed weather data inside the function to get weather information based on marker's lat and lon
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weather_Map_Key,
    lat:    lngLat.lat,
    lon:   lngLat.lng,
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
            <div>Pressure: ${currentData.main.pressure}</div><br>
        </section>`;
        }
        $("#weather-data").html(weatherHTML);
    });

}
marker.on('dragend', onDragEnd);



function searchLocation(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    var input = document.getElementById("search-box").value;
    console.log("input is:" + input);
    var zipPattern = /^\d{5}$/;
    var isZipCode = zipPattern.test(input);

    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: weather_Map_Key,
        q:input,
        zip:input,
        units: "imperial"
    })
        .done(function (data) {
            console.log('5 day forecast', data);
            console.log(data.city.coord.lat);
            console.log(data.city.coord.lon);
        })

}
var inputSubmit = document.querySelector('#search');
inputSubmit.addEventListener('click', searchLocation );

// var currentLocation = "16004, Braesgate Dr, Austin, TX, 78717";
//
// // the  geocode method from mapbox-geocoder-utils.js
// geocode(currentLocation, accessToken).then(function (coordinates) {
//     console.log(coordinates);
//     map.setCenter(coordinates);
//     map.setZoom(15);
// })

// // for(i = 0; i<5; i++){
// //     document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
// //         data.list[i].weather[0].icon
// //         +".png";
// // }
// // <div> ${src = "http://openweathermap.org/img/wn/"+currentData.weather[0].icon}</div>
//
//
// // .src = "http://openweathermap.org/img/w/"+obj.weather[0].icon+".png";
//
// var currentLocation = "16004, Braesgate Dr, Austin, TX, 78717";
//
//
// // the  geocode method from mapbox-geocoder-utils.js
// function placeMarkerAndPopup(info, token, map) {
//     geocode(info, token).then(function (coordinates) {
//         console.log(coordinates);
//         var latitude = coordinates[1];
//         var longitude = coordinates[0];
//         console.log(latitude);
//         console.log(longitude);
//         map.setCenter(coordinates);
//         map.setZoom(15);
//         var marker = new mapboxgl.Marker()
//             .setLngLat(coordinates)
//             .addTo(map)
//     });
// }
// placeMarkerAndPopup(currentLocation, accessToken, weatherMap)
//
// restaurantInfo.forEach(function(info){
//     placeMarkerAndPopup(inputInfo, accessToken, weatherMap)
// });
