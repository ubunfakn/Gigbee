import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Navigationbar from './components/Navigationbar';
import Individual from './Pages/Individual';

const App = () => {
  const navigateToSection = (section) => {
    const targetElement = document.getElementById(section);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <Router>
        <Navigationbar navigateToSection={navigateToSection} />
        <Routes>
          <Route path="/Gigbee" element={<MainPage />} />
          <Route path="/individual" element={<Individual />} />
        </Routes>
    </Router>
  );
};

export default App;