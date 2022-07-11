//document.getElementById("status").style.display = "none";

function getCity() {
    return document.getElementById('search-box').value
}
function setCity(cityName) {
    document.getElementById("city-name").innerText=cityName
}

//calling from server
function fetchWeather(name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=92c73e52be963854ff6b70513f2a275b')
    .then(res => res.json())
    .then(data=>{
        displayWeather(data);
    })
}


function setWeather(temp,condition,icon) {
    document.getElementById("temprature").innerText=Math.round(temp)/10;
    document.getElementById("condition").innerText= condition;
    document.getElementById("image").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
}

document.getElementById("search-btn").addEventListener("click",function () {
    const cityName=getCity(); 
    fetchWeather(cityName);
    setCity(cityName) ;
    //document.getElementById("status").style.display = "block";
})

function displayWeather(data) {
    const {temp}=data.main;
    const {main,icon}= data.weather[0]; 
    
    setWeather(temp,main,icon);
}