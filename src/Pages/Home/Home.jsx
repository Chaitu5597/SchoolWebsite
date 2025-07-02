import React, { lazy, Suspense } from 'react';
import { Box, keyframes } from '@mui/material';
import LoadingFallback from '../../CommonComponents/LoadingFallback';


// Lazy-loaded components
const Caroucel = lazy(() => import('../../CommonComponents/Home/Caroucel'));
const CustomNavbar = lazy(() => import('../../CommonComponents/AppBar'));
const HomeCards = lazy(() => import('../../CommonComponents/Home/HomeCards'));
const ServicesSection = lazy(() => import('../../CommonComponents/Home/ServicesSection'));
const AboutSection = lazy(() => import('../../CommonComponents/Home/AboutSection'));
const IntroSection = lazy(() => import('../../CommonComponents/Home/IntroSection'));
const TeachersSection = lazy(() => import('../../CommonComponents/Home/TeachersSection'));
const CoursesSection = lazy(() => import('../../CommonComponents/Home/CourseCard'));
const ExperienceCounter = lazy(() => import('../../CommonComponents/Home/ExperienceCounter'));
const TestimonialSection = lazy(() => import('../../CommonComponents/Home/TestimonialSection'));
const QuoteFormSection = lazy(() => import('../../CommonComponents/Home/QuoteFormSection'));
const BlogSection = lazy(() => import('../../CommonComponents/Home/BlogSection'));
const ContactInfo = lazy(() => import('../../CommonComponents/Home/ContactInfo'));


// Fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Home = () => {
  return (
    <Suspense fallback={<LoadingFallback/>}>
      <Box sx={{ animation: `${fadeIn} 0.8s ease 0s both` }}>
        <ContactInfo />
      </Box>
      <Box sx={{ animation: `${fadeIn} 0.8s ease 0.1s both` }}>
        <Caroucel />
      </Box>
      <Box sx={{ animation: `${fadeIn} 0.8s ease 0.2s both` }}>
        <HomeCards />
      </Box>
      <Box sx={{ animation: `${fadeIn} 0.8s ease 0.3s both` }}>
        <ServicesSection />
      </Box>
      <Box sx={{ animation: `${fadeIn} 0.8s ease 0.4s both` }}>
        <AboutSection />
      </Box>
      <Box sx={{ animation: `${fadeIn} 0.8s ease 0.5s both` }}>
        <IntroSection />
      </Box>
      <Box sx={{ animation: `${fadeIn} 0.8s ease 0.6s both` }}>
        <TeachersSection />
      </Box>
      <Box sx={{ animation: `${fadeIn} 0.8s ease 0.7s both` }}>
        <CoursesSection />
      </Box>
    
        <ExperienceCounter />
      
      <Box sx={{ animation: `${fadeIn} 0.8s ease 0.9s both` }}>
        <TestimonialSection />
      </Box>
      <Box sx={{ animation: `${fadeIn} 0.8s ease 1s both` }}>
        <QuoteFormSection />
      </Box>
      <Box sx={{ animation: `${fadeIn} 0.8s ease 1.1s both` }}>
        <BlogSection />
      </Box>
    </Suspense>
  );
};

export default Home;