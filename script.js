
/* Fetches city list from local file*/
const cityList = ["Aleksandrów Kujawski",  "Aleksandrów Łódzki", "Andrychów",     "Augustów",    "Barlinek",    "Bartoszyce",    "Będzin",    "Bełchatów",    "Biała Podlaska",    "Białogard",    "Białystok",    "Bielawa",    "Bielsk Podlaski",    "Bielsko-Biała",    "Bieruń",    "Biłgoraj",    "Biskupiec",    "Blachownia",    "Błonie",    "Bochnia",    "Bogatynia",    "Boguszów-Gorce",    "Bolesławiec",    "Braniewo",    "Brodnica",    "Brwinów",    "Brzeg",    "Brzeg Dolny",    "Brzesko",    "Brzeszcze",    "Brzeziny",    "Bukowno",    "Busko-Zdrój",    "Bydgoszcz",    "Bystrzyca Kłodzka",    "Bytom",    "Bytów",    "Chełm",    "Chełmek",    "Chełmno",    "Chełmża",    "Chodzież",    "Chojnice",    "Chojnów",    "Chorzów",    "Choszczno",    "Chrzanów",    "Ciechanów",    "Ciechocinek",    "Cieszyn",    "Czarna Białostocka",    "Czarnków",    "Czechowice-Dziedzice",    "Czeladź",    "Czersk",    "Czerwionka-Leszczyny",    "Częstochowa",    "Człuchów",    "Dąbrowa Górnicza",    "Dąbrowa Tarnowska",    "Darłowo",    "Dębica",    "Dęblin",    "Dębno",    "Dobre Miasto",    "Drawsko Pomorskie",    "Drezdenko",    "Działdowo",    "Dzierżoniów",    "Elbląg",    "Ełk",    "Garwolin",    "Gdańsk",    "Gdynia",    "Giżycko",    "Gliwice",    "Głogów",    "Głowno",    "Glubczyce",    "Głuchołazy",    "Gniezno",    "Gołdap",    "Goleniów",    "Golub-Dobrzyń",    "Góra",    "Góra Kalwaria",    "Gorlice",    "Gorzów Wielkopolski",    "Gostyń",    "Gostynin",    "Grajewo",    "Grodków",    "Grodzisk Mazowiecki",    "Grodzisk Wielkopolski",    "Grójec",    "Grudziądz",    "Gryfice",    "Gryfino",    "Gubin",    "Hajnówka",    "Hrubieszów",    "Iława",    "Inowrocław",    "Janikowo",    "Janów Lubelski",    "Jarocin",    "Jarosław",    "Jasło",    "Jastrzębie-Zdrój",    "Jawor",    "Jaworzno",    "Jędrzejów",    "Jelcz-Laskowice",    "Jelenia Góra",    "Józefów",    "Kalety",    "Kalisz",    "Kamień Pomorski",    "Kamienna Góra",    "Karczew",    "Kartuzy",    "Katowice",    "Kędzierzyn-Koźle",    "Kępno",    "Kętrzyn",    "Kęty",    "Kielce",    "Kłobuck",    "Kłodzko",    "Kluczbork",    "Knurów",    "Kobyłka",    "Kolno",    "Koło",    "Kołobrzeg",    "Koluszki",    "Konin",    "Końskie",    "Konstancin-Jeziorna",    "Konstantynów Łódzki",    "Koronowo",    "Kościan",    "Koscierzyna",    "Kostrzyn",    "Koszalin",    "Kowary",    "Kozienice",    "Kożuchów",    "Kraków",    "Krapkowice",    "Kraśnik",    "Krasnystaw",    "Krosno",    "Krosno Odrzańskie",    "Krotoszyn",    "Kruszwica",    "Krynica",    "Krzeszowice",    "Kudowa-Zdrój",    "Kutno",    "Kwidzyn",    "Lębork",    "Lędziny",    "Legionowo",    "Legnica",    "Leszno",    "Leżajsk",    "Libiąż",    "Lidzbark Warmiński",    "Limanowa",    "Lipno",    "Lobez",    "Lubaczów",    "Lubań",    "Lubartów",    "Lubawa",    "Lubin",    "Lublin",    "Lubliniec",    "Luboń",    "Lubsko",    "Lwowek Slaski",    "Łańcut",    "Łapy",    "Łask",    "Łaziska Gorne",    "Łęczna",    "Łęczyca",    "Łódź",    "Łomianki",    "Łomża",    "Łuków",    "Maków Mazowiecki",    "Malbork",    "Marki",    "Miastko",    "Miechów",    "Międzychód",    "Miedzyrzec Podlaski",    "Międzyrzecz",    "Mielec",    "Mikolów",    "Milanówek",    "Milicz",    "Mińsk Mazowiecki",    "Mława",    "Mogilno",    "Mońki",    "Morąg",    "Mosina",    "Mrągowo",    "Murowana Goślina",    "Myślenice",    "Myślibórz",    "Mysłowice",    "Myszków",    "Nakło nad Notecią",    "Namysłów",    "Nidzica",    "Nisko",    "Nowa Dęba",    "Nowa Ruda",    "Nowa Sól",    "Nowe Miasto Lubawskie",    "Nowogard",    "Nowy Dwór Gdański",    "Nowy Dwór Mazowiecki",    "Nowy Sącz",    "Nowy Targ",    "Nowy Tomyśl",    "Nysa",    "Oborniki",    "Oława",    "Olecko",    "Oleśnica",    "Olesno",    "Olkusz",    "Olsztyn",    "Opalenica",    "Opoczno",    "Opole",    "Opole Lubelskie",    "Orneta",    "Orzesze",    "Ostróda",    "Ostrołęka",    "Ostrów Mazowiecka",    "Ostrów Wielkopolski",    "Ostrowiec Świętokrzyski",    "Ostrzeszów",    "Oświęcim",    "Otwock",    "Ozimek",    "Ozorków",    "Pabianice",    "Parczew",    "Pasłęk",    "Piaseczno",    "Piastów",    "Piekary Śląskie",    "Pieszyce",    "Piła",    "Pińczów",    "Pionki",    "Piotrków Trybunalski",    "Pisz",    "Pleszew",    "Płock",    "Płońsk",    "Polaniec",    "Polczyn-Zdrój",    "Police",    "Polkowice",    "Poniatowa",    "Poręba",    "Poznań",    "Prudnik",    "Pruszcz Gdański",    "Pruszków",    "Przasnysz",    "Przemyśl",    "Przeworsk",    "Pszczyna",    "Pszów",    "Puck",    "Puławy",    "Pułtusk",    "Pyrzyce",    "Pyskowice",    "Rabka",    "Racibórz",    "Radlin",    "Radom",    "Radomsko",    "Radzionków",    "Radzyń Podlaski",    "Rawa Mazowiecka",    "Rawicz",    "Reda",    "Rogożno",    "Ropczyce",    "Ruda Śląska",    "Rumia",    "Rybnik",    "Rydultowy",    "Ryki",    "Rypin",    "Rzeszów",    "Sandomierz",    "Sanok",    "Sępólno Krajeńskie",    "Siedlce",    "Siemianowice Śląskie",    "Siemiatycze",    "Sieradz",    "Sierpc",    "Skarzysko-Kamienna",    "Skawina",    "Skierniewice",    "Skoczów",    "Skwierzyna",    "Sławno",    "Słubice",    "Słupca",    "Słupsk",    "Sochaczew",    "Sokółka",    "Sokołow Podlaski",    "Solec Kujawski",    "Sopot",    "Sosnowiec",    "Stalowa Wola",    "Starachowice",    "Stargard Szczeciński",    "Starogard Gdański",    "Stary Sącz",    "Staszów",    "Strzegom",    "Strzelce Krajenskie",    "Strzelce Opolskie",    "Strzelin",    "Sucha Beskidzka",    "Suchedniów",    "Sulechów",    "Sulecin",    "Sulejówek",    "Suwałki",    "Swarzędz",    "Syców",    "Szamotuły",    "Szczecin",    "Szczecinek",    "Szczytno",    "Szprotawa",    "Sztum",    "Szubin",    "Szydłowiec",    "Śrem",    "Środa Wielkopolska",    "Świdnica",    "Świdnik",    "Świdwin",    "Świebodzice",    "Świebodzin",    "Świecie",    "Świętochłowice",    "Świnoujście",    "Tarnobrzeg",    "Tarnów",    "Tarnowskie Góry",    "Tczew",    "Tomaszów Lubelski",    "Tomaszów Mazowiecki",    "Toruń",    "Trzcianka",    "Trzebiatów",    "Trzebinia",    "Trzebnica",    "Tuchola",    "Turek",    "Tychy",    "Ustka",    "Ustroń",    "Ustrzyki Dolne",    "Wabrzezno",    "Wadowice",    "Wągrowiec",    "Wałbrzych",    "Wałcz",    "Warka",    "Warszawa",    "Węgorzewo",    "Węgrów",    "Wejherowo",    "Wesoła",    "Wieliczka",    "Wieluń",    "Wisła",    "Władysławowo",    "Włocławek",    "Włodawa",    "Włoszczowa",    "Wodzisław Śląski",    "Wojkowice",    "Wolbrom",    "Wołomin",    "Wołów",    "Wolsztyn",    "Wrocław",    "Wronki",    "Września",    "Wschowa",    "Wysokie Mazowieckie",    "Wyszków",    "Ząbkowice Śląskie",    "Zabrze",    "Zakopane",    "Zambrów",    "Zamość",    "Zawadzkie",    "Zawiercie",    "Zduńska Wola",    "Zdzieszowice",    "Zgierz",    "Zgorzelec",    "Ziębice",    "Zielona Góra",    "Zielonka",    "Złocieniec",    "Złotoryja",    "Złotów",    "Żabki",    "Żagań",    "Żary",    "Żnin",    "Żory",    "Żychlin",    "Żyrardów",    "Żywiec"];

