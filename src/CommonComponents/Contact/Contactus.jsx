import React from 'react';
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import bgImage from '../../assets/images/bg_2.jpg';

const Contactus = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '60vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 0,
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>
          <Typography>
            <Link href="/" color="inherit" underline="hover">
              Home
            </Link>{' '}
            / Contact
          </Typography>
        </Box>
      </Box>

      {/* Contact Info Section */}
      <Box py={8} px={2}>
        <Grid container spacing={4} justifyContent="center">
          {[
            { title: 'Address', content: '198 West 21th Street, Suite 721 New York NY 10016' },
            { title: 'Contact Number', content: '+ 1235 2355 98' },
            { title: 'Email Address', content: 'info@yoursite.com' },
            { title: 'Website', content: 'yoursite.com' },
          ].map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ bgcolor: '#f8f9fa', p: 3, textAlign: 'center' }}>
                <Typography variant="h6" mb={1}>
                  {info.title}
                </Typography>
                <Typography>{info.content}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact Form + Map Section */}
      <Box sx={{ px: 2, pb: 10 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} sx={{ bgcolor: '#f8f9fa', p: 4 }}>
            <Box component="form" noValidate autoComplete="off">
              <TextField fullWidth margin="normal" label="Your Name" variant="outlined" />
              <TextField fullWidth margin="normal" label="Your Email" variant="outlined" />
              <TextField fullWidth margin="normal" label="Subject" variant="outlined" />
              <TextField
                fullWidth
                margin="normal"
                label="Message"
                variant="outlined"
                multiline
                rows={5}
              />
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Send Message
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              id="map"
              sx={{
                height: '100%',
                minHeight: 400,
                bgcolor: '#e9ecef',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contactus;
