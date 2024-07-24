/* Set initial values for global variables */
let weatherList = "";
const apiKey = "08894daa1455ad0a809d59445b5cfdb9";      //personal API Key from http://openweatherapp.org
const weatherCard = document.querySelector("#current-weather");
const futureWeather = document.querySelector("#tomorrow");

/* Define inital load data for Cozumel, Mexico */
const initialUrl = "https://api.openweathermap.org/data/2.5/weather?lat=20.4230&lon=-86.9223&units=imperial&appid="+apiKey;
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.4230&lon=-86.9223&units=imperial&appid="+apiKey;

/* Function to fetch weather data from openweatherapp.org using lattitude and longitude */
const getWeather = async (URL) => {
    const response = await fetch(URL);
    if(response.ok){
        weatherList = await response.json();
        // console.log(weatherList);
    }
    displayWeather(weatherList);
}

const getForecast = async (URL) => {
    const response = await fetch(URL);
    if(response.ok){
        forecastList = await response.json();
        // console.log(forecastList);
    }
    displayForecast(forecastList);
}

/* Function to modify the HTML elements */
const displayWeather = (data) => {
        const highElement = document.querySelector("#highTemp");
        highElement.textContent = `Today's High Temperature in Cozumel is: ${Math.round(data['main']['temp_max'])}°F`;
        const tempElement = document.createElement('p');
        tempElement.id = "temp";
        const iconElement = document.createElement('section');
        iconElement.id = "icon";
        const iconImg = document.createElement('img');
        iconImg.id = "icon-img";
        const descElement = document.createElement('p');
        descElement.id = "description";
        const humidElement = document.createElement('p');
        humidElement.id = "humidity";
        tempElement.textContent = `${Math.floor(data['main']['temp'])}°F`;
        const iconUrl = "https://openweathermap.org/img/w/"+data['weather'][0]['icon']+".png";
        description = data['weather'][0]['description'];
        const captDescription = description[0].toUpperCase() + description.substring(1); 
        iconImg.alt = `${data['weather'][0]['description']}`;
        descElement.textContent = `<${captDescription}>`;
        humidElement.textContent = `${data['main']['humidity']}% Hudmidity`;
       
    
        iconImg.setAttribute('src', iconUrl);
        iconElement.appendChild(iconImg);

        weatherCard.appendChild(tempElement);
        weatherCard.appendChild(iconElement);
        weatherCard.appendChild(descElement);
        weatherCard.appendChild(humidElement);

}

const displayForecast = (data) => {
    const nextDay = document.createElement('p');
    nextDay.id = "next-day";
    
    nextDay.textContent = `${Math.floor(data['list'][4]['main']['temp'])}°F @ 3pm`;

    futureWeather.appendChild(nextDay);
}

getWeather(initialUrl);     //initial call to get weather for defaul city (Cozumel, Mexico)
getForecast(forecastUrl);