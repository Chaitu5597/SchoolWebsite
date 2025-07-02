import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; 
import bg2 from '../../assets/images/bg_2.jpg';

const HeroSection = () => (
  <Box
    sx={{
      backgroundImage: `url(${bg2})`,
      width: '100%',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      px: 2,
    }}
  >
    <Typography
      variant="h2"
      sx={{
        fontWeight: 900,
        mb: 1,
        fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
      }}
    >
      About Us
    </Typography>

    <Typography
      variant="h5"
      sx={{
        fontWeight: 600,
        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
      }}
    >
      <Link to="/" style={{ color: '#fff', textDecoration: 'underline' }}>
        Home
      </Link>{' '}
      / About Us
    </Typography>
  </Box>
);

export default HeroSection;
