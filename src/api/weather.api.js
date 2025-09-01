const getCityName = async (cityName) => {
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1;`
    const response = await fetch (geoUrl);
    const data = await response.json();

    if(data.results && data.results.length > 0)
    return {
        lat: data.results[0].latitude,
        lan: data.results[0].longitude,
        name: data.results[0].name
    }

    throw new Error ('City not found');
}


const getWeather = async (lat, lon) => {
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;
    const response = await fetch(weatherUrl);
    return response.json();
}

export const fetchWeatherForCity = async (cityName) => {
    try {
    const coords = await getCityName(cityName);
    const weather = await getWeather(coords.lat, coords.lon);
    console.log(weather)
    } catch (error) {
    console.error('Error:', error.message);
  }
}