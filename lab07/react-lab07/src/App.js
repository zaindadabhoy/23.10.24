import React from 'react';
import './App.css'; // Import global styles
import Navbar from './components/navbar';
import LandingPage from './components/landingpage';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
