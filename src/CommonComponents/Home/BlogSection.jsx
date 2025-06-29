import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { ImageAssets } from '../../assets/Imageassets/ImageAssets';

// Initial blog post data without comment counts
const initialPosts = [
  {
    title: 'Creative Strategies to Boost Child’s Memory',
    image: ImageAssets.image2,
    date: '29 June 2025',
    summary:
      'Explore engaging methods like visual storytelling, repetition games, and concept mapping to improve memory retention in children.',
    comments: 5,
    admin: 'Admin',
  },
  {
    title: 'Importance of Language Learning in Early Age',
    image: ImageAssets.image4,
    date: '24 June 2025',
    summary:
      'Early language exposure boosts cognitive flexibility, communication skills, and cultural understanding in young learners.',
    comments: 3,
    admin: 'Admin',
  },
  {
    title: 'How Music Enhances Brain Development',
    image: ImageAssets.image3,
    date: '20 June 2025',
    summary:
      'Learning music improves mathematical ability, emotional expression, and auditory processing in growing children.',
    comments: 7,
    admin: 'Admin',
  },
];

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState(initialPosts);

  // Randomize comment count every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBlogPosts((prevPosts) =>
        prevPosts.map((post) => ({
          ...post,
          comments: Math.floor(Math.random() * 20 + 1), // Random between 1 and 20
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (title) => {
    alert(`Opening full blog: ${title}`);
  };

  return (
    <Box sx={{ backgroundColor: '#f8f9fa', py: 10 }}>
      <Container>
        <Box textAlign="center" mb={6} maxWidth="md" mx="auto">
          <Typography variant="h4" fontWeight={700} gutterBottom>
            <span style={{ color: '#6A1B9A' }}>Recent</span> Blog
          </Typography>
          <Typography color="text.secondary">
            Our latest articles explore practical insights and expert advice on child development, learning, and education.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {blogPosts.map((post, index) => {
            const [day, month, year] = post.date.split(' ');
            return (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  onClick={() => handleCardClick(post.title)}
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    cursor: 'pointer',
                    maxWidth: 360,
                    mx: 'auto',
                  }}
                >
                  <Box
                    sx={{
                      overflow: 'hidden',
                      position: 'relative',
                      '&:hover img': {
                        transform: 'scale(1.08)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="220"
                      image={post.image}
                      alt={post.title}
                      sx={{ transition: 'transform 0.4s ease' }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        backgroundColor: '#6A1B9A',
                        color: '#fff',
                        borderRadius: 2,
                        px: 1.5,
                        py: 0.5,
                        textAlign: 'center',
                        boxShadow: 1,
                      }}
                    >
                      <Typography variant="subtitle1" lineHeight={1.2}>
                        {day}
                      </Typography>
                      <Typography variant="caption" display="block">
                        {month}
                      </Typography>
                      <Typography variant="caption" display="block">
                        {year}
                      </Typography>
                    </Box>
                  </Box>

                  <CardContent sx={{ backgroundColor: '#fff' }}>
                    <Typography variant="h6" gutterBottom fontWeight={600}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      {post.summary}
                    </Typography>

                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      <Typography variant="caption" color="text.secondary">
                        {post.admin}
                      </Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <ChatBubbleOutlineIcon fontSize="small" color="action" />
                        <Typography variant="caption" color="text.secondary">
                          {post.comments}
                        </Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogSection;
