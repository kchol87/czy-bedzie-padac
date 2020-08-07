const myList = document.getElementById("myList");
/* Creates city option entries in form*/
for (i=0; i < 439; i++) {
    myList.insertAdjacentHTML('beforeend', '<option value="' + cityList[i] + '">')};

/*Function to get weather data from antistorm.eu*/

const button = document.getElementById('button');
const header = document.getElementById("header");
const img = document.getElementById("weatherICO");
const text = document.getElementById("text");
const form = document.getElementById("form");
const rainICO = '<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>';
const norainICO = '<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>';
const stormICO = '<div class="icon thunder-storm"><div class="cloud"></div><div class="lightning"><div class="bolt"></div><div class="bolt"></div></div></div>';

 button.addEventListener("click", function(event) {
    event.preventDefault();
    let inputCityName = document.getElementById("inputCity").value;
    let cityNumber = cityList.indexOf(inputCityName);
    fetch('http://antistorm.eu/webservice.php?id='+cityNumber)  
    .then((resp) => resp.json())
    .then(data => {
        const city = data.m;
        const rainAlarm = data.a_o;
        const rainComing = data.t_o;
        const rainProbs = data.p_o;
        const stormAlarm = data.s;
        const stormComing = data.t_b;
        const stormProbs = data.p_b;
        const itWillRain = function() {
            header.innerHTML = city;
            let rainProbsResult = function() {
                let result =  (rainProbs > 30) ? 'wysokie' : (rainProbs > 10) ? 'znaczne' : "niskie";
                return result};
            text.innerHTML = '<s>Będzie padać za ' + rainComing + ' minut.</s><br>Prawdpodobieństwo opadów jest ' + rainProbsResult()  +'.';
            img.innerHTML = rainICO;
            button.remove();
            form.remove();
        };
        let itWontRain = function() {
            header.innerHTML = city;
            text.innerHTML = 'Nie będzie padać.';
            img.innerHTML = norainICO;
            button.remove();
            form.remove();
        };
        let itWillRainStorm = function() {
            header.innerHTML = city;
            let stormProbsResult = function() {
                let result =  (stormProbs > 30) ? 'wysokie' : (stormProbs > 10) ? 'znaczne' : "niskie";
                return result};
            text.innerHTML = 'Będzie grzmieć za ' + stormComing + 'minut. Prawdpodobieństwo burzy jest ' + stormProbsResult() +'.';
            img.innerHTML = stormICO;
            button.remove();
            form.remove();
        };
        let itRains = function() {
            header.innerHTML = city;
            text.innerHTML = 'Właśnie pada.';
            img.innerHTML = rainICO;
            button.remove();
            form.remove();
        };
        let itStorm = function() {
            header.innerHTML = city;
            text.innerHTML = 'Trwa burza.';
            img.innerHTML = stormICO;
            button.remove();
            form.remove();
        };
        (stormAlarm == 1) ? itStorm() : (rainAlarm == 1) ? itRains() : (stormProbs !== 0) ? itWillRainStorm() : (rainProbs !== 0) ? itWillRain() : itWontRain();
    });
});
    
