import React, { useState } from 'react';
import {
  Grid,
  Typography,
  IconButton,
  Stack,
  Box,
  Container
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';

import teacher1 from '../../assets/images/teacher-1.jpg';
import teacher2 from '../../assets/images/teacher-2.jpg';
import teacher3 from '../../assets/images/teacher-3.jpg';
import teacher4 from '../../assets/images/teacher-4.jpg';
import teacher5 from '../../assets/images/teacher-5.jpg';
import teacher6 from '../../assets/images/teacher-6.jpg';
import teacher7 from '../../assets/images/teacher-7.jpg';
import teacher8 from '../../assets/images/teacher-8.jpg';

const teachers = [
  {
    name: 'Bianca Wilson',
    role: 'Teacher',
    image: teacher1,
    description: 'Passionate about lifelong learning and always eager to help students grow.',
  },
  {
    name: 'Mitch Parker',
    role: 'English Teacher',
    image: teacher2,
    description: 'Lover of literature, words, and inspiring young minds to write boldly.',
  },
  {
    name: 'Stella Smith',
    role: 'Art Teacher',
    image: teacher3,
    description: 'Colors and creativity fuel my days; teaching art is my true calling.',
  },
  {
    name: 'Monshe Henderson',
    role: 'Science Teacher',
    image: teacher4,
    description: 'Fascinated by how the world works — science is a story worth telling.',
  },
  {
    name: 'Daniel Tribor',
    role: 'Teacher',
    image: teacher5,
    description: 'Dedicated to making every classroom a space for curiosity and courage.',
  },
  {
    name: 'Mitch Parker',
    role: 'English Teacher',
    image: teacher6,
    description: 'Grammar nerd, poetry lover, and committed to every student’s voice.',
  },
  {
    name: 'Stella Smith',
    role: 'Art Teacher',
    image: teacher7,
    description: 'Art is freedom. I help students find their voice through every brushstroke.',
  },
  {
    name: 'Monshe Henderson',
    role: 'Science Teacher',
    image: teacher8,
    description: `Science isn't just facts — it's an adventure I love guiding students through.`,
  },
];

const TeacherCard = ({ name, role, image, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box textAlign="center" width="100%">
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          position: 'relative',
          width: '100%',
          height: 300,
          overflow: 'hidden',
          mb: 2,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 0.3s ease',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'white',
            py: 1,
            opacity: hovered ? 1 : 0,
            visibility: hovered ? 'visible' : 'hidden',
            transition: 'opacity 0.3s ease, visibility 0.3s ease',
          }}
        >
          <IconButton size="small" sx={{ color: 'orange' }}><TwitterIcon fontSize="small" /></IconButton>
          <IconButton size="small" sx={{ color: 'orange' }}><FacebookIcon fontSize="small" /></IconButton>
          <IconButton size="small" sx={{ color: 'orange' }}><GoogleIcon fontSize="small" /></IconButton>
          <IconButton size="small" sx={{ color: 'orange' }}><InstagramIcon fontSize="small" /></IconButton>
        </Stack>
      </Box>
      <Typography
        variant="h6"
        sx={{
          color: hovered ? 'rgb(11, 149, 195)' : 'black',
          transition: 'color 0.3s ease',
        }}
      >
        {name}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" sx={{ textTransform: 'uppercase' }}>
        {role}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 1, mx: 'auto', maxWidth: 260, lineHeight: 1.5, letterSpacing: '0.5px' }}
      >
        {description}
      </Typography>
    </Box>
  );
};

const TeachersPhoto = () => (
  <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, pt: 10, pb: 6 }}>
    <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="center">
        {teachers.map((teacher, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} display="flex" justifyContent="center">
            <TeacherCard {...teacher} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default TeachersPhoto;