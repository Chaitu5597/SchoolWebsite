import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Container,
  TextField,
  Button,
  Paper,
  IconButton,
  Stack,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';

import bg2 from '../../assets/images/bg_2.jpg';

const contactDetails = [
  {
    icon: <LocationOnIcon color="primary" />,
    title: 'Address',
    text: '198 West 21th Street, Suite 721 New York NY 10016',
  },
  {
    icon: <PhoneIcon color="primary" />,
    title: 'Contact Number',
    text: '+1235 2355 98',
  },
  {
    icon: <EmailIcon color="primary" />,
    title: 'Email Address',
    text: 'info@yoursite.com',
  },
  {
    icon: <PublicIcon color="primary" />,
    title: 'Website',
    text: 'yoursite.com',
  },
];

const Blogs = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 10,
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold">Contact Us</Typography>
          <Typography variant="body1">Home / Contact</Typography>
        </Container>
      </Box>

      {/* Info Cards */}
      <Box py={6}>
        <Container>
          <Grid container spacing={4}>
            {contactDetails.map((detail, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                  <Box mb={2}>{detail.icon}</Box>
                  <Typography variant="h6" gutterBottom>{detail.title}</Typography>
                  <Typography variant="body2">{detail.text}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Form and Map */}
      <Box py={6} sx={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h6" gutterBottom>Send us a message</Typography>
                <Box component="form">
                  <Stack spacing={2}>
                    <TextField fullWidth placeholder="Your Name" variant="outlined" />
                    <TextField fullWidth placeholder="Your Email" variant="outlined" />
                    <TextField fullWidth placeholder="Subject" variant="outlined" />
                    <TextField fullWidth placeholder="Message" multiline rows={4} variant="outlined" />
                    <Button variant="contained" color="primary">Send Message</Button>
                  </Stack>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box id="map" sx={{ width: '100%', height: 400, backgroundColor: '#e0e0e0' }}>
                {/* Embed or implement Google Map here */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Blogs;

