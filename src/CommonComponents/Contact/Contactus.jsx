import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Paper
} from '@mui/material';
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
          minHeight: '100vh',
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

      {/* Contact Form Section */}
      <Box sx={{ px: 2, py: 6, display: 'flex', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ p: 4, bgcolor: '#f4f7fb', maxWidth: 600, width: '100%' }}>
          <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
            Send Us a Message
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              margin="dense"
              label="Your Name"
              variant="outlined"
              size="small"
              sx={{ bgcolor: '#ffffff' }}
            />
            <TextField
              fullWidth
              margin="dense"
              label="Your Email"
              variant="outlined"
              size="small"
              sx={{ bgcolor: '#ffffff' }}
            />
            <TextField
              fullWidth
              margin="dense"
              label="Subject"
              variant="outlined"
              size="small"
              sx={{ bgcolor: '#ffffff' }}
            />
            <TextField
              fullWidth
              margin="dense"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              size="small"
              sx={{ bgcolor: '#ffffff' }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ px: 3 }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Map Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', px: 2, pb: 6 }}>
        <Box
          sx={{
            width: '100%',
            maxWidth: 1400,
            height: 420,
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 3,
          }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.817312865604!2d-74.00594168459203!3d40.71277527933059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNSJX!5e0!3m2!1sen!2sus!4v1614709213427!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Box>

      {/* Contact Info Cards */}
      <Box sx={{ px: 2, pb: 10 }}>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: 'Address',
              content: '198 West 21th Street, Suite 721 New York NY 10016',
              bg: '#fef7e0',
            },
            {
              title: 'Contact Number',
              content: '+ 1235 2355 98',
              bg: '#e0f7fa',
            },
            {
              title: 'Email Address',
              content: 'info@yoursite.com',
              bg: '#e8f5e9',
            },
            {
              title: 'Website',
              content: 'yoursite.com',
              bg: '#f3e5f5',
            },
          ].map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={4}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: info.bg,
                  height: '100%',
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" color="text.primary" mb={1}>
                  {info.title}
                </Typography>
                <Typography color="text.secondary">{info.content}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Contactus;
