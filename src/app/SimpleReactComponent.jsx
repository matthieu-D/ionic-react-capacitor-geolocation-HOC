import React, { Component } from 'react';
import withGeolocation from './withGeolocation/withGeolocation.jsx';

class SimpleReactComponent extends Component {
  render() {
    if(this.props.coords) {
      return `Latitude: ${this.props.coords.latitude},
              Longitude: ${this.props.coords.longitude}`;
    } else {
      return "No Geolocation data";
    }
  }
}

export default withGeolocation(SimpleReactComponent);