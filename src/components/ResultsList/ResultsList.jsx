import React, { useState } from 'react';

import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

import { ListContainer, MarginBottom, List, Loading, StyledFormControl, SelectEmpty } from "./styles";

import LocationDetails from '../LocationDetails/LocationDetails';

// The { places } props takes the location name detail from the API and 
export default function ResultsList( { places } ) {
  const [locationType, setLocationType] = useState();

  return (
    <ListContainer>
      <Typography variant='h4'>Restaraunts, Hotels, & Attractions Near You!</Typography>
      <StyledFormControl>
        <InputLabel>Type</InputLabel>
        <Select placeholder='Restaurants' value={locationType} onChange={(event) => setLocationType(event.target.value)}>
          <MenuItem value='Restaurants'>Restaurants</MenuItem>
          {/* <MenuItem value='Hotels'>Hotels</MenuItem>
          <MenuItem value='Attractions'>Attractions</MenuItem> */}
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