const myList = document.getElementById("myList");
/* Creates city option entries in form*/
for (i=0; i < 439; i++) {
    myList.insertAdjacentHTML('beforeend', '<option value="' + cityList[i] + '">')};

/*Function to get weather data from antistorm.eu*/

 const button = document.getElementById('button');

button.addEventListener('click', function(event) {
    event.preventDefault();
    let inputCityName = document.getElementById("inputCity").value;
    let cityNumber = cityList.indexOf(inputCityName);
    async function getWeatherData()
        {
          let response = await fetch('http://antistorm.eu/webservice.php?id='+cityNumber);
          let data = await response.json()
          return data;
        }
    let weatherData = getWeatherData();
    const header =  document.getElementById("header");
    const icon = document.getElementById("logo");
    const text = document.getElementById('text');
    const form = document.getElementById("form");
    const button = document.getElementById("button");
    const itWontRain = function() {
        header.innerHTML = "Nie będzie padać";
        icon.remove;
        text.innerHTML = "W tej lokalizacji nie będzie padać w przeciągu następnych trzech godzin."
    };
    (weatherData.a_o == 1) ?  itWillRain() : itWontRain();

})
//    event.preventDefault()
 //   getWeatherData())
 //});
 
/*const getWeather() = function() {
  (document.getElementById("inputCity") !== null) ? getWeatherData() : console.log("ERROR empty city");
};*/


/* Makes the search button inactive if a valid city input is not chosen*/

/* If a valid city is chosen in the searchbox and button is clicked, combines city name with city number 'cityNumber'. */

/*Gets weather data based on city from Antistorm.eu API and save it to 'weatherData' variable*/
/*let weatherData;
fetch('http://antistorm.eu/webservice.php?id=' + cityNumber)
    .then(response => response.json())
    .then(data  => weatherData = data);*/

/* Changes the index.html according to weather data*/



