import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import Footer from './components/Footer';
import Particle from './components/Particle';

class App extends Component {
  render() {
    return (
      <div className="body">
        <Header />
        <SolarSystem />
        <Missions />
        <Footer />
        <Particle />
      </div>
    );
  }
}

export default App;
