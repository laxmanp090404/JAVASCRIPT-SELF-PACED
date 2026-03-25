# Simple Weather App

A weather application that fetches real-time weather data for any city using the **Open-Meteo API**.

## Features

- **City Search**: Users can input any city name to retrieve weather data.
- **Real-time Data**: Displays current temperature, relative humidity, and weather conditions.
- **Error Handling**: gracefully handles cases where a city cannot be found.

## Core Logic


### 1. Async/Await & Fetch API
The app uses asynchronous functions to handle network requests without blocking the main thread.

```javascript
async function predict() {
    // 1. Fetch coordinates for the city name
    const geocodingResult = await fetch(`https://geocoding-api.open-meteo.com/...`);
    
    // 2. Fetch weather using those coordinates
    const weatherResult = await fetch(`https://api.open-meteo.com/...`);
}
```

### 2. Chained API Requests
The application performs a two-step API process:
1.  **Geocoding**: Converts the user's city name (e.g., "Coimbatore") into geographic coordinates (Latitude/Longitude).
2.  **Weather Fetch**: Uses those coordinates to fetch the actual weather data.

### 3. Dynamic Weather Mapping
Instead of relying on the API to return text descriptions, the app receives a numeric "Weather Code" (WMO code) and maps it to a human-readable string using a constant object. This improves performance and allows for custom text.


