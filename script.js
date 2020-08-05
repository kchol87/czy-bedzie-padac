/*Creates a limited input city searchbox with hints*/


var cityList = [];
let URL = new Request("cities.json");
fetch(URL)
.then(response => response.json())
.then(data => cityList = data);
const myList = document.getElementById("myList");
/*for (const [key, value] of Object.entries(cityList)) {myList.add(new Option(key, value))};*/

for (i = 0; i < 439; i++) {myList.insertAdjacentHTML('beforeend', '<option value="'+ Object.keys(cityList)[i] + '">')};

/*document.addEventListener("click", function() {
    for (const [key, value] of Object.entries(cityList))
    {myList.add(new Option(key, value))};
    }
);*/



/* Makes the search button inactive if a valid city input is not chosen*/
const checkButton = document.querySelector("#checkButton");
(document.querySelector("#myList") == null) ? checkButton.disabled = true : checkButton.disabled = false;


/* If a valid city is chosen in the searchbox and button is clicked, combines city name with city number 'cityNumber'. */



/*Gets weather data based on city from Antistorm.eu API and save it to 'weatherData' variable*/
/*let weatherData;
fetch('http://antistorm.eu/webservice.php?id=' + cityNumber)
    .then(response => response.json())
    .then(data  => weatherData = data);

/* Changes the index.html according to weather data*/












    


