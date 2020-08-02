/*Creates a limited input city searchbox with hints*/


const input = document.querySelector('input');

/* Makes the search button inactive if a valid city input is not chosen*/


/* If a valid city is chosen in the searchbox and button is clicked, combines city name with city number 'cityNumber'. */



/*Gets weather data based on city from Antistorm.eu API and save it to 'weatherData' variable*/
let weatherData;
fetch('http://antistorm.eu/webservice.php?id=' + cityNumber)
    .then(response => response.json())
    .then(data  => weatherData = data);

/* Changes the index.html according to weather data*/











    

    


