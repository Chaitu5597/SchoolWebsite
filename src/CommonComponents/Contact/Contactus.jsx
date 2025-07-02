import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Paper,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import bgImage from '../../assets/images/bg_2.jpg';

const ContactPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: isMobile ? '60vh' : '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 1,
          }}
        />
        <Box sx={{ zIndex: 2 }}>
          <Typography variant={isMobile ? 'h4' : 'h3'} fontWeight="bold">
            Contact Us
          </Typography>
          <Typography variant="subtitle1" mt={1}>
            Home &gt; Contact
          </Typography>
        </Box>
      </Box>

      {/* Contact Form */}
      <Box sx={{ px: isMobile ? 2 : 3, pt: 8, pb: 4, backgroundColor: '#f8f9fa' }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: '#e1f5fe',
                borderRadius: 2,
                p: isMobile ? 2 : 4,
              }}
            >
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
                textAlign="center"
                mb={3}
              >
                Reach Out for Admissions or Support
              </Typography>

              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                size="small"
                margin="dense"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                size="small"
                margin="dense"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                size="small"
                margin="dense"
              />

              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                size="small"
                margin="dense"
              />

              <Box textAlign="center" mt={2}>
                <Button variant="contained" color="primary">
                  CONTACT US
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Info Cards */}
      <Box sx={{ py: 6, px: isMobile ? 2 : 3 }}>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: <LocationOnIcon color="primary" />,
              title: 'Address',
              content: '198 West 21th Street, Suite 721 New York NY 10016',
            },
            {
              icon: <PhoneIcon color="primary" />,
              title: 'Contact Number',
              content: '+ 1235 2355 98',
            },
            {
              icon: <EmailIcon color="primary" />,
              title: 'Email Address',
              content: 'info@yoursite.com',
            },
            {
              icon: <PublicIcon color="primary" />,
              title: 'Website',
              content: 'yoursite.com',
            },
          ].map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Paper elevation={3} sx={{ p: isMobile ? 2 : 3, textAlign: 'center' }}>
                <Box>{item.icon}</Box>
                <Typography variant="h6" mt={1} gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.content}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Map at Bottom */}
      <Box sx={{ px: isMobile ? 2 : 3, pb: 8 }}>
        <Box
          sx={{
            width: '100%',
            height: isMobile ? 300 : 400,
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 3,
          }}
        >
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=New+York+NY+10016&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </>
  );
};

export default ContactPage;
