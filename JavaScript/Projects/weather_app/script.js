const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const resultDiv = document.getElementById('weather-result');

async function checkWeather(city) {
  const apiKey = "02b9563da71460098a9bd004363958b5"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === "404") {
    resultDiv.innerHTML = `<p>City not found</p>`;
    return;
  }

  resultDiv.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${Math.round(data.main.temp)}°C<p>
    <p>Condition: ${data.weather[0].main}<p>
    <p>Humidity: ${data.main.humidity}%<p>
    <p>Wind Speed: ${data.wind.speed} Km/h<p>
  `;
}

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city !== "") {
    checkWeather(city);
    cityInput.value = ""; // clear input
  }
});

cityInput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    const city = cityInput.value.trim();
    if (city !== "") {
      checkWeather(city);
      cityInput.value = "";
    }
  }
});