const apiKey = '0811867d94b7ce8e7657a12376e49b8f';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=';

const searchBox = document.querySelector(".search input");
    const searchButton = document.querySelector(".search button");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json( );

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchButton.addEventListener("click", ( )=> {
    checkWeather(searchBox.value);
})

// checkWeather();