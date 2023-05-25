// var searchBtnEl = document.querySelector('#search-btn')
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


var cityNameEl = document.querySelector('#cityname'); 
var tempEl = document.querySelector('#temp');
var windEl = document.querySelector('#wind');
var humdEl = document.querySelector('#humidity');
var dateEl = document.querySelector('#date');
var resultsrEl = document.querySelector('#results');
//takes in city name and returns city data 
var searchSubmit = function (event) {
    event.preventDefault();

    var cityname = cityNameEl.value.trim();
    console.log(cityname);

    if (cityname) {
        getForecast(cityname);

        resultsrEl.textContent = '';
        cityNameEl.value = '';
    }
};
var limit = '1';
var getForecast = function(cityname) {
    var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=${limit}&appid=8a12f98687e75d009acb2c76284f6f41`;


    fetch(apiUrl)
    .then(function (response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
                console.log(data);
                displayForecast(data, cityname);
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    })
    .catch(function (error) {
        alert('Unable to connect to acess location');
    });
};



// function renderCurrentWeather() {
    // tempEl.textContent = 'Temp: ' + temp;
    // windEl.textContent = 'Wind Speed: ' + wind;
    // humdEl.textContent = 'Humidity: ' + humd;
    // dateEl.textContent = 'Date: ' = date;
// };

// function renderForecast(mappedData) {

// };