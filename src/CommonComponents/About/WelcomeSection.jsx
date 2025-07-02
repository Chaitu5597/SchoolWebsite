import React from 'react';
import { Paper, Typography, Box, Button, Container } from '@mui/material';

const WelcomeSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#f9fafc',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            borderRadius: 4,
            backgroundColor: '#ffffff',
            boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
            transition: '0.3s',
            '&:hover': {
              boxShadow: '0 12px 50px rgba(0,0,0,0.1)',
              transform: 'translateY(-5px)',
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: '#1e293b',
              mb: { xs: 2, md: 3 },
              lineHeight: 1.2,
              textAlign: 'center',
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
            }}
          >
            Welcome to <span style={{ color: '#00bfff' }}>Kiddos Learning School</span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#555',
              fontSize: { xs: '1rem', md: '1.125rem' },
              textAlign: 'center',
              maxWidth: 900,
              mx: 'auto',
              mb: 3,
              lineHeight: 1.8,
            }}
          >
            On her way she met a copy. The copy warned the Little Blind Text that
            where it came from, it would have been rewritten a thousand times and
            everything that was left from its origin would be the word.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#555',
              fontSize: { xs: '1rem', md: '1.125rem' },
              textAlign: 'center',
              maxWidth: 900,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean. A small river named Duden flows by
            their place and supplies it with the necessary regelialia.
          </Typography>

          <Box mt={5} textAlign="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                px: { xs: 4, md: 5 },
                py: 1.5,
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 600,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #00bfff, #1de9b6)',
                color: '#fff',
                boxShadow: '0 6px 20px rgba(0,191,255,0.4)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #00acc1, #00c853)',
                  boxShadow: '0 10px 30px rgba(0,191,255,0.5)',
                },
              }}
            >
              Read More
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default WelcomeSection;
