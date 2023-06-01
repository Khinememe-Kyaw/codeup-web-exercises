'use strict';

let accessToken = mapboxgl.accessToken = accessKey;
accessToken = mapboxgl.accessToken;
const coordinates = document.getElementById('coordinates');
const weatherMap = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [0,0],
    zoom: 2
});

const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([0, 0])
    .addTo(weatherMap);

function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
// console.log(lngLat.lng);
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

// var currentLocation = "16004, Braesgate Dr, Austin, TX, 78717";
//
// // the  geocode method from mapbox-geocoder-utils.js
// geocode(currentLocation, accessToken).then(function (coordinates) {
//     console.log(coordinates);
//     map.setCenter(coordinates);
//     map.setZoom(15);
// })
// const marker = new mapboxgl.Marker({
//     draggable: true
// })
//     .setLngLat([-74.5, 40])
//     .addTo(map);
//
// function onDragEnd() {
//     const lngLat = marker.getLngLat();
//     coordinates.style.display = 'block';
//     coordinates.innerHTML = `Longitude: ${lngLat.lon}<br />Latitude: ${lngLat.lat}`;
// }
// marker.on('dragend', onDragEnd);
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
// // Adding Coffee
// // Get references to form and coffee list elements
// var nameInput = document.querySelector('#name-input');
//
// // Add event listener to form submission
// var inputSubmit = document.querySelector('#addCoffee');
// inputSubmit.addEventListener('click', addCoffee );
//
// function addCoffee(e) {
//     e.preventDefault();
//     // Retrieve coffee name and roast values
//     var coffeeName = document.querySelector('#coffee-name').value;
//     var coffeeRoast = document.querySelector('#coffee-roast').value;
//
//     var capitalName = capitalizeFirstLetter(coffeeName);
//     // Create new coffee object
//     var newCoffee = {
//         id: coffees.length + 1,
//         name: capitalName,
//         roast: coffeeRoast
//     };
//     //Add new coffees to original coffee list
//     coffees.push(newCoffee);
//     // renderCoffees(coffees);
//
//     // clear from the original list once refresh the page
//     nameInput.reset();
//     tbody.innerHTML = renderCoffees(coffees);
// }
