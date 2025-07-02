
import React, { useState } from 'react';
import { Box, Container, Paper, Typography, TextField, MenuItem, Button } from '@mui/material';
import bg5 from '../../assets/images/bg_5.jpg';

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    course: '',
    phone: '',
    message: ''
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const courses = ['Art Lesson', 'Language Lesson', 'Music Lesson', 'Sports', 'Other Services'];

  const textFieldSx = {
    input: {
      color: '#000',
      backgroundColor: '#fff',
      borderRadius: 2,
      fontWeight: 500,
      fontSize: { xs: '0.9rem', sm: '1rem' },
    },
    '& .MuiFilledInput-root': {
      transition: '0.3s',
      '&:hover': {
        backgroundColor: '#fff',
        '& input': {
          color: '#fff',
        },
      },
      '&.Mui-focused': {
        backgroundColor: '#e3f2fd',
        boxShadow: '0 0 0 3px rgba(0, 229, 255, 0.4)',
      },
    },
  };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${bg5})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: { xs: 6, sm: 8, md: 14 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        px: { xs: 2, sm: 4 }
      }}
    >
      <Container maxWidth="sm" disableGutters>
        <Paper
          elevation={12}
          sx={{
            borderRadius: { xs: 2, md: 5 },
            p: { xs: 3, sm: 4, md: 6 },
            backdropFilter: 'blur(20px)',
            background: 'rgba(255, 255, 255, 0.15)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff',
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            textAlign="center"
            sx={{
              background: 'linear-gradient(90deg, #00e5ff, #00c853)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            Request A Quote
          </Typography>

          <Typography textAlign="center" mb={4} sx={{ color: '#f0f0f0', opacity: 0.9, fontSize: { xs: '0.85rem', sm: '1rem' } }}>
            Let's build something amazing together. Drop your details below.
          </Typography>

          <form onSubmit={(e) => {
            e.preventDefault();
            console.log('Form Submitted:', formData);
          }}>
            <Box display="flex" flexDirection="column" gap={2.5}>
              <TextField label="First Name" variant="filled" value={formData.firstName} onChange={handleChange('firstName')} fullWidth InputProps={{ disableUnderline: true }} sx={textFieldSx} />
              <TextField label="Last Name" variant="filled" value={formData.lastName} onChange={handleChange('lastName')} fullWidth InputProps={{ disableUnderline: true }} sx={textFieldSx} />
              <TextField select label="Select Your Course" variant="filled" value={formData.course} onChange={handleChange('course')} fullWidth InputProps={{ disableUnderline: true }} sx={textFieldSx}>
                {courses.map((course) => (
                  <MenuItem key={course} value={course}>{course}</MenuItem>
                ))}
              </TextField>
              <TextField label="Phone Number" variant="filled" value={formData.phone} onChange={handleChange('phone')} fullWidth InputProps={{ disableUnderline: true }} sx={textFieldSx} />
              <TextField label="Your Message" variant="filled" value={formData.message} onChange={handleChange('message')} fullWidth multiline rows={4} InputProps={{ disableUnderline: true }} sx={textFieldSx} />
              <Button type="submit" variant="contained" size="large" sx={{
                background: 'linear-gradient(135deg, #00e5ff, #00c853)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1rem',
                borderRadius: 3,
                py: 1.5,
                '&:hover': {
                  background: 'linear-gradient(135deg, #00bcd4, #00b74a)',
                  transform: 'scale(1.03)',
                }
              }}>
                Submit Quote Request
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default QuoteSection;
