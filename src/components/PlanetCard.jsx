import React, { Component } from 'react';
import { number, string } from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage, width } = this.props;

    return (
      <div className="planet-card">
        <p className="planet-name">{planetName}</p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          width={ `${width}rem` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: string.isRequired,
  planetImage: string.isRequired,
  width: number.isRequired,
};
