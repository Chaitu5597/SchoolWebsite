// Layout.js
import React from 'react';
import CustomNavbar from '../CommonComponents/AppBar';
import Footer from '../CommonComponents/Footer';
import { Outlet } from 'react-router-dom';

const Layoutpage = () => (
  <>
    <CustomNavbar />
    <Outlet />
    <Footer />
  </>
);

export default Layoutpage;