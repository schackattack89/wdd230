/* Set initial values for global variables */
let weatherList = "";
let positionList = [];
let myLat = "";
let myLon = "";
let latLonUrl = "";
const apiKey = "08894daa1455ad0a809d59445b5cfdb9";      //personal API Key from http://openweatherapp.org
let currentCondition = "HELLO";

/* Define inital load data for Scottsburg, IN */
const initialUrl = "https://api.openweathermap.org/data/2.5/weather?lat=38.6856&lon=-85.7702&units=imperial&appid="+apiKey;
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=38.6856&lon=-85.7702&units=imperial&appid="+apiKey;

/* Function to fetch weather data from openweatherapp.org using lattitude and longitude */
const getWeather = async (URL) => {
    const response = await fetch(URL);
    if(response.ok){
        weatherList = await response.json();
        console.log(weatherList);
    }
    displayWeather(weatherList);
}

const getForecast = async (URL) => {
    const response = await fetch(URL);
    if(response.ok){
        forecastList = await response.json();
        console.log(forecastList);
    }
    displayForecast(forecastList);
}

/* Function to modify the HTML elements */
const displayWeather = (data) => {
        const cityElement = document.querySelector("#city");
        const tempElement = document.querySelector("#temp");
        const iconElement = document.querySelector("#icon");
        const chillElement = document.querySelector("#chill");
        const descElement = document.querySelector("#tempdescription");
        const humidElement = document.querySelector("#humidity");
        const windElement = document.querySelector("#wind");
        cityElement.textContent = `Local Weather`;
        tempElement.textContent = `${Math.floor(data['main']['temp'])}°F`;
        const iconUrl = "https://openweathermap.org/img/wn/"+data['weather'][0]['icon']+".png";
        iconElement.src = iconUrl;
        const description = data['weather'][0]['description'];
        const captDescription = description[0].toUpperCase() + description.substring(1); 
        iconElement.alt = `${data['weather'][0]['description']}`;
        descElement.textContent = `${captDescription}`;
        // humidElement.textContent = `Humidity -- ${data['main']['humidity']}%`;
        // windElement.textContent = `Wind Speed -- ${data['wind']['speed']} mph`;
        // let tempVariable = data['main']['temp'];
        // let speedVariable = data['wind']['speed'];
        // let chillFactor = Math.floor(35.74 + 0.6215*tempVariable - (35.75*(speedVariable**0.16)) + 0.4275*tempVariable*(speedVariable**.16));
        // if((tempVariable<=50)&&(speedVariable>3.0)){
        //     chillElement.textContent = `Wind Chill -- ${chillFactor}°F`;
        // }
        // else{
        //     chillElement.textContent = `Wind Chill -- N/A`;
        // }
        // switchBackground(data);
}

const displayForecast = (data) => {
    const nextDay = document.getElementById('nextDayCast');
    const twoDay = document.getElementById('twoDayCast');
    const threeDay = document.getElementById('threeDayCast');
    
    nextDay.textContent = `Tomorrow: ${Math.floor(data['list'][8]['main']['temp'])}°F`;
    twoDay.textContent = `Two Days: ${Math.floor(data['list'][16]['main']['temp'])}°F`;
    threeDay.textContent = `Three Days: ${Math.floor(data['list'][24]['main']['temp'])}°F`;
}

getWeather(initialUrl);     //initial call to get weather for defaul city (Louisville, KY)
getForecast(forecastUrl);




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
//   switchBackground(weatherList);
});

/*Event Listener for "ENTER" in text-input field */
// inputText.addEventListener("keypress", function(e) {
//     if(e.key === 'Enter'){    
//         let localeInput = inputText.value;                
//         let parts = localeInput.split(',');               
//         let city = parts[0];                              
//         let state = parts[1];                             
//         let cityStateData = "https://api.openweathermap.org/geo/1.0/direct?q="+city+","+state+",usa&limit=1&appid="+apiKey;
//         getLatLon(cityStateData);   
//     }                            
// });

// console.log(currentCondition);