import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingFallback = () => {
  return (
    <Box
      sx={{
        py: 10,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <CircularProgress color="secondary" size={48} />
      <Typography variant="body1" color="text.secondary">
       Loading...
      </Typography>
    </Box>
  );
};

export default LoadingFallback;