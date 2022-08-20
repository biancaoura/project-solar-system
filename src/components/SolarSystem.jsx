import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

export default class SolarSystem extends Component {
  render() {
    const renderPlanets = planets.map((planet, index) => (
      <PlanetCard
        key={ index }
        planetName={ planet.name }
        planetImage={ planet.image }
        width={ planet.size }
      />
    ));

    return (
      <div>
        <Title headline="PLANETAS" />
        <div className="card-container">
          {renderPlanets}
        </div>
      </div>
    );
  }
}

