import React from 'react';
import './Weather.css';

// Import icons
import cloudsIcon from './images/clouds.png';
import clearIcon from './images/clear.png';
import rainIcon from './images/rain.png';
import drizzleIcon from './images/drizzle.png';
import mistIcon from './images/mist.png';
import snowIcon from './images/snowy.png';
import hazeIcon from './images/haze.png';
import defaultIcon from './images/default.png';


const Weather = ({ data }) => {
  const { name, main, weather } = data;

  // Ensure data is available
  if (!data || !data.weather || !data.main) {
    return <p>Loading...</p>;
  }

  // Determine the weather condition and set the icon accordingly
  const weatherCondition = weather[0].main.toLowerCase();
  let weatherIcon;

  switch (weatherCondition) {
    case 'clouds':
      weatherIcon = cloudsIcon;
      break;
    case 'clear':
      weatherIcon = clearIcon;
      break;
    case 'rain':
      weatherIcon = rainIcon;
      break;
    case 'drizzle':
      weatherIcon = drizzleIcon;
      break;
    case 'mist':
      weatherIcon = mistIcon;
      break;
    case 'snow':
      weatherIcon = snowIcon;
      break;
    case 'haze':
      weatherIcon = hazeIcon;
      break;
    default:
      weatherIcon = defaultIcon;
      break;
  }

  return (
    <div className="weather-container">
      <h2>Weather in {name}</h2>
      <p>Temperature: {main.temp.toFixed(1)}°C</p>
      <p>Weather: {weather[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Pressure: {main.pressure} hPa</p>
      <p>Wind Speed: {window.speed} m/s</p>
      <img src={weatherIcon} alt={weather[0].description} />
    </div>
  );
};

export default Weather;
