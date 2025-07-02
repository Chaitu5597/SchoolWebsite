import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  Avatar,
  Container,
} from '@mui/material';

import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const features = [
  { title: 'Safety First', desc: 'Safe, nurturing space for every child.', icon: <SecurityIcon fontSize="small" /> },
  { title: 'Regular Classes', desc: 'Structured classes for steady growth.', icon: <SchoolIcon fontSize="small" /> },
  { title: 'Certified Teachers', desc: 'Skilled, passionate educators.', icon: <WorkspacePremiumIcon fontSize="small" /> },
  { title: 'Modern Classrooms', desc: 'Smart, interactive classrooms.', icon: <MeetingRoomIcon fontSize="small" /> },
  { title: 'Creative Lessons', desc: 'Fun, engaging activities daily.', icon: <EmojiObjectsIcon fontSize="small" /> },
  { title: 'Sports Facilities', desc: 'Physical fun with safe play zones.', icon: <SportsSoccerIcon fontSize="small" /> },
];

const WhatWeOffer = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#f5f7fa' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          gutterBottom
          sx={{ mb: 1, color: '#1e293b' }}
        >
          What We <span style={{ color: '#00bcd4' }}>Offer</span>
        </Typography>

        <Typography
          textAlign="center"
          sx={{ mb: 5, color: '#607d8b', maxWidth: 600, mx: 'auto' }}
        >
          Explore our thoughtfully designed programs that enrich your child’s education and development.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {features.map(({ title, desc, icon }, index) => (
            <Grid item xs={12} sm={6} md={2} key={index} display="flex">
              <Card
                elevation={1}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 2,
                  borderRadius: 2,
                  flexGrow: 1,
                  gap: 1,
                  transition: 'all 0.3s ease',
                  width: '100%',
                  '&:hover': {
                    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: '#00bcd4',
                    mb: 1,
                    width: 50,
                    height: 50,
                    fontSize: 20,
                  }}
                >
                  {icon}
                </Avatar>
                <Typography variant="subtitle1" fontWeight="bold">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeOffer;
