var searchBtnEl = document.querySelector('#search-btn')
var searchFormEl = document.querySelector('#search-form')
// //for when user clicks on search button
// function handleSearchBtnClick() {
//     //fetch weather for city in input

//     //diplay weather
//     var cityName = 'Houston' //TODO: get city name from input 
//     fetchWeather()//pass in city name using input

//     //save city name in local storage
// };
// //for when user clicks on a button in recent history
// function handleCityBtnClick() {
//     //fetch weather for city in ibtn

//     //diplay weather
//     fetchWeather(cityName)//pass in city name using which history button that is clicked
// };

// searchBtnEl.addEventListener('click', handleSearchBtnClick);
// localStorage.setItem(id, description);

//takes in city name and returns city data 
var searchSubmit = function (event) {
    event.preventDefault();

    //cityNameEl.value.trim();
    console.log(cityName);

    if (cityName) {
        getForecast(cityName);

        resultsrEl.textContent = '';
        searchNameEl.value = '';
    }
};
var searchNameEl = document.querySelector('#search-input');
var limit = 1;
var apiKey = '8a12f98687e75d009acb2c76284f6f41'
function searchApi() {

    var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`;
    fetch(apiUrl)
        .then(function (response) {
            var lat = data[0].lat
            var lon = data[0].lon
            var cityNameList = data.list[0].name;
            var latlongUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
        }
            fetch(latlongUrl).then(function (response)){
                return response.json();
            }).then(function (data)) {
        var cityNames = document.querySelector('#city-results');
        var tempEl = document.querySelector('#temp');
        var windEl = document.querySelector('#wind');
        var humdEl = document.querySelector('#humidity');
        var dateEl = document.querySelector('#date');
        var emojiEl = document.querySelector('#icon')
        var date = data.list[0].dt_text;
        var temp = data.list[0].main.temp;
        var humidity = data.list[0].main.humidity;
        var windspeed = data.list[0].wind.speed;
        var emoji = data.list[0].weather[0].icon;

        //emojiEl.setAttribute("src", iconurl);
        tempEl.innerHTML = "Temp: " + temp;
        windEl.innerHTML = "Wind Speed: " + windspeed;
        humdEl.innerHTML = "Humidity: " + humidity;
        dateEl.innerHTML = "Date: " + date;
        emojiEl.innerHTML = emoji;
        cityNames.innerHTML = cityNameList;
        
        console.log(temp, humidity, windspeed);
    }};

    searchBtnEl.addEventListener('click', searchSubmit)
    searchFormEl.addEventListener('submit', searchSubmit)

    // function renderCurrentWeather() {


    // function renderForecast(mappedData) {

    // };

//     if (response.ok) {
//         console.log(response);
//         response.json().then(function (data) {
//             console.log(data);

//         });
//     } else {
//         alert('Error: ' + response.statusText);
//     }
// }
// .catch (function (error) {
//     alert('Unable to connect to acess location');
// });


29.7589382
-95.3676974