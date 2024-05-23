/* Set initial values for global variables */
let weatherList = "";
let positionList = [];
let myLat = "";
let myLon = "";
let latLonUrl = "";
const apiKey = "08894daa1455ad0a809d59445b5cfdb9";      //personal API Key from http://openweatherapp.org
let currentCondition = "HELLO";

/* Define inital load data for Louisville, KY */
const initialUrl = "https://api.openweathermap.org/data/2.5/weather?lat=38.6856&lon=-85.7702&units=imperial&appid="+apiKey;

/* Function to fetch weather data from openweatherapp.org using lattitude and longitude */
const getWeather = async (URL) => {
    const response = await fetch(URL);
    if(response.ok){
        weatherList = await response.json();
        console.log(weatherList);
    }
    displayWeather(weatherList);
}

/* Function to fetch location data from openweatherapp.org using city and state */
const getLatLon = async (URL) => {
    const response = await fetch(URL);
    if(response.ok){
        positionList = await response.json();
        console.log(positionList);
        latLonUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+positionList[0]['lat']+"&lon="+positionList[0]['lon']+"&units=imperial&appid="+apiKey;
        getWeather(latLonUrl);
    }    
}

/* Function to modify the HTML elements */
const displayWeather = (data) => {
        const cityElement = document.querySelector("#city");
        const tempElement = document.querySelector("#temp");
        const iconElement = document.querySelector("#icon");
        const descElement = document.querySelector("#description");
        const humidElement = document.querySelector("#humidity");
        const windElement = document.querySelector("#wind");
        cityElement.textContent = `Local Weather`;
        tempElement.textContent = `${Math.floor(data['main']['temp'])}°F`;
        const iconUrl = "https://openweathermap.org/img/w/"+data['weather'][0]['icon']+".png";
        iconElement.src = iconUrl;
        const description = data['weather'][0]['description'];
        const captDescription = description[0].toUpperCase() + description.substring(1); 
        iconElement.alt = `${data['weather'][0]['description']}`;
        // descElement.textContent = `Current coditions -- ${captDescription}`;
        humidElement.textContent = `Humidity -- ${data['main']['humidity']}%`;
        windElement.textContent = `Wind Speed -- ${data['wind']['speed']} mph`;
        switchBackground(data);
}

/*Function to change background image to match weather conditions in searched location */
// function switchBackground(data) {
//     currentCondition = data['weather'][0]['main'];
//     console.log(currentCondition);
//     switch(currentCondition){
//         case 'Snow':
//             document.body.style.backgroundImage = "url('https://schackattack89.github.io/cse121b/final_project/images/snow.jpg')";
//             break;
//         case 'Thunderstorm':
//             document.body.style.backgroundImage = "url('https://schackattack89.github.io/cse121b/final_project/images/storm.jpg')";
//             break;
//         case 'Rain':
//             document.body.style.backgroundImage = "url('https://schackattack89.github.io/cse121b/final_project/images/rain.jpg')";
//             break;
//         case 'Clouds':
//             document.body.style.backgroundImage = "url('https://schackattack89.github.io/cse121b/final_project/images/clouds.jpg')";
//             break;
//         case 'Clear':
//             document.body.style.backgroundImage = "url('https://schackattack89.github.io/cse121b/final_project/images/sun.jpg')";
//             break;
//         default:
//             document.body.style.backgroundImage = "url('https://schackattack89.github.io/cse121b/final_project/images/nature.jpg')";
//     }
//     //console.log(currentCondition)
// }

getWeather(initialUrl);     //initial call to get weather for defaul city (Louisville, KY)

const inputText = document.getElementById("mysearch"); //sets field for input text from search bar
const inputButton = document.querySelector("button"); //button selector

/* Event listener for "CLICK" of search icon */
inputButton.addEventListener("click", () => {       //function on search button click
  let localeInput = inputText.value;                //gets user enter input
  let parts = localeInput.split(',');               //breaks city and state apart at common delimiter
  let city = parts[0];                              //defines first part to city variable
  let state = parts[1];                             //defines second part to state variable
  let cityStateData = "https://api.openweathermap.org/geo/1.0/direct?q="+city+","+state+",usa&limit=1&appid="+apiKey;      //creates input string for getLatLon function from user entered city/state
  getLatLon(cityStateData);                            //calls function to get location data for user entry (city/state)
  switchBackground(weatherList);
});

/*Event Listener for "ENTER" in text-input field */
inputText.addEventListener("keypress", function(e) {
    if(e.key === 'Enter'){    
        let localeInput = inputText.value;                
        let parts = localeInput.split(',');               
        let city = parts[0];                              
        let state = parts[1];                             
        let cityStateData = "https://api.openweathermap.org/geo/1.0/direct?q="+city+","+state+",usa&limit=1&appid="+apiKey;
        getLatLon(cityStateData);   
    }                            
});

console.log(currentCondition);