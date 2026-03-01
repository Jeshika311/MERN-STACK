import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");


  async function getWeather() {
  if (!city) {
    setError("Please enter a city name");
    setWeather(null);
    return;
  }

  try {
    const apiKey = "02b9563da71460098a9bd004363958b5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      setWeather(data);
      setError("");
    } else {
      setWeather(null);
      setError(data.message || "City not found");
    }
  } catch (err) {
    setWeather(null);
    setError("Something went wrong. Try again.");
  }
}

  return (
    <div className='App'>
      <h1>Weather App</h1>
      <input type='text' placeholder='Enter city...' value={city} onChange={(e) => setCity(e.target.value)}/>
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

    </div>
  )
}

export default App
