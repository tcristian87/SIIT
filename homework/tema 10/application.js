const api = {
  key: "577c69d1405a1e62ddeac7f2f328337e",
  base: "https://api.openweathermap.org/data/2.5/",
};
const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  } 
}

var x = document.getElementById("glocation");

window.onload = function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser"
    } 
}

function showPosition(position) {
    var lat = position.coords.latitude;
     var lon = position.coords.longitude;
        (location)=>{
            return location.json();
        }
        // .then(displayLocation);
 x.innerHTML = "Latitude : " + lat + "<br> Longitude :" + lon;
}

//  function displayLocation(location){
//  fetch(`$)`)
//  }

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&onecall?lat=${location.latitude}&lon=${location.longitude}&appid=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {

  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);

  let temp = document.querySelector(".current .temp")
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>\xB0C</span> <br> ${Math.round((weather.main.temp)* 9/5+32)}<span>\xB0F</span>`
  
  
  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;
  
  
  let hilow = document.querySelector('.hi-low');
  hilow.innerHTML = `${Math.round(weather.main.temp_min)}\xB0C/ ${Math.round(weather.main.temp_max)}\xB0C <br> ${Math.round((weather.main.temp_min)* 9/5+32)}\xB0F/${Math.round((weather.main.temp_max)* 9/5+32)}<span>\xB0F</span>`; 

}

function dateBuilder(d) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = "0" + d.getDate();
  let month = d.getMonth()+1;
  let year = d.getFullYear();

  return `${day} ${date}.${month}.${year}`
}


// var x = document.getElementById("glocation");

// function getLocation() {
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by thjis browser"
//     } 
// }

// function showPosition(position) {
//     var lat = position.coords.latitude;
//     var lon = position.coords.longitude;
//     fetch(`${api.base}onecall?lat=${lat}&lon=${lon}&appid=${api.key}`)
//         .then((location)=>{
//             return location.json();
//         })
//         .then(displayLocation);
// x.innerHTML = "Latitude : " + lat + "<br> Longitude :" + lon;

// }

// function displayLocation(location){
//     console.log(location)    
// }

//     fetch(`${api.base}onecall?lat=${lat}&lon=${lon}&appid=${api.key}`)
//     .then((location) => {
//         return location.json();
//     })
//     .then(displayLocation);
// }

