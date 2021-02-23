import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '431px',
  height: '271px'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={
          {
            lat: 59.9681432,
            lng: 30.3143033
          }
        }
      >
        <Marker></Marker>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAHmqvuR5Ch6jDF4mgRwDsNGRDe9olcZRs'
})(MapContainer);
