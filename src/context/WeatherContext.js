import React, { createContext, useContext, useState } from 'react';

// Create the Weather Context
const WeatherContext = createContext();

// Create a provider component
export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [userName, setUserName] = useState('');

  return (
    <WeatherContext.Provider value={{ weather, setWeather, userName, setUserName }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Custom hook to use the WeatherContext
export const useWeather = () => useContext(WeatherContext);