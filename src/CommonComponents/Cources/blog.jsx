// src/CommonComponents/Cources/blog.jsx

import React from 'react';
import { Box, Container, Typography, Grid, Avatar, TextField, Button, Paper, Stack } from '@mui/material';

import { ImageAssets } from '../../assets/Imageassets/ImageAssets';
const Blog = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(ImageAssets.bg2)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 10,
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Typography variant="h3" fontWeight="bold">Blog Single</Typography>
        <Typography variant="subtitle1">Home / Blog / Blog Single</Typography>
      </Box>

      <Container sx={{ mt: 6 }}>
        <Grid container spacing={4}>
          {/* Main Blog Content */}
          <Grid item xs={12} md={8}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              #2. Creative WordPress Themes
            </Typography>
            <Typography paragraph>
              Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum...
            </Typography>
            <img src={ImageAssets.image2} alt="blog" width="100%" style={{ borderRadius: 8 }} />
            <Typography paragraph mt={2}>
              Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis...
            </Typography>
            <Typography paragraph>
              Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum...
            </Typography>
            <Typography paragraph>
              Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem...
            </Typography>

            {/* Author */}
            <Paper elevation={2} sx={{ p: 2, mt: 5, display: 'flex' }}>
              <Avatar src={ImageAssets.image6} sx={{ width: 80, height: 80, mr: 2 }} />
              <Box>
                <Typography variant="h6">George Washington</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                </Typography>
              </Box>
            </Paper>

            {/* Comments */}
            <Box mt={5}>
              <Typography variant="h6" gutterBottom>6 Comments</Typography>
              {[1, 2, 3].map((_, index) => (
                <Paper key={index} sx={{ p: 2, mt: 2 }}>
                  <Stack direction="row" spacing={2}>
                    <Avatar src={ImageAssets.image6} />
                    <Box>
                      <Typography fontWeight="bold">John Doe</Typography>
                      <Typography variant="caption">Jan 03, 2019 at 2:21pm</Typography>
                      <Typography variant="body2" mt={1}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                      </Typography>
                      <Button size="small">Reply</Button>
                    </Box>
                  </Stack>
                </Paper>
              ))}
            </Box>

            {/* Comment Form */}
            <Box mt={5}>
              <Typography variant="h6" gutterBottom>Leave a Comment</Typography>
              <Box component="form" noValidate autoComplete="off">
                <TextField fullWidth label="Name" margin="normal" />
                <TextField fullWidth label="Email" type="email" margin="normal" />
                <TextField fullWidth label="Website" margin="normal" />
                <TextField fullWidth label="Message" multiline rows={4} margin="normal" />
                <Button variant="contained" sx={{ mt: 2 }}>Post Comment</Button>
              </Box>
            </Box>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <TextField fullWidth placeholder="Search..." margin="normal" />

            <Box mt={4}>
              <Typography variant="h6">Category</Typography>
              <ul style={{ paddingLeft: 16 }}>
                <li>Art (6)</li>
                <li>Sports (8)</li>
                <li>Language (2)</li>
                <li>Food (2)</li>
                <li>Music (2)</li>
              </ul>
            </Box>

            <Box mt={4}>
              <Typography variant="h6">Popular Articles</Typography>
              {[ImageAssets.image1, ImageAssets.image2, ImageAssets.image3].map((img, idx) => (
                <Box key={idx} display="flex" mb={2}>
                  <img src={img} alt={`popular-${idx}`} width="64" height="64" style={{ borderRadius: 8, marginRight: 8 }} />
                  <Box>
                    <Typography variant="subtitle2">Even the all-powerful Pointing has no control...</Typography>
                    <Typography variant="caption">Jan. 27, 2019</Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box mt={4}>
              <Typography variant="h6">Tag Cloud</Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                {["School", "Kids", "Nursery", "Daycare", "Care", "Kindergarten", "Teacher"].map(tag => (
                  <Button key={tag} size="small" variant="outlined">{tag}</Button>
                ))}
              </Stack>
            </Box>

            <Box mt={4}>
              <Typography variant="h6">Archives</Typography>
              <ul style={{ paddingLeft: 16 }}>
                <li>December 2018 (30)</li>
                <li>November 2018 (20)</li>
                <li>September 2018 (6)</li>
                <li>August 2018 (8)</li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;