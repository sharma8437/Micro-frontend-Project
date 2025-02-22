// Layout.js
import React from 'react';


import Navbar from './navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Hero from './HeroSection/Hero';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div>
        

      <Footer />
      </div>
      
    </div>
  );
};

export default Layout;
