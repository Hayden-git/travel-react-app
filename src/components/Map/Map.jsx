import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MapContainer, StyledMap, MarkerContainer, Pointer } from './styles';

import mapStyles from './mapStyles';

export default function Map({setCoordinates, setMapBounds, coordinates}) {

  return (
    <MapContainer>
      <StyledMap>
        <GoogleMapReact
        /* When coords or bounds of map change, google-map-react reads the onChange() callback function 
          that takes an event target with a call to setCoodinates set to an object... setCoordinates({ lat: event.center.lat, lng: event.center.lng }) ...
          Then it also sets the top right and bottom left corner by setting the MapBounds whenever the event target fires inside the onChange ... 
        */
          bootstrapURLKeys={{ key: 'AIzaSyBPzJoOXA9mlaCS0QxF3SLiccJvHQVtHc0' }}
          defaultCenter={coordinates}
          center={coordinates}
          // this guy right here :0
          onChange={(event) => {
            setCoordinates({ lat: event.center.lat, lng: event.center.lng });
            setMapBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw });
          }}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          onChildClick={''}
          options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        >
          <MarkerContainer>
            <Pointer>Marker</Pointer>
          </MarkerContainer>
        </GoogleMapReact>
      </StyledMap>
    </MapContainer>
  );
}

