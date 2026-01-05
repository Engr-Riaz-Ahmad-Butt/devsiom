import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;


