import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';
import { useWeather } from '../context/WeatherContext';

const Home = () => {
  const { weather, setWeather, userName } = useWeather();
  const [inputCity, setInputCity] = useState('');

  const handleSearch = async () => {
    if (inputCity.trim() === '') return; // Do nothing if input is empty
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=145eec05471fab87b85230d0d1ede3a1&units=metric`);
      setWeather(response.data); // Update weather data
      setInputCity(''); // Clear the input field
    } catch (error) {
      console.error('Error fetching the weather data', error);
      setWeather(null); // Clear the weather data on error
    }
  };

  return (
    <div className="container">
      <h2>Welcome, {userName}!</h2>
      <input 
        type="text" 
        value={inputCity} 
        onChange={(e) => setInputCity(e.target.value)} 
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Get Weather</button>
      {weather && (
        <WeatherCard 
          city={weather.name} 
          temperature={weather.main.temp} 
          description={weather.weather[0].description} 
          icon={weather.weather[0].icon} // Pass the icon code
        />
      )}
    </div>
  );
};

export default Home;