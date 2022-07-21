import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage, width } = this.props;

    return (
      <div className="planet-card" data-testid="planet-card">
        <p className="planet-name" data-testid="planet-name">{planetName}</p>
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
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
  width: PropTypes.number,
};

PlanetCard.defaultProps = {
  planetName: 'Planet',
  planetImage: 'Planet image',
  width: '100%',
};

export default PlanetCard;
