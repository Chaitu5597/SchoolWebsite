import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
  Button,
} from '@mui/material';
import { Facebook, Twitter, Instagram, Google } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ImageAssets } from '../../assets/Imageassets/ImageAssets';

const teachers = [
  {
    name: 'Bianca Wilson',
    role: 'Teacher',
    image: ImageAssets.teacher1,
    profileLink: '/teacher', 
    bio: `Bianca is an experienced educator with a passion for fostering curiosity and creativity in young minds. She specializes in early childhood development and brings over 10 years of classroom leadership.`,
  },
];

const TeachersSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 10, backgroundColor: '#fff' }}>
      <Container>
        {/* Section Header */}
        <Box textAlign="center" mb={5}>
          <Typography variant="h4" component="h2" gutterBottom>
            <Box component="span" fontWeight="bold" sx={{ color: '#FB8C00' }}>
              Certified
            </Box>{' '}
            Teachers
          </Typography>
          <Typography maxWidth="100%" mx="auto">
            Our certified teachers bring passion, expertise, and a proven commitment to nurturing each child's potential. With years of classroom experience and specialized training, they create an engaging and supportive environment where students thrive—academically and personally.
          </Typography>
        </Box>

        {/* Teachers Grid */}
        <Grid container spacing={4}>
          {teachers.map((teacher, index) => (
            <Grid item xs={12} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  boxShadow: 2,
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: '#fafafa',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                  '&:hover .hover-button': {
                    opacity: 1,
                    transform: 'translateY(0)',
                    pointerEvents: 'auto',
                  },
                }}
              >
                {/* Image Section */}
                <Box
                  sx={{
                    width: { xs: '100%', sm: '40%' },
                    height: { xs: 300, sm: 'auto' },
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${teacher.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 0.4s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                </Box>

                {/* Info Section */}
                <Box
                  sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: { sm: '60%' },
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {teacher.name}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {teacher.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {teacher.bio}
                  </Typography>

                  <Stack direction="row" spacing={1} mt={2}>
                    {[Twitter, Facebook, Google, Instagram].map((Icon, i) => (
                      <IconButton
                        key={i}
                        color="primary"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Icon />
                      </IconButton>
                    ))}
                  </Stack>

                  {/* Know More Button */}
                  <Button
                    variant="contained"
                    className="hover-button"
                    onClick={() => navigate(teacher.profileLink)}
                    sx={{
                      mt: 3,
                      alignSelf: 'flex-start',
                      backgroundColor: '#6a1b9a',
                      color: '#fff',
                      opacity: 0,
                      transform: 'translateY(10px)',
                      transition: 'all 0.3s ease-in-out',
                      pointerEvents: 'auto',
                      '&:hover': {
                        backgroundColor: '#4a148c',
                      },
                    }}
                  >
                    Know More
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeachersSection;
