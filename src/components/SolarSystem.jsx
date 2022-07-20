import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    const renderPlanets = planets.map((planet, index) => (
      <PlanetCard key={ index } planetName={ planet.name } planetImage={ planet.image } />
    ));

    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {renderPlanets}
      </div>
    );
  }
}

export default SolarSystem;
