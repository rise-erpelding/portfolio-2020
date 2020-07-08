import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './routes/Hero/Hero';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />

      <Footer />
    </div>
  );
}

export default App;
