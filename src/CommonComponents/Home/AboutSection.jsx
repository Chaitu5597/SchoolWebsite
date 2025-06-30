import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Container,
  keyframes,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import BrushIcon from '@mui/icons-material/Brush';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

// Animated gradient keyframes
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const offerings = [
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: '#f44336' }} />,
    title: 'Safety First',
    description: 'We prioritize a secure campus with surveillance and trained staff to ensure every child’s safety.',
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: 40, color: '#3f51b5' }} />,
    title: 'Regular Classes',
    description: 'Structured daily schedules help children build discipline and a strong academic foundation.',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
    title: 'Certified Teachers',
    description: 'Our team comprises qualified, passionate educators committed to child-centered learning.',
  },
  {
    icon: <MeetingRoomIcon sx={{ fontSize: 40, color: '#ff9800' }} />,
    title: 'Sufficient Classrooms',
    description: 'Spacious and tech-equipped classrooms support a focused and comfortable learning environment.',
  },
  {
    icon: <BrushIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
    title: 'Creative Lessons',
    description: 'Engaging projects and activities foster creativity, critical thinking, and joyful exploration.',
  },
  {
    icon: <SportsSoccerIcon sx={{ fontSize: 40, color: '#009688' }} />,
    title: 'Sports Facilities',
    description: 'Dedicated play areas and trained coaches promote physical fitness and teamwork.',
  },
];

const AboutSection = () => {
  return (
    <Box sx={{ py: 2, px: 0, backgroundColor: '#fff', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 5 }}>
      <Container maxWidth="50%">
        <Grid container spacing={2}>
          {/* Left: What We Offer */}
          <Grid item xs={12} md={12}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              What We Offer
            </Typography>
            <Box sx={{ paddingRight: '100px' }}>
              <Typography variant="body1" sx={{ mb: 3 }}>
                On her way she met a copy. The copy warned the Little Blind Text,
                that where it came from it would have been rewritten a thousand
                times and everything that was left from its origin would be the word.
              </Typography>
            </Box>
            <Grid container spacing={2}>
              {offerings.map((item, idx) => (
                <Grid item xs={12} sm={6} md={12} key={idx}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                      border: '1px solid #ccc',
                      borderRadius: 2,
                      p: 2,
                      height: 140,
                      width: 300,
                      marginRight: '20px',
                      backgroundColor: '#fff',
                    }}
                  >
                    {item.icon}
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right: Welcome Text */}
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                py: 4,
                borderRadius: 2,
                height: '100%',
                animation: `${fadeIn} 1s ease-out`,
              }}
            >
              <Typography variant="h4" sx={{ mb: 2 }}>
                Welcome to{' '}
                <Box
                  component="span"
                  sx={{
                    fontFamily: `'Caveat', cursive`,
                    fontSize: '2.5rem',
                    letterSpacing: '1px',
                    background: 'linear-gradient(270deg, #e91e63, #ff9800, #2196f3)',
                    backgroundSize: '600% 600%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: `${gradientAnimation} 6s ease infinite`,
                  }}
                >
                  Sreesai Medha
                </Box>
              </Typography>
              <Typography variant="body1" paragraph>
                At Sreesai Medha, we believe that every child is unique and deserves an environment that supports their growth,
                curiosity, and confidence. Our mission is to provide a well-rounded education that combines academic excellence with
                values, creativity, and physical well-being.
              </Typography>
              <Typography variant="body1" paragraph>
                Our experienced educators use innovative teaching methods, hands-on activities, and personalized attention to ensure
                every student reaches their full potential. We foster an environment that encourages critical thinking, collaboration,
                and a lifelong love for learning.
              </Typography>
              <Typography variant="body1" paragraph>
                With state-of-the-art classrooms, a safe and inclusive campus, and a wide range of extracurricular activities,
                Sreesai Medha is committed to shaping responsible, confident, and compassionate global citizens.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;