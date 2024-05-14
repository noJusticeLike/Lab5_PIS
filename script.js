const apiKey = "a091776acdf24b51a88041561230c367";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ua&q=";

const cityName = document.querySelector('.city-name');
const temperature = document.querySelector('.temperature');
const humidity_number = document.querySelector('.humidity-number');
const wind_speed_number = document.querySelector('.wind-speed-number');
const feels_like = document.querySelector('.feels-like');

const citySearch = document.querySelector('.city-search');
const searchBtn = document.querySelector('.search-btn');
const weatherForecast = document.querySelector('.weather-forecast');
const invalidName = document.querySelector('.invalid-name');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  if (response.status == 404)
  {
    invalidName.style.display = "block";
    weatherForecast.style.display = "none";

  } else {
    invalidName.style.display = "none";
    weatherForecast.style.display = "block";

    
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "img/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "img/clear.png";
  }  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "img/rain.png";
  }  else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "img/drizzle.png";
  }  else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "img/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "img/snow.png";
  }


  cityName.innerHTML = data.name;
  temperature.innerHTML = Math.round(data.main.temp) + "°C";
  humidity_number.innerHTML = data.main.humidity + " %";
  wind_speed_number.innerHTML = data.wind.speed + " км/год";
  feels_like.innerHTML =  "Відчувається як " + Math.round(data.main.feels_like) + "°C";
}
}


function HandleSearch() {
    checkWeather(citySearch.value);
    citySearch.value = "";
}

citySearch.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        HandleSearch();
    }
});

searchBtn.onclick = HandleSearch;