import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MapContainer, StyledMap, MarkerContainer, Pointer } from './styles';

export default function Map() {
  const coordinates = { lat: 39.0392, lng: 125.7625 };

  return (
    <MapContainer>
      <StyledMap>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBPzJoOXA9mlaCS0QxF3SLiccJvHQVtHc0' }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={''}
          onChange={''}
          onChildClick={''}
        >
          <MarkerContainer>
            <Pointer>Marker</Pointer>
          </MarkerContainer>
        </GoogleMapReact>
      </StyledMap>
    </MapContainer>
  );
}

 