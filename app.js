// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

// let weatherApi = {
//     key: "bab281d79e5f1e9755a68d754cc313e7",
//     baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
// }

let search_bar = document.getElementById('search_bar');
let submitBtn = document.getElementById('search_button')

// Event Listener Function on click
submitBtn.addEventListener('click', (event) => {
        getWeather(search_bar.value);
});

// Get Weather Report
const apikey = "d9021eab7bd74f2ab2d53105220709";
function getWeather(city) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=d9021eab7bd74f2ab2d53105220709&q=${city}`)
    .then(weather => {
        return weather.json();
        console.log(weather);
    }).then(showWeather);
}

// Show Weather Report
function showWeather(weather){
    console.log(weather);
    //Get temperature
    const temperature = document.getElementById('temp');
    const celcius = document.getElementById('celc');
    const fer = document.getElementById('fer');
    temperature.innerHTML = `${weather.current.temp_c}<span>&#8451</span>`;

    celcius.addEventListener('click', function(){
        temperature.innerHTML = `${weather.current.temp_c}<span>&#8451</span>`;
    })
    fer.addEventListener('click', ()=>{
        temperature.innerHTML = `${weather.current.temp_f}<span>&#8451</span>`;
    })


    let city = document.getElementById('city');
    city.innerHTML = `${weather.location.name}, ${weather.location.region}`;

    

    //Get Date
    let date = document.getElementById('date');
  
    let todayDate = new Date();
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    date.innerHTML = `${weekday[todayDate.getDay()]}`;
    
    //Get Precipitation
    let precipitation = document.getElementById('precipitation');
    precipitation.innerHTML = ` Precipitation: ${weather.current.precip_mm}`;

    //Humidity
    let humidity = document.getElementById('humidity');
    humidity.innerHTML = ` Humidity: ${weather.current.humidity} `;

    //Wind
    let wind = document.getElementById('wind');
    wind.innerHTML = ` Wind: ${weather.current.wind_kph}km/hr`;

  //Desctription
  let description = document.getElementById('description');
  description.innerHTML = ` ${weather.current.condition.text}`;

}



