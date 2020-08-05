/* Fetches city list from local file*/
var cityList = [];
let URL = new Request("cities.json");
fetch(URL)
.then(response => response.json())
.then(data => cityList = data);

/* Creates city option entries in form*/
const myList = document.getElementById("myList");
for (i = 0; i < 8; i++) {myList.insertAdjacentHTML('beforeend', '<option value="'+ cityList[i] + '">')};

/*Function to get weather data from antistorm.eu*/
const getWeatherData = function() {
  let inputCityName = document.getElementById("inputCity").value;
  let cityNumber = cityList.indexOf(inputCityName);
  let weatherData;
  fetch('http://antistorm.eu/webservice.php?id=' + cityNumber)
    .then(response => response.json())
    .then(data  => weatherData = data);
 return weatherData;
 };

/*const getWeather() = function() {
  (document.getElementById("inputCity") !== null) ? getWeatherData() : console.log("ERROR empty city");
};*/

const button = document.getElementById("button");
button.addEventListener("click", getWeatherData());

/* Makes the search button inactive if a valid city input is not chosen*/

/* If a valid city is chosen in the searchbox and button is clicked, combines city name with city number 'cityNumber'. */

/*Gets weather data based on city from Antistorm.eu API and save it to 'weatherData' variable*/
/*let weatherData;
fetch('http://antistorm.eu/webservice.php?id=' + cityNumber)
    .then(response => response.json())
    .then(data  => weatherData = data);*/

/* Changes the index.html according to weather data*/












    


