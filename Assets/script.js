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
                var emojiEl = document.querySelector('#icon');
                var date = data.list[0].dt_txt;
                var temp = data.list[0].main.temp;
                var humidity = data.list[0].main.humidity;
                var windspeed = data.list[0].wind.speed;
                var emoji = data.list[0].weather[0].icon;
                var emojiUrl = 'https://openweathermap.org/img/wn/10d' + emoji + '@2x.png';

                //emojiEl.setAttribute("src", emojiUrl);
                tempEl.textContent = "Temp: " + temp;
                windEl.textContent = "Wind Speed: " + windspeed;
                humdEl.textContent = "Humidity: " + humidity;
                dateEl.textContent = "Date: " + date;
                emojiEl.textContent = emojiUrl;
                cityNames.textContent = cityName;

                //console.log(date, temp, humidity, windspeed, emoji);
                display5Forecast(data);
                
                
            })
        })
};

function display5Forecast(forecastData) {
    for (i = 8; i < forecastData.list.length; i = i + 8) {
        //var forecastContEl = document.querySelector('#forecast');
        var temp5 = document.querySelector('#forecast-temp');
        var date5 = document.querySelector('#date-forecast');
        var emoji5 = document.querySelector('#emoji');
        var wind5 = document.querySelector('#forecast-wind');
        var humd5 = document.querySelector('#forecast-hum');
        var emojiData = forecastData.list[i].icon;
    
        var forecastEmojiUrl = 'https://openweathermap.org/img/wn/' + emojiData + '@2x.png';
       
        emoji5.setAttribute("src", forecastEmojiUrl);
        date5.textContent = forecastData.list[i].dt_txt;
        temp5.textContent = forecastData.list[i].main.temp + "°F";
        humd5.textContent = forecastData.list[i].main.humidity + "%";
        wind5.textContent = forecastData.list[i].wind.speed + "mph";
        
        console.log('forecast data is', forecastData);
        console.log('date', date5);
        console.log('temp', temp5);
        console.log('humdity', humd5);
        console.log('wind', wind5);


    }
};

function callCityButton(){
    console.log(this.textContent);
    getLocation(this.textContent);
    display5Forecast(this.data);
};

//temp converter 
function temperatureConverter(temp) {
    return Math.round((temp - 273.15) * 1.8 + 32);
};

function saveSearchHistory() {
    localStorage.setItem("history", JSON.stringify(searchHistory));
};

searchBtnEl.addEventListener('click', SearchForm)
searchFormEl.addEventListener('submit', SearchForm)
