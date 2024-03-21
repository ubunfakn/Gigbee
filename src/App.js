import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Navigationbar from './components/Navigationbar';
import Individual from './Pages/Individual';
import Business from './Pages/Business';
import ContactForm from './Pages/ContactForm';
import Contact from './Pages/Contact';

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
          <Route path="/business" element={<Business />} />
          <Route path="/form" element={<ContactForm />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
};

export default App;
