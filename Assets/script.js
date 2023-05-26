var searchBtnEl = document.querySelector('#search-btn')
var searchFormEl = document.querySelector('#search-form')
var searchNameEl = document.querySelector('#search-input');
var limit = 1;
var apiKey = '8a12f98687e75d009acb2c76284f6f41'

function SearchForm(event) {
    event.preventDefault();

    var searchVal = document.querySelector("#search-input").value;

    if (!searchVal) {
        console.error('Enter a valid value.');
        return;
    }

    getLocation(searchVal);

};

function getLocation(cityInput) {
    console.log("this is in geolocation: ", cityInput);
    searchApi(cityInput);
}

function searchApi(cityName) {

    var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`;
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var lat = data[0].lat;
            var lon = data[0].lon;
            var latlongUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
        
    fetch(latlongUrl).then(function (response) {
        return response.json();
    }).then(function (data) {
        var cityNames = document.querySelector('#city-results');
        var tempEl = document.querySelector('#temp');
        var windEl = document.querySelector('#wind');
        var humdEl = document.querySelector('#humidity');
        var dateEl = document.querySelector('#date');
        var emojiEl = document.querySelector('#icon')
        var date = data.list[0].dt_text;
        var temp = data.list[0].main.temp;
        var humidity = data.list[0].main.humidity;
        var windspeed = data.list[0].wind[0].speed;
        var emoji = data.list[0].weather[0].icon;

        //emojiEl.setAttribute("src", iconurl);
        tempEl.innerHTML = "Temp: " + temp;
        windEl.innerHTML = "Wind Speed: " + windspeed;
        humdEl.innerHTML = "Humidity: " + humidity;
        dateEl.innerHTML = "Date: " + date;
        emojiEl.innerHTML = emoji;
        cityNames.innerHTML = cityName;

    })
    console.log(temp, humidity, windspeed);
    })
};

//temp converter 
function temperatureConverter(temp) {
    return Math.round((temp - 273.15) * 1.8 + 32);
};

function saveSearchHistory() {
    localStorage.setItem("history", JSON.stringify(searchHistory));
}

searchBtnEl.addEventListener('click', SearchForm)
searchFormEl.addEventListener('submit', SearchForm)
