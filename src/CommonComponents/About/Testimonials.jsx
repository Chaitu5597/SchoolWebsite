import React from 'react';
import { Box, Container, Typography, Paper, Avatar, Grid } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import teacher1 from '../../assets/images/teacher-1.jpg';
import teacher2 from '../../assets/images/teacher-2.jpg';
import teacher3 from '../../assets/images/teacher-3.jpg';
import teacher4 from '../../assets/images/teacher-4.jpg';

const testimonials = [
  {
    name: 'Racky Henderson',
    role: 'Father',
    image: teacher1,
    quote: 'Deep within the valley of knowledge, the teacher plants seeds of wonder.',
  },
  {
    name: 'Henry Dee',
    role: 'Mother',
    image: teacher2,
    quote: 'Beyond the hills of silence, a teacher’s voice echoes with wisdom.....',
  },
  {
    name: 'Mark Huff',
    role: 'Mother',
    image: teacher3,
    quote: 'In a quiet land of chalk and dreams, the teacher draws tomorrow...'
  },
  {
    name: 'Rodel Golez',
    role: 'Mother',
    image: teacher4,
    quote: 'Beneath the stars of curiosity, a teacher lights the path unseen...'
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const TestimonialSection = () => (
  <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f8f9fa' }}>
    <Container>
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }}
      >
        What Parents <span style={{ color: '#ff8c00' }}>Says About Us</span>
      </Typography>

      <Typography
        textAlign="center"
        mb={5}
        mx="auto"
        maxWidth="600px"
        sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' } }}
      >
        Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.
      </Typography>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <Box key={index} px={{ xs: 1, md: 3 }}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} md={8}>
                <Paper
                  sx={{
                    p: { xs: 3, sm: 4 },
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 3,
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  <Avatar
                    src={item.image}
                    alt={item.name}
                    sx={{ width: 80, height: 80 }}
                  />
                  <Box>
                    <Typography sx={{ fontSize: '2rem', color: '#ccc' }}>
                      &ldquo;
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                      {item.quote}
                    </Typography>
                    <Typography fontWeight="bold" mt={2}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="primary.main">
                      {item.role}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Slider>
    </Container>
  </Box>
);

export default TestimonialSection;
