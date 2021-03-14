import React, { Component } from 'react';
import { Map, GoogleApiWrapper,  InfoWindow, Marker } from 'google-maps-react';
import { formatRelative } from 'date-fns';

const mapStyles = {
    color: "#000000",
    width: "300px",
    height: "300px",
    marginLeft: "60px"
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };

      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={7}
        style = {mapStyles}
        initialCenter={
          {
            lat: -26.2884,
            lng: 28.8233
          }
        }
        
      >
      <Marker
      onClick={this.onMarkerClick}
      name={'Kenyatta International Convention Centre'}
    />
    <InfoWindow
      marker={this.state.activeMarker}
      visible={this.state.showingInfoWindow}
      onClose={this.onClose}
    >
      <div>
        <h4>{this.state.selectedPlace.name}</h4>
      </div>
    </InfoWindow>
    </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAxS0su-_W7Yfyk74Sza55xXGg8rV7XYJw'
  })(MapContainer);
  