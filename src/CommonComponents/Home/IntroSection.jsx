import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { ImageAssets } from '../../assets/Imageassets/ImageAssets'; // Ensure this exports bg3 correctly

const IntroSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        width: '100%',
        minHeight: '50vh',
        position: 'relative',
        backgroundImage: `url(${ImageAssets.bg3})`,
        color:'black',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        backgroundPosition: {
          xs: 'center center',
          md: 'top center',
        },
        color: 'rgba(255,255,255,0.8)',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'black',
          opacity: 0.2,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={3} alignItems="center">

          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} md={8}  >
              <Typography
                variant="h4"
                sx={{
                  color: 'black',
                  fontSize: 36,
                  fontWeight: 600,
                }}
                gutterBottom
              >
                Teaching Your Child Some Good Manners
              </Typography>
              <Box sx={{ paddingRight: '90px' }}>

                <Typography sx={{
                  color: 'black',
                  fontWeight: 300,
                 
                }}>
                  Instilling good manners early on helps children build empathy, respect, and confidence that lasts a lifetime. Our courses are designed to engage young minds with real-world social scenarios, encouraging thoughtful behavior and positive communication skills.
                </Typography>
              </Box>

            </Grid>
            <Grid item xs={12} md={3} display="flex" justifyContent="center" width="30%">

            </Grid>


          </Grid>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              borderRadius: '999px',
              px: 2,
              py: 1.5,
              width: '100%',
              mt: '100px'
            }}
          >
            Take a Course
          </Button>

        </Grid>
      </Container>
    </Box>
  );
};

export default IntroSection;