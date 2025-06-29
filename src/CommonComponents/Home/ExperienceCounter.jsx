import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import CountUp from 'react-countup';
import { ImageAssets } from '../../assets/Imageassets/ImageAssets';

const stats = [
  {
    number: 18,
    label: 'Certified Teachers',
    icon: '👨‍🏫',
    backText: 'Expert in engaging, inclusive, and fun learning!',
  },
  {
    number: 351,
    label: 'Successful Kids',
    icon: '🎓',
    backText: 'Empowering students with confidence & skills.',
  },
  {
    number: 564,
    label: 'Happy Parents',
    icon: '😊',
    backText: 'Parents love our learning environment.',
  },
  {
    number: 300,
    label: 'Awards Won',
    icon: '🏆',
    backText: 'Recognized for excellence in education.',
  },
];

const ExperienceCounter = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${ImageAssets.bg4})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        py: 10,
        textAlign: 'center',
      }}
    >
      <Container>
        <Box mb={6}>
          <Typography variant="h4" sx={{ fontWeight: 700, mt: 4, color: 'black' }}>
            20 Years of <span style={{ color: 'black' }}>Experience</span>
          </Typography>
          <Typography
            variant="body1"
            maxWidth="600px"
            mx="auto"
            mt={2}
            sx={{ opacity: 0.9, color: 'black' }}
          >
            Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item key={index} xs={12} sm={6} md={3} display="flex" justifyContent="center">
              <Box
                sx={{
                  perspective: '1000px',
                  width: 240,
                  height: 240,
                }}
              >
                <Box
                  className="flip-card-inner"
                  sx={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transition: 'transform 0.6s',
                    transformStyle: 'preserve-3d',
                    '&:hover': {
                      transform: 'rotateY(180deg)',
                    },
                  }}
                >
                  {/* Front Side */}
                  <Box
                    className="flip-card-front"
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      background: 'rgba(0,0,0,0.5)',
                      color: '#fff',
                      borderRadius: 2,
                      background: 'orange' ,
                      p: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      
                    }}
                  >
                    <Box fontSize={40} mb={1}>
                      {stat.icon}
                    </Box>
                    <Typography variant="h4" fontWeight={700}>
                      <CountUp end={stat.number} duration={2} />
                    </Typography>
                    <Typography variant="subtitle1">{stat.label}</Typography>
                  </Box>

                  {/* Back Side */}
                  <Box
                    className="flip-card-back"
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      background: 'rgba(255,255,255,0.9)',
                      color: '#000',
                      borderRadius: 2,
                      p: 1,
                      mr:'50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: 'rotateY(180deg)',
                      
                      
                    }}
                  >
                    <Typography variant="body1" fontWeight={700}>{stat.backText}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExperienceCounter;
