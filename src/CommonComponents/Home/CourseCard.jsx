import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Button,
} from '@mui/material';

import { ImageAssets } from '../../assets/Imageassets/ImageAssets';

const courses = [
  {
    title: 'Arts Lesson',
    time: '8:30 AM – 10:00 AM',
    image: ImageAssets.course1,
    description:
      'Explore creativity through painting, sculpture, and mixed media. Students learn to express emotions, understand visual storytelling, and appreciate global art traditions.',
  },
  {
    title: 'Language Lesson',
    time: '10:15 AM – 11:45 AM',
    image: ImageAssets.course2,
    description:
      'Build communication skills through immersive reading, writing, and speaking activities. Lessons focus on vocabulary, grammar, and real-world conversation.',
  },
  {
    title: 'Music Lesson',
    time: '12:30 PM – 2:00 PM',
    image: ImageAssets.course3,
    description:
      'Discover rhythm, melody, and harmony through hands-on instrument play, singing, and listening. Lessons are tailored to different learning styles.',
  },
  {
    title: 'Sports Lesson',
    time: '2:15 PM – 3:45 PM',
    image: ImageAssets.course4,
    description:
      'Stay active and build teamwork with engaging physical activities. Students learn rules, techniques, and sportsmanship across a variety of games.',
  },
];

const CoursesSection = () => {
  return (
    <Box component="section" sx={{ py: 8, backgroundColor: '#fafafa' }}>
      <Container>
        {/* Heading */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            <span style={{ color: '#ff5722', fontWeight: 700 }}>Our</span> Courses
          </Typography>
          <Box className="separate">
            <Typography>
              Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
            </Typography>
          </Box>
        </Box>

        {/* Course Cards */}
        <Grid container spacing={4} justifyContent="center">
          {courses.map((course, index) => (
            <Grid item xs={12} sm={10} md={6} key={index}>
              <Box sx={{ maxWidth: 500, mx: 'auto' }}>
                <Paper
                  elevation={0}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: 3,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    transform: 'scale(1)',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', sm: '40%' },
                      height: { xs: 160, sm: 'auto' },
                      minHeight: 160,
                      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${course.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      borderTopLeftRadius: { xs: 3, sm: 3 },
                      borderBottomLeftRadius: { xs: 0, sm: 3 },
                    }}
                  />
                  <Box
                    sx={{
                      p: 2,
                      backgroundColor: '#fff',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        {course.title}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                        <strong>Class time:</strong> {course.time}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 2,
                          color: 'text.secondary',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {course.description}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: '#ff5722',
                        color: '#fff',
                        fontWeight: 500,
                        px: 3,
                        py: 1,
                        borderRadius: 2,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        alignSelf: 'flex-start',
                        '&:hover': {
                          backgroundColor: '#e64a19',
                          transform: 'translateY(-2px) scale(1.05)',
                          boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                        },
                        '&:active': {
                          transform: 'scale(0.97)',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          borderRadius: 2,
                          border: '2px solid rgba(255, 87, 34, 0.5)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                        },
                        '&:hover::after': {
                          opacity: 1,
                        },
                      }}
                    >
                      Explore
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoursesSection;