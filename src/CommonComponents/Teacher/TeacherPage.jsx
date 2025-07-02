import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import bg2 from '../../assets/images/bg_2.jpg';

const TeacherPage = () => {
  return (
    <Box
      sx={{
        mt: 0,
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        minHeight: { xs: '60vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 700,
          }}
        >
          Certified Teachers
        </Typography>

        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            alignItems: 'center',
            flexWrap: 'wrap',
            fontSize: { xs: '0.9rem', md: '1rem' },
            textTransform: 'uppercase',
          }}
        >
          <Link href="/" underline="hover" color="inherit">
            Home
          </Link>
          <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
          <Typography component="span" color="inherit">
            Teachers
          </Typography>
        </Typography>
      </Container>
    </Box>
  );
};

export default TeacherPage;
