import React, { Component } from 'react';
import { string } from 'prop-types';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div className="mission-card">
        <p className="mission-card-title">{name}</p>
        <p>{year}</p>
        <p>{country}</p>
        <p>{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: string.isRequired,
  year: string.isRequired,
  country: string.isRequired,
  destination: string.isRequired,
};
