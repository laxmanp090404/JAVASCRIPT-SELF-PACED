const cityInput = document.getElementById("cityInput")
const Temperature = document.getElementById("temperature")
const Humidity = document.getElementById("humidity")
const Weathercondition = document.getElementById("weathcond")

const weatherCodeMap = {
    0: "Clear sky",

    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",

    45: "Fog",
    48: "Rime fog",

    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Heavy drizzle",

    56: "Light freezing drizzle",
    57: "Heavy freezing drizzle",

    61: "Light rain",
    63: "Moderate rain",
    65: "Heavy rain",

    66: "Light freezing rain",
    67: "Heavy freezing rain",

    71: "Light snow",
    73: "Moderate snow",
    75: "Heavy snow",

    77: "Snow grains",

    80: "Light rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",

    85: "Light snow showers",
    86: "Heavy snow showers",

    95: "Thunderstorm",
    96: "Thunderstorm with light hail",
    99: "Thunderstorm with heavy hail"
};

// to initialise ui 
function initialise() {
    Temperature.textContent = "—";
    Humidity.textContent = "—";
    Weathercondition.textContent = " Search for a city";
}


async function predict() {
    //encoding for ensuring no space , or unwanted literals like $ in city value
    // since the fetching is a promise it is handled using async await
    const geocodingResult = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityInput.value)}&count=1&language=en&format=json`)
    // json parsing
    let res = await geocodingResult.json()

    // handling city not found
    if (!res.results || res.results.length === 0) {
        Weathercondition.textContent = "City not found";
        return;
    }
    const { latitude, longitude } = res?.results[0];
    // console.log("lat "+ latitude+" long "+longitude);
   

        const weatherResult = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code`)
        res = await weatherResult.json();
        const { temperature_2m, relative_humidity_2m, weather_code } = res.current
        Temperature.textContent = temperature_2m + " °C "
        Humidity.textContent = relative_humidity_2m + " %"
        Weathercondition.textContent = weatherCodeMap[weather_code] || "Unknown weather";
}

//call to  initialise ui 
initialise()