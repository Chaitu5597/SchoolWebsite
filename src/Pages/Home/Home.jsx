import React from 'react';
import Caroucel from '../../CommonComponents/Home/Caroucel';
import CustomNavbar from '../../CommonComponents/AppBar';
import { Box, Grid } from '@mui/material';
import { ImageAssets } from '../../assets/Imageassets/ImageAssets';
import HomeCards from '../../CommonComponents/Home/HomeCards';
import ServicesSection from '../../CommonComponents/Home/ServicesSection';
import AboutSection from '../../CommonComponents/Home/AboutSection';
import IntroSection from '../../CommonComponents/Home/IntroSection';
import TeachersSection from '../../CommonComponents/Home/TeachersSection';

import CoursesSection from '../../CommonComponents/Home/CourseCard';
import ExperienceCounter from '../../CommonComponents/Home/ExperienceCounter';
import TestimonialSection from '../../CommonComponents/Home/TestimonialSection';
import QuoteFormSection from '../../CommonComponents/Home/QuoteFormSection';
import BlogSection from '../../CommonComponents/Home/BlogSection';

const Home = () => {
  // const cardData = [
  //   { image: ImageAssets.cat1, link: '/about' , title : 'About Us'},
  //   { image: ImageAssets.cat2, link: '/services' , title : 'Services'},
  //   { image: ImageAssets.cat3, link: '/contact', title : 'Contact Us' },
  //   { image: ImageAssets.cat3, link: '/contact', title : 'Contact Us' },
  // ];

  return (
    <div>
      {/* <CustomNavbar /> */}
      <Caroucel />
      <HomeCards/>
      <ServicesSection/>
      <AboutSection/>
      <IntroSection/>
      <TeachersSection/>
      <CoursesSection/>
      <ExperienceCounter/>
      <TestimonialSection/>
      <QuoteFormSection/>
      <BlogSection/>

    </div>
  );
};

export default Home;