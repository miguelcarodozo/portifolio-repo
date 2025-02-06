const cityInput = document.getElementById("city-input")
const searchBtn = document.getElementById("search-button");
const wContainer = document.getElementById("weather-results")
const key = "7c7fbb851542da9300cd830e7f643fab"
const getWeather = async (data) => {
    try {
        const city = cityInput.value
        if (!city) {
            alert("Please enter a real city")
        } else {
            const res = await fetch(`https://api.weatherstack.com/current?access_key=${key}&query=${city}`);
            const data = await res.json()
            const getDate = new Date();
            const { temperature, pressure, humidity,
                cloudcover, feelslike, is_day, visibility, precip, uv_index, weather_descriptions, weather_icons
            } = data.current;
            const { name, country, region, localtime } = data.location
            wContainer.innerHTML = `
            <div id="main-info">
                <h1>${name}</h1>
                <span class="temperature">${temperature}C°<span>
                <p>${weather_descriptions.map((obj) => obj)}</p>
                <p>${feelslike}C°</p>
                <img src="${weather_icons[0]}">
            </div>
            `
            
            console.log(data)
        }
    } catch (err) {
        console.log("There was an error")
    }
}
searchBtn.addEventListener("click", getWeather())