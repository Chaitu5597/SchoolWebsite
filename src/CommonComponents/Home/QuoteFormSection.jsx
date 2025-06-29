import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
} from '@mui/material';
import { ImageAssets } from '../../assets/Imageassets/ImageAssets';

const courses = [
  'Art Lesson',
  'Language Lesson',
  'Music Lesson',
  'Sports',
  'Other Services',
];

const QuoteFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    course: '',
    phone: '',
    message: '',
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${ImageAssets.bg5})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        py: 10,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} md={6}>
            <Paper
              elevation={6}
              sx={{
                backgroundColor: 'primary.main',
                color: '#fff',
                p: { xs: 3, md: 5 },
                borderRadius: 2,
                maxWidth: 500,
                ml: 'auto',
              }}
            >
              <Typography variant="h5" fontWeight={600} gutterBottom>
                Request A Quote
              </Typography>
              <Typography variant="body2" mb={3}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia...
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2} direction="column">
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="filled"
                      value={formData.firstName}
                      onChange={handleChange('firstName')}
                      InputProps={{ disableUnderline: true }}
                      sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="filled"
                      value={formData.lastName}
                      onChange={handleChange('lastName')}
                      InputProps={{ disableUnderline: true }}
                      sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      select
                      label="Select Your Course"
                      variant="filled"
                      value={formData.course}
                      onChange={handleChange('course')}
                      InputProps={{ disableUnderline: true }}
                      sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                    >
                      {courses.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone"
                      variant="filled"
                      value={formData.phone}
                      onChange={handleChange('phone')}
                      InputProps={{ disableUnderline: true }}
                      sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      label="Message"
                      variant="filled"
                      value={formData.message}
                      onChange={handleChange('message')}
                      InputProps={{ disableUnderline: true }}
                      sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      fullWidth
                      sx={{ py: 1.5, fontWeight: 600 }}
                    >
                      Request A Quote
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default QuoteFormSection;
