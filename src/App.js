import React from "react";
import { CssBaseline, Grid } from "@mui/material";

import SearchBar from "./components/SearchBar/SearchBar";
import List from "./components/List/List";
import Map from "./components/Map/Map";

export default  function App() {
  return (
    <>




    
      <CssBaseline />
      <SearchBar />
      
      <Grid container spacing={3} style={{width:'100%'}}>
        {/* styling for display assessibility */}
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={4}>
          <Map />
        </Grid>
      </Grid>

    </>
  );
}
