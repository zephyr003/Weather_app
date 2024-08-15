import React, { useState } from 'react';
import { useWeather } from '../context/WeatherContext';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const { setUserName } = useWeather();
  const [inputName, setInputName] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (inputName.trim() === '') return; // Do nothing if input is empty
    setUserName(inputName); // Set the user's name in context
    setInputName(''); // Clear the input field
    navigate('/home'); // Navigate to the Home page
  };

  return (
    <div className="container">
      <h2>Welcome to the Weather App</h2>
      <input 
        type="text" 
        value={inputName} 
        onChange={(e) => setInputName(e.target.value)} 
        placeholder="Enter your name"
      />
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default StartPage;