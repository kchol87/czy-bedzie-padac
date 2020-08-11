const myList = document.querySelector("#myList"); 
const button = document.querySelector(".button-check");
const header = document.querySelector(".header");
const img = document.querySelector(".weatherICO");
const text = document.querySelector(".text");
const form = document.querySelector('[class = "form"]');
const rainICO = '<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>';
const norainICO = '<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>';
const stormICO = '<div class="icon thunder-storm"><div class="cloud"></div><div class="lightning"><div class="bolt"></div><div class="bolt"></div></div></div>';
const background = document.querySelector("body").style.backgroundImage;
const insertCityList = function(cityList) {
    for (const city of cityList) {
        myList.insertAdjacentHTML('beforeend', '<option value="' + city + '" id="'+cityList.indexOf(city)+'">')}
};

const doTheWork = function(weatherData) {
    const city = weatherData.m;
    const rainAlarm = weatherData.a_o;
    const rainComing = weatherData.t_o;
    const rainProbs = weatherData.p_o;
    const stormAlarm = weatherData.s;
    const stormComing = weatherData.t_b;
    const stormProbs = weatherData.p_b;
    const itWillRain = function() {
        header.innerHTML = city;
        const rainProbsResult = function() {
            const result =  (rainProbs > 30) ? 'wysokie' : (rainProbs > 10) ? 'znaczne' : "niskie";
            return result};
        text.innerHTML = '<e>Będzie padać za ' + rainComing + ' minut.</e><br>Prawdpodobieństwo opadów jest ' + rainProbsResult()  +'.';
        img.innerHTML = rainICO;
        form.remove();
    };
    const itWontRain = function() {
        header.innerHTML = city;
        text.innerHTML = 'Nie będzie padać.';
        img.innerHTML = norainICO;
        form.remove();
    };
    const itWillRainStorm = function() {
        header.innerHTML = city;
        const stormProbsResult = function() {
            const result =  (stormProbs > 30) ? 'wysokie' : (stormProbs > 10) ? 'znaczne' : "niskie";
            return result};
        text.innerHTML = 'Będzie grzmieć za ' + stormComing + 'minut. Prawdpodobieństwo burzy jest ' + stormProbsResult() +'.';
        img.innerHTML = stormICO;
        form.remove();
    };
    const itRains = function() {
        header.innerHTML = city;
        text.innerHTML = 'Właśnie pada.';
        img.innerHTML = rainICO;
        form.remove();
    };
    const itStorm = function() {
        header.innerHTML = city;
        text.innerHTML = 'Trwa burza.';
        img.innerHTML = stormICO;
        form.remove();
    };
    (stormAlarm == 1) ? itStorm() : (rainAlarm == 1) ? itRains() : (stormProbs !== 0) ? itWillRainStorm() : (rainProbs !== 0) ? itWillRain() : itWontRain();
}

fetch('cities.json')
.then((resp) => resp.json())
.then(data => insertCityList(data.cities));

button.addEventListener("click", function(event) {
    event.preventDefault();
    const cityNumber = document.querySelector('[value="'+document.querySelector(".inputCity").value+'"]').id;
    fetch('https://antistorm.eu/webservice.php?id=' + cityNumber)  
    .then((resp) => resp.json())
    .then(data => { 
        doTheWork(data)
    })
});