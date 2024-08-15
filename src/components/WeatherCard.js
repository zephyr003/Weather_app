import React from 'react';

const WeatherCard = ({ city, temperature, description, icon }) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <img 
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
        alt={description} 
        style={{ width: '100px', height: '100px' }} 
      />
      <p style={{ fontSize: '2rem', margin: '10px 0' }}>{temperature}°C</p>
      <p style={{ color: '#555' }}>{description}</p>
    </div>
  );
};

export default WeatherCard;