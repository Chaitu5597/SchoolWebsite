import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Paper,
  IconButton,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ImageAssets } from '../../assets/Imageassets/ImageAssets';

const testimonials = [
  {
    name: 'Racky Henderson',
    role: 'Father',
    image: ImageAssets.teacher1,
    text: 'The school has completely transformed my child’s attitude toward learning. The teachers truly care!',
  },
  {
    name: 'Henry Dee',
    role: 'Mother',
    image: ImageAssets.teacher2,
    text: 'I’m amazed at the creativity and confidence my daughter has developed here. A great learning environment!',
  },
  {
    name: 'Mark Huff',
    role: 'Father',
    image: ImageAssets.teacher3,
    text: 'The curriculum is well-structured, and the staff goes above and beyond to support our kids.',
  },
  {
    name: 'Rodel Golez',
    role: 'Mother',
    image: ImageAssets.teacher4,
    text: 'Safe, supportive, and full of opportunities. My son looks forward to school every day.',
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  // Click handler
  const handleCardClick = () => {
    alert(`${current.name}'s full testimonial clicked!`);
    // You can replace this with modal, route, etc.
  };

  return (
    <Box sx={{ backgroundColor: '#f3e5f5', py: 5 }}>
      <Container>
        <Grid container justifyContent="center" mb={6}>
          <Grid item md={8} textAlign="center">
            <Typography variant="h4" fontWeight={700} gutterBottom>
              <span style={{ color: '#6A1B9A' }}>What Parents</span> Say About Us
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Real stories from families who trust us with their children's future.
            </Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Paper
              elevation={4}
              onClick={handleCardClick}
              sx={{
                px: 4,
                py: 6,
                borderRadius: 4,
                textAlign: 'left',
                background: '#fff',
                position: 'relative',
                maxWidth: 1100,
                width: '100%',
                mx: 'auto',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(106,27,154,0.2)',
                },
              }}
            >
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <Avatar
                    alt={current.name}
                    src={current.image}
                    sx={{
                      width: 100,
                      height: 100,
                      border: '3px solid #6A1B9A',
                      mx: { xs: 'auto', sm: 0 },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="body1" fontStyle="italic" mb={2}>
                    “{current.text}”
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    {current.name}
                  </Typography>
                  <Typography variant="caption" color="green">
                    {current.role}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>

            <Box mt={4} display="flex" justifyContent="center" gap={1}>
              {testimonials.map((_, idx) => (
                <IconButton
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  size="small"
                >
                  <FiberManualRecordIcon
                    fontSize="small"
                    sx={{
                      color: currentIndex === idx ? '#6A1B9A' : '#bbb',
                      transition: 'color 0.3s',
                    }}
                  />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
