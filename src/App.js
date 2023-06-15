import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@mui/material';

import { fetchPlacesData } from './api/api';

import SearchBar from './components/SearchBar/SearchBar';
import ResultsList from './components/ResultsList/ResultsList';
import Map from './components/Map/Map';

export default function App() {
  // const [fetchedData, setFetchedData] = useState([]);
  const [place, setPlace] = useState([]);

  useEffect(() => {
    fetchPlacesData()
      .then((data) => {
        console.log(data);
        setPlace(data);
      });
  }, []);


  return (
    <>
      <CssBaseline />
      <SearchBar />

      <Grid container spacing={3} style={{ display: 'flex', flexDirection: 'row' }}>
        {/* styling for display accessibility */}
        <Grid item xs={12} md={4}>
          <ResultsList />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}


// import React from 'react';
// import { CssBaseline, Grid } from '@mui/material';


// import SearchBar from './components/SearchBar/SearchBar';
// import ResultsList from './components/ResultsList/ResultsList';
// import Map from './components/Map/Map';

// export default  function App() {
//   return (
//     <>
//       <CssBaseline />
//       <SearchBar />
      
//       <Grid container spacing={3} style={{ display: 'flex',  flexDirection: 'row' }}>
//         {/* styling for display assessibility */}
//         <Grid item xs={12} md={4}>
//           <ResultsList />
//         </Grid>
//         <Grid item xs={12} md={8}>
//           <Map />
//         </Grid>
//       </Grid>
//     </>
//   );
// }
