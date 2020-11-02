// UI variables
const inputCity = document.getElementById("inputCity"),
      button = document.getElementById("button"),
      icon = document.getElementById("icon"),
      city = document.getElementById("city"),
      temp = document.getElementById("temp"),
      sky = document.getElementById("sky");

// Add Event Listner 
button.addEventListener("click", function(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=e195a12f18c68c32a02f402a8958ca52`)
        .then(response => response.json())
        .then(data => weatherData(data))
        .catch(err => alert("Some Error Occur", err));
      })

// Main functionality
function weatherData(data) {
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    sky.innerText = data.weather[0].main;
    city.innerText = data.name;
    const tempCelcious = (parseFloat(data.main.temp) - 273.16).toFixed(2);
    temp.innerText = tempCelcious;
}