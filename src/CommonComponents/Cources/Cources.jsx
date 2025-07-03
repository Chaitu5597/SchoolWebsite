import React from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from '@mui/material';



import course1 from '../../assets/images/course-1.jpg';
import course2 from '../../assets/images/course-2.jpg';
import course3 from '../../assets/images/course-3.jpg';
import course4 from '../../assets/images/course-4.jpg';
import course5 from '../../assets/images/course-5.jpg';
import course6 from '../../assets/images/course-6.jpg';
import bg2 from '../../assets/images/bg_2.jpg';

const courseList = [
  {
    title: 'Arts Lesson',
    time: '9:00am - 10:00am',
    description:
      'Unleash creativity through hands-on activities using various materials like paper, clay, and paint. Children will learn the basics of design, color theory, and develop fine motor skills while expressing themselves artistically in a fun and supportive environment.',
    image: course1,
  },
  {
    title: 'Language Lesson',
    time: '10:00am - 11:00am',
    description:
      'Improve communication skills through interactive storytelling, vocabulary games, and public speaking practice. This course builds confidence and fluency in both reading and speaking by encouraging active participation and group discussions.',
    image: course2,
  },
  {
    title: 'Music Lesson',
    time: '11:00am - 12:00pm',
    description:
      'Dive into the world of rhythm and melody with singing, musical instruments, and listening exercises. Learn how to play simple tunes on drums and xylophones while understanding tempo, pitch, and harmony in an exciting group setting.',
    image: course3,
  },
  {
    title: 'Sports Lesson',
    time: '12:00pm - 1:00pm',
    description:
      'Stay healthy and energized with indoor and outdoor sports. Kids learn teamwork, flexibility, and discipline through structured games and physical challenges like obstacle courses, running drills, and ball games.',
    image: course4,
  },
  {
    title: 'Study Lesson',
    time: '1:00pm - 2:00pm',
    description:
      'Develop essential academic skills including math, reading, and writing. Children get focused time for assignments, guided learning sessions, and problem-solving tasks that reinforce classroom concepts in a calm and productive space.',
    image: course5,
  },
  {
    title: 'Experiment Lesson',
    time: '2:00pm - 3:00pm',
    description:
      'Fuel curiosity through exciting hands-on science experiments such as volcano eruptions, magnetic reactions, and plant growth tracking. This class fosters observation, inquiry, and a love for scientific discovery through safe and fun activities.',
    image: course6,
  },
];

const Courcespage = () => {
  return (
    <Box>
      {/* Full-Screen Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Our Courses
        </Typography>
        <Typography variant="body1">Home / Courses</Typography>
      </Box>

      {/* Courses Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            align="center"
            color="primary"
            gutterBottom
          >
            Discover Engaging & Interactive Learning
          </Typography>

          <Typography variant="body1" align="center" sx={{ mb: 5 }}>
            Fun and educational activities designed to enhance creativity, focus, communication, and teamwork.
          </Typography>
        </Container>

        {/* Course Grid */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gap={4}
          sx={{ mt: 4, mx: 4 }}
        >
          {courseList.map((course, index) => (
            <Card
              key={index}
              sx={{
                height: 500,
                width: '100%',
                borderRadius: 3,
                boxShadow: 4,
                overflow: 'hidden',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={course.image}
                  alt={course.title}
                  sx={{
                    height: 300,
                    width: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    textAlign: 'justify',
                    px: 2,
                    pt: 2,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                    {course.title}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    <strong>Class time:</strong> {course.time}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
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

export default Courcespage;