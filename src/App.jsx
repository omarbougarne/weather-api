import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import { fetchWeatherForCity } from './api/weather.api';
function App() {


  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);


  const handleSearch = async () => {
    try {

      const weatherData = await fetchWeatherForCity(city);
      setWeather(weatherData);

    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
    <div>
      <Input 
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search City</button>
      {weather && (
        <div>
          <p>Temperature: {weather.current_weather.temperature}°C</p>
        </div>
      )}
    </div>
    </>
  )
}

export default App
