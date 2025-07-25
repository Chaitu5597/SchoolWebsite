import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ImageAssets } from '../../assets/Imageassets/ImageAssets';

const slides = [
  {
    image: ImageAssets.bg1,
    title: 'Kids Are The Best',
    subtitle: 'Explorers In The World',
  },
  {
    image: ImageAssets.bg2,
    title: 'Perfect Learned',
    subtitle: 'For Your Child',
  },
];

const HomeCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100dvh',
        position: 'relative',
        backgroundImage: `url(${slide.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Slide Content */}
      <Container
        maxWidth="xl"
        sx={{
          height: '100%',
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6} textAlign="center">
            <Typography
              variant="h2"
              sx={{
                color: '#fff',
                mb: 3,
                fontWeight: 700,
                fontSize: {
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3rem',
                  lg: '4rem',
                },
                lineHeight: 1.2,
              }}
            >
              {slide.title}
              <br />
              <Box component="span" sx={{ color: '#f8c291' }}>
                {slide.subtitle}
              </Box>
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: {
                  xs: '0.9rem',
                  sm: '1rem',
                },
              }}
              onClick={() => navigate('/about')}
            >
              Read More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeCards;
