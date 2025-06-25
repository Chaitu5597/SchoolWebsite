import React from 'react';
import team1 from '../../assets/images/team-1.jpg';
import team2 from '../../assets/images/team-2.jpg';
import team3 from '../../assets/images/team-3.jpg';
import team4 from '../../assets/images/team-4.jpg';
import aboutImage from '../../assets/images/about.jpg';


import {
  Box, Container, Grid, Typography, Button, Card, CardContent, CardMedia, Avatar, Stack, IconButton
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const About = () => {
  const services = [
    { icon: <SchoolIcon />, title: 'Skilled Instructors' },
    { icon: <LanguageIcon />, title: 'Online Classes' },
    { icon: <HomeIcon />, title: 'Home Projects' },
    { icon: <MenuBookIcon />, title: 'Book Library' },
  ];

 const instructors = [
  { name: 'John Doe', designation: 'Instructor', img: team1 },
  { name: 'Jane Smith', designation: 'Instructor', img: team2 },
  { name: 'Alice Johnson', designation: 'Instructor', img: team3 },
  { name: 'Bob Brown', designation: 'Instructor', img: team4 },
];

  return (
    <Box sx={{ pt: 5, pb: 10 }}>
  
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, textAlign: 'center' }}>
        <Typography variant="h3">About Us</Typography>
        <Typography variant="subtitle1">Welcome to eLearning</Typography>
      </Box>

      <Container sx={{ mt: 5 }}>
        <Grid container spacing={4}>
          {services.map((service, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card sx={{ textAlign: 'center', p: 3 }}>
                <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                  {service.icon}
                </Avatar>
                <Typography variant="h6">{service.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ mt: 10 }}>
        <Grid container spacing={4} alignItems="center">
         <Grid item xs={12} md={6}>
  <img src={aboutImage} alt="About" style={{ width: '100%', borderRadius: 8 }} />
</Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="primary">About Us</Typography>
            <Typography variant="h4" gutterBottom>Welcome to eLEARNING</Typography>
            <Typography variant="body1" paragraph>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
            </Typography>
            <Grid container spacing={1}>
              {['Skilled Instructors', 'Online Classes', 'International Certificate'].map((item, idx) => (
                <Grid item xs={6} key={idx}>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box component="span" sx={{ mr: 1, color: 'primary.main' }}>→</Box> {item}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Button variant="contained" sx={{ mt: 3 }}>Read More</Button>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ mt: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>Expert Instructors</Typography>
        <Grid container spacing={4}>
          {instructors.map((ins, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card>
                <CardMedia component="img" height="220" image={ins.img} alt={ins.name} />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6">{ins.name}</Typography>
                  <Typography variant="body2">{ins.designation}</Typography>
                  <Stack direction="row" justifyContent="center" spacing={1} mt={1}>
                    <IconButton color="primary"><FacebookIcon fontSize="small" /></IconButton>
                    <IconButton color="primary"><TwitterIcon fontSize="small" /></IconButton>
                    <IconButton color="primary"><InstagramIcon fontSize="small" /></IconButton>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
