import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@mui/material';

import { fetchPlacesData } from './api/api';

import SearchBar from './components/SearchBar/SearchBar';
import ResultsList from './components/ResultsList/ResultsList';
import Map from './components/Map/Map';

export default function App() {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({ lat: 32.7495, lng: -117.2470 });
  const [mapBounds, setMapBounds] = useState({});

  useEffect(() => {
      // mapBounds.sw gets the API data for the LAT + LONG for the Bottom-Left corner
      // mapBounds.ne gets the API data for the LAt + LONG for the Top-Right corner
    if(mapBounds) {}
    fetchPlacesData(mapBounds.sw, mapBounds.ne)
    // console.log(coordinates, mapBounds)
      .then((data) => {
        console.log(data);
        setPlaces(data);
      });
  }, [coordinates, mapBounds]);


  return (
    <>
      <CssBaseline />
      <SearchBar />

      <Grid container spacing={3} style={{ display: 'flex', flexDirection: 'row' }}>
        {/* styling for display accessibility */}
        <Grid item xs={12} md={4}>
          <ResultsList places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setMapBounds={setMapBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
}