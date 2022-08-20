import React from 'react';
import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';

export default class Particle extends React.Component {
  async customInit(engine) {
    await loadStarsPreset(engine);
  }

  render() {
    const options = {
      preset: 'stars',
    };

    return <Particles options={ options } init={ this.customInit } />;
  }
}
