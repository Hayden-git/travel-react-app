import React, { useState } from 'react';

import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

import { ListContainer, MarginBottom, List, Loading, StyledFormControl, SelectEmpty } from "./styles";

import LocationDetails from '../LocationDetails/LocationDetails';

export default function ResultsList() {
  const [locationType, setLocationType] = useState();

  const places = [
    {name: 'Cool Place to Eat'},
    {name: 'Some dum hotel'},
    {name: 'Tourist Attraction Place'},
    {name: 'Cool Place to Eat'},
    {name: 'Some dum hotel'},
    {name: 'Tourist Attraction Place'},
    {name: 'Cool Place to Eat'},
    {name: 'Some dum hotel'},
    {name: 'Tourist Attraction Place'}
  ];
  


  return (
    <ListContainer>
      <Typography variant='h4'>Restaraunts, Hotels, & Attractions Near You!</Typography>
      <StyledFormControl>
        <InputLabel>Type</InputLabel>
        <Select placeholder='Restaurants' value={locationType} onChange={(event) => setLocationType(event.target.value)}>
          <MenuItem value='Restaurants'>Restaurants</MenuItem>
          <MenuItem value='Hotels'>Hotels</MenuItem>
          <MenuItem value='Attractions'>Attractions</MenuItem>
        </Select>
      </StyledFormControl>

      <List>
        <Grid container spacing={2.5}>
          {places?.map((place, index) => (
              <Grid item key={index} xs={12}>
                <LocationDetails place={place} />
              </Grid>
            ))}
        </Grid>
      </List>

    </ListContainer>
  )
}


/*
          {places.map((place) => (
            <p>{place.name}</p>
          ))}
*/