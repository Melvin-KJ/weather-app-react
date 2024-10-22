import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Weather from './Weather';

// Import background images
import cloudsBg from './images/cloudy-bg.jpg';
import clearBg from './images/clear-bg.jpg';
import rainBg from './images/rain-bg.jpg';
import drizzleBg from './images/drizzle-bg.jpg';
import mistBg from './images/mist-bg.jpg';
import snowBg from './images/snow-bg.jpg';
import hazeBg from './images/mist-bg.jpg';
import defaultBg from './images/default-bg.jpg';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(defaultBg);

  const API_KEY = '8ac5c4d57ba6a4b3dfcf622700447b1e';

  const fetchweather = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
        updateBackground(response.data.weather[0].main); // Update background when weather data is received
      })
      .catch((error) => console.error(error));
  };

  // Function to change the body background based on weather condition
  const updateBackground = (weatherCondition) => {
    switch (weatherCondition.toLowerCase()) {
      case 'clouds':
        setBackgroundImage(cloudsBg);
        break;
      case 'clear':
        setBackgroundImage(clearBg);
        break;
      case 'rain':
        setBackgroundImage(rainBg);
        break;
      case 'drizzle':
        setBackgroundImage(drizzleBg);
        break;
      case 'mist':
        setBackgroundImage(mistBg);
        break;
      case 'snow':
        setBackgroundImage(snowBg);
        break;
      case 'haze':
        setBackgroundImage(hazeBg);
        break;
      default:
        setBackgroundImage(defaultBg);
        break;
    }
  };

  useEffect(() => {
    // Apply the background to the body when backgroundImage changes
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  }, [backgroundImage]);

  return (
    <div className="app">
      <h1>Weather App</h1>
      <form onSubmit={fetchweather}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
};

export default App;
