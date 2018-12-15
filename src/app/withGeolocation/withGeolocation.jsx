import React from 'react';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

export default function withGeolocation(OriginalComponent) {
  class HOC extends React.Component {
    constructor() {
      super();
      this.state = { coords: null };
    }
    
    componentDidMount() {
      Geolocation.watchPosition({}, (position, err) => {
        if (!err) {
          this.setState({coords: position.coords});
        }
      })
    }

    render() {
      return <OriginalComponent coords={this.state.coords} />;
    }
  }
  return HOC;
}