import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Paper,
  Avatar,
  IconButton,
  Stack
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import bg2 from '../../assets/images/bg_2.jpg';

const AboutPage = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: '#007bff', py: 2, color: 'white' }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} display="flex" alignItems="center">
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                198 West 21th Street
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} display="flex" alignItems="center">
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">youremail@email.com</Typography>
            </Grid>
            <Grid item xs={12} md={4} display="flex" alignItems="center">
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">+1235 2355 98</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 10,
          textAlign: 'center',
          color: 'white'
        }}
      >
        <Typography variant="h3">About Us</Typography>
        <Typography variant="body1">Home / About Us</Typography>
      </Box>

      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item md={5}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h4" gutterBottom>
                Welcome to Kiddos Learning School
              </Typography>
              <Typography paragraph>
                On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.
              </Typography>
              <Typography paragraph>
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. And if she hasn’t been rewritten, then they are still using her.
              </Typography>
              <Button variant="contained" color="secondary">
                Read More
              </Button>
            </Paper>
          </Grid>
          <Grid item md={7}>
            <Typography variant="h4" gutterBottom>
              What We Offer
            </Typography>
            <Grid container spacing={2}>
              {[
                'Safety First',
                'Regular Classes',
                'Certified Teachers',
                'Sufficient Classrooms',
                'Creative Lessons',
                'Sports Facilities'
              ].map((title) => (
                <Grid item xs={12} md={6} key={title}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6">{title}</Typography>
                      <Typography variant="body2">
                        Far far away, behind the word mountains, far from the countries Vokalia.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          backgroundColor: '#444',
          py: 10,
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container>
          <Typography variant="h3" gutterBottom>
            20 Years of Experience
          </Typography>
          <Typography variant="body1" gutterBottom>
            Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { number: 18, label: 'Certified Teachers' },
              { number: 351, label: 'Successful Kids' },
              { number: 564, label: 'Happy Parents' },
              { number: 300, label: 'Awards Won' }
            ].map((item) => (
              <Grid item md={3} xs={6} key={item.label}>
                <Typography variant="h4">{item.number}</Typography>
                <Typography>{item.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 10, backgroundColor: '#f8f9fa' }}>
        <Container>
          <Typography variant="h4" textAlign="center" gutterBottom>
            What Parents Say About Us
          </Typography>
          <Typography textAlign="center">
            Testimonials will go here. (Images removed due to file errors)
          </Typography>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${require('../../assets/images/bg_5.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 10,
          color: 'white'
        }}
      >
        <Container>
          <Typography variant="h4" color="white" gutterBottom>
            Request A Quote
          </Typography>
          <Paper sx={{ p: 4, mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField fullWidth label="First Name" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Last Name" />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Select Course</InputLabel>
                  <Select defaultValue="">
                    <MenuItem value="Art">Art Lesson</MenuItem>
                    <MenuItem value="Language">Language Lesson</MenuItem>
                    <MenuItem value="Music">Music Lesson</MenuItem>
                    <MenuItem value="Sports">Sports</MenuItem>
                    <MenuItem value="Other">Other Services</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Phone" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={3} label="Message" />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="secondary">
                  Request A Quote
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
