import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import StartPage from './pages/StartPage';
import { WeatherProvider } from './context/WeatherContext';

const App = () => {
  return (
    <WeatherProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </WeatherProvider>
  );
};

export default App;