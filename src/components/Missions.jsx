import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    const renderMissions = missions.map((mission, index) => (
      <MissionCard
        key={ index }
        name={ mission.name }
        year={ mission.year }
        country={ mission.country }
        destination={ mission.destination }
      />
    ));

    return (
      <div data-testid="missions">
        <Title headline="MISSÕES" />
        {renderMissions}
      </div>
    );
  }
}

export default Missions;
