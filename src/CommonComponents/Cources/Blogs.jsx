import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import bgImage from '../../assets/images/bg_2.jpg';
import img1 from '../../assets/images/image_1.jpg';
import img2 from '../../assets/images/image_2.jpg';
import img3 from '../../assets/images/image_3.jpg';
import img4 from '../../assets/images/image_4.jpg';
import img5 from '../../assets/images/image_5.jpg';
import img6 from '../../assets/images/image_6.jpg';

const blogData = [
  {
    image: img1,
    title: 'Skills To Develop Your Child Memory',
    date: '27 January 2019',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
  },
  {
    image: img2,
    title: 'Creative Activities For Children’s Development',
    date: '27 January 2019',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
  },
  {
    image: img3,
    title: 'The Importance of Outdoor Play',
    date: '27 January 2019',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
  },
  {
    image: img4,
    title: 'Art & Creativity Sessions for Kids',
    date: '28 February 2019',
    description:
      'Unleash creativity and imagination through painting, drawing, and design activities.',
  },
  {
    image: img5,
    title: 'Teamwork Through Fun Games',
    date: '15 March 2019',
    description:
      'Learn to work in groups, communicate effectively, and share ideas in playful settings.',
  },
  {
    image: img6,
    title: 'Storytelling and Memory Power',
    date: '05 April 2019',
    description:
      'Interactive storytelling that improves memory retention, focus, and verbal skills.',
  },
];

const BlogPage = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  const cardWidth = isSmall ? '100%' : isMedium ? '48%' : '32%';

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: isSmall ? '60vh' : '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          flexDirection: 'column',
          px: 2,
        }}
      >
        <Typography
          variant={isSmall ? 'h4' : 'h2'}
          fontWeight="bold"
        >
          Our Blog
        </Typography>
        <Typography variant="body1">Home / Blog</Typography>
      </Box>

      {/* Blog Section */}
      <Box sx={{ py: 8, px: isSmall ? 2 : 6, backgroundColor: '#f8f9fa' }}>
        <Typography
          variant={isSmall ? 'h5' : 'h4'}
          fontWeight="bold"
          align="center"
          color="primary"
          gutterBottom
        >
          Latest Articles & Activities
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 5 }}>
          Explore insightful stories and fun learning moments.
        </Typography>

        {/* Cards in Responsive Rows */}
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent={isSmall ? 'center' : 'space-between'}
          gap={isSmall ? 2 : 3}
        >
          {blogData.map((blog, index) => (
            <Card
              key={index}
              sx={{
                width: cardWidth,
                borderRadius: 2,
                boxShadow: 4,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-5px)' },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={blog.image}
                  alt={blog.title}
                  sx={{ height: 250, objectFit: 'cover' }}
                />
                <CardContent sx={{ textAlign: 'justify' }}>
                  <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                    {blog.title}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    <strong>Date:</strong> {blog.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogPage;
