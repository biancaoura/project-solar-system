import React, { Component } from 'react';
import { string } from 'prop-types';

export default class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="title">{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: string.isRequired,
};


