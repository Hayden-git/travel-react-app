import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import { Search, SearchIconWrapper, StyledInputBase } from './styles';
import { fetchPlacesData } from '../../api/api';

export default function SearchBar({ handleFetchedData }) {
  const [searchQueryInput, setSearchQueryInput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await fetchPlacesData(searchQueryInput);
    if (data) {
      handleFetchedData(data);
    }
  };

  const handleChange = (event) => {
    setSearchQueryInput(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ bgcolor: '#454B66' }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Nomads
          </Typography>

          <Search onSubmit={handleSubmit}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}







// Most current version before 6:20PM belowwwww

// import React, { useState, useEffect, useCallback } from 'react';
// import { AppBar, Toolbar, Typography, Box } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';

// import { Search, SearchIconWrapper, StyledInputBase } from './styles';

// export default function SearchBar({ handleFetchedData }) {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchQueryInput, setSearchQueryInput] = useState('');
//   const [place, setPlace] = useState({});

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSearchQuery(searchQueryInput);
//   };

//   const handleChange = (event) => {
//     setSearchQueryInput(event.target.value);
//   };

//   const fetchData = useCallback(async () => {
//     if (searchQuery) {
//       const url = `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=11.847676&tr_latitude=12.838442&bl_longitude=109.095887&tr_longitude=109.149359&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US`;
  
//       const options = {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': 'c14fc2ffc3msh0301d9efb0b7e9fp1ed751jsn0ad917a78da5',
//           'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//         },
//       };
  
//       try {
//         const response = await fetch(url, options);
//         const { data } = await response.json();
//         console.log('Fetched Data:', data);
//         setPlace(data);
//         handleFetchedData(data); // Pass the fetched data to the parent component
//         return data;
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
//   }, [searchQuery, handleFetchedData]);
  

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);
  
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position='static' sx={{ bgcolor: '#454B66' }}>
//         <Toolbar>
//           <IconButton
//             size='large'
//             edge='start'
//             color='inherit'
//             aria-label='open drawer'
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant='h6'
//             noWrap
//             component='div'
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             Nomads
//           </Typography>

//           <Search onSubmit={handleSubmit} onChange={handleChange}>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder='Search…'
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }