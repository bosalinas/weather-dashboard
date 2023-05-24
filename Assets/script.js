var searchBtnEl = document.querySelector('#search-btn')
//for when user clicks on search button
function handleSearchBtnClick() {
    //fetch weather for city in input

    //diplay weather
    var cityName = 'Houston' //TODO: get city name from input 
    fetchWeather()//pass in city name using input

    //save city name in local storage
};
//for when user clicks on a button in recent history
function handleCityBtnClick() {
    //fetch weather for city in ibtn

    //diplay weather
    fetchWeather(cityName)//pass in city name using which history button that is clicked
};

searchBtnEl.addEventListener('click', handleSearchBtnClick);
localStorage.setItem(id, description);

//takes in city name and returns city data
function fetchWeather(cityName) {
    console.log('searching weather for', cityName);
    // use API 
    var apiUrl = `api.openweathermap.org/data/2.5/forecast?q=${city name}&appid=8a12f98687e75d009acb2c76284f6f41`

    fetch(apiUrl)
        .then(function(response) {
            return response.json()
        })
        .then(function(data){ };
            //get data we actually need
        var mappedForecastData = 
        var mappedData = data.list.map(weather)
            return {
            renderCurrentWeather();
            renderForecast();
        };
        )

};
console.log(mappedData);

var displayCurrentWeather = document.querySelector('#results'); 

function renderCurrentWeather(mappedForecastData) {

};

function renderForecast(mappedData) {

};