import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ImageAssets } from '../../assets/Imageassets/ImageAssets';

const IntroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        width: '100%',
        minHeight: '50vh',
        position: 'relative',
        backgroundImage: `url(${ImageAssets.bg3})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: {
          xs: 'center',
          md: 'top center',
        },
        color: 'rgba(255,255,255,0.8)',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'black',
          opacity: 0.2,
          zIndex: 1,
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8} textAlign="center">
            <Typography
              variant="h4"
              sx={{ color: 'black', fontSize: 36, fontWeight: 600 }}
              gutterBottom
            >
              Teaching Your Child Some Good Manners
            </Typography>
            <Typography
              sx={{
                color: 'black',
                fontWeight: 300,
                mb: 4,
                px: { xs: 2, md: 8 },
              }}
            >
              Instilling good manners early on helps children build empathy,
              respect, and confidence that lasts a lifetime...
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                borderRadius: '999px',
                px: 4,
                py: 1.5,
              }}
              onClick={() => navigate('/course')}
            >
              Take a Course
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IntroSection;
