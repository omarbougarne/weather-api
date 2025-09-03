const getCityName = async (cityName) => {
  console.log('Searching for city:', cityName); 
  
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;
  const response = await fetch(geoUrl);
  const data = await response.json();
  
  console.log('Geocoding response:', data); 
  
  if(data.results && data.results.length > 0) {
    const coords = {
      lat: data.results[0].latitude,
      lon: data.results[0].longitude,
      name: data.results[0].name
    };
    console.log('Found coordinates:', coords); 
    return coords;
  }
  throw new Error('City not found');
}

const getWeather = async (lat, lon) => {
  console.log('Getting weather for:', lat, lon); 
  
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
  console.log('Weather URL:', weatherUrl); 
  
  const response = await fetch(weatherUrl);
  return response.json();
}

export const fetchWeatherForCity = async (cityName) => {
    try {
    const coords = await getCityName(cityName);
    const weather = await getWeather(coords.lat, coords.lon);
    return weather
    } catch (error) {
    console.error('Error:', error.message);
    throw error
  }
}