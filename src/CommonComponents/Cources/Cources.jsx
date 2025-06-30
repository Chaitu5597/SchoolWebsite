import React from 'react';
import { Box, Grid, Typography, Container, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import course1 from '../../assets/images/course-1.jpg';
import course2 from '../../assets/images/course-2.jpg';
import course3 from '../../assets/images/course-3.jpg';
import course4 from '../../assets/images/course-4.jpg';
import course5 from '../../assets/images/course-5.jpg';
import course6 from '../../assets/images/course-6.jpg';
import bg2 from '../../assets/images/bg_2.jpg';

const courseList = [
  { title: 'Arts Lesson', time: '9:00am - 10am', description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: course1 },
  { title: 'Language Lesson', time: '10:00am - 11am', description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: course2 },
  { title: 'Music Lesson', time: '11:00am - 12pm', description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: course3 },
  { title: 'Sports Lesson', time: '12:00pm - 1pm', description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: course4 },
  { title: 'Study Lesson', time: '1:00pm - 2pm', description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: course5 },
  { title: 'Experiment Lesson', time: '2:00pm - 3pm', description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: course6 },
];

const Courcespage = () => {
  return (
    <Box>
      {/* Top Bar */}
      <Box sx={{ backgroundColor: '#007bff', py: 2, color: 'white' }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} display="flex" alignItems="center">
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">198 West 21th Street</Typography>
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
        <Typography variant="h3">Our Courses</Typography>
        <Typography variant="body1">Home / Courses</Typography>
      </Box>

      {/* Courses Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" align="center" gutterBottom color="primary">
            Our Courses
          </Typography>
          <Grid container spacing={4}>
            {courseList.map((course, index) => (
              <Grid item xs={12} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                  }}
                >
                  <Box
                    component="img"
                    src={course.image}
                    alt={course.title}
                    sx={{
                      width: { xs: '100%', md: 300 },
                      height: 200,
                      objectFit: 'cover',
                    }}
                  />
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight="bold">{course.title}</Typography>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      <strong>Class time:</strong> {course.time}
                    </Typography>
                    <Typography variant="body2">{course.description}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Courcespage;
