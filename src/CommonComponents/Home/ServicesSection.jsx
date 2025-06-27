import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const services = [
  {
    icon: <SchoolIcon sx={{ fontSize: 40, color: '#fff' }} />,
    title: 'Expert Teachers',
    description:
      'Our certified instructors bring years of experience and training to ensure top-quality education for your child.',
    bgColor: '#007bff', // Blue
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: 40, color: '#fff' }} />,
    title: 'Inclusive Learning',
    description:
      'We provide tailored education programs for all learning needs, ensuring every student thrives.',
    bgColor: '#17a2b8', // Teal
  },
  {
    icon: <LibraryBooksIcon sx={{ fontSize: 40, color: '#fff' }} />,
    title: 'Extensive Library',
    description:
      'Our library is stocked with thousands of books and digital resources for curious young minds.',
    bgColor: '#6f42c1', // Purple
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#fff' }} />,
    title: 'Recognized Certification',
    description:
      'Students graduate with nationally recognized certificates that open doors to their future success.',
    bgColor: '#20c997', // Green/teal
  },
];


const ServicesSection = () => {
  return (
    <Box sx={{ py: 3, backgroundColor: '#f8f9fa' , }}>
      <Grid container spacing={0}>
        {services.map((service, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              px: 3,
              py: 4,
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: service.bgColor,
             marginLeft: 0.5,
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
                color: '#fff',
                maxWidth: {sm: '200px', md: '260px', },
              
                
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mx: 'auto',
                  mb: 2,
                  gap:1,
                  
                }}
              >
                {service.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.95rem' }}>
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
