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