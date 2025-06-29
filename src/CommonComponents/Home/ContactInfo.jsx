// ContactInfo.js

import React from 'react';
import { Grid, Typography, Box, Link as MuiLink } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link as RouterLink } from 'react-router-dom'; // <-- for internal links

const contactDetails = [
  {
    icon: <LocationOnIcon sx={{ mr: 1, color: 'white' }} />,
    content: (
      <MuiLink
        href="https://www.google.com/maps/place/198+West+21st+Street"
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
        sx={{ color: 'white' }}
      >
        198 West 21th Street
      </MuiLink>
    ),
  },
  {
    icon: <EmailIcon sx={{ mr: 1, color: 'white' }} />,
    content: (
      <MuiLink
        href="mailto:youremail@email.com"
        underline="hover"
        sx={{ color: 'white' }}
      >
        youremail@email.com
      </MuiLink>
    ),
  },
  {
    icon: <PhoneIcon sx={{ mr: 1, color: 'white' }} />,
    content: (
      <MuiLink href="tel:+1235235598" underline="hover" sx={{ color: 'white' }}>
        +1235 2355 98
      </MuiLink>
    ),
  },
];

const ContactInfo = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#6a1b9a',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: '1200px', width: '100%' }}
        justifyContent="space-around"
        alignItems="center"
      >
        {contactDetails.map((item, index) => (
          <Grid
            item
            xs={12}
            md={4}
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {item.icon}
            {item.content}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactInfo;
