import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import bg4 from '../../assets/images/bg_4.jpg';

const Counter = ({ end, label }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const step = Math.ceil(end / 100);
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [end]);

  return (
    <Box textAlign="center">
      <Typography
        variant="h4"
        sx={{
          color: '#1e3a8a',
          fontWeight: 'bold',
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
        }}
      >
        {count}
      </Typography>
      <Typography
        sx={{
          color: '#1e293b',
          fontSize: { xs: '0.9rem', sm: '1rem' },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

const CounterSection = () => (
  <Box
    sx={{
      backgroundImage: `url(${bg4})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      py: { xs: 8, md: 12 },
      px: 2,
    }}
  >
    <Container>
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: '#1e3a8a',
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 'bold',
          }}
        >
          <span style={{ color: '#00bfff' }}>20 Years of</span> Experience
        </Typography>
        <Typography
          sx={{
            color: '#1e293b',
            maxWidth: '600px',
            mx: 'auto',
            fontSize: { xs: '0.95rem', sm: '1.05rem' },
            lineHeight: 1.7,
          }}
        >
          Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={6} sm={6} md={3}>
          <Counter end={18} label="Certified Teachers" />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Counter end={351} label="Successful Kids" />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Counter end={564} label="Happy Parents" />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Counter end={300} label="Awards Won" />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default CounterSection;
