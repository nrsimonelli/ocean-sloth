import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
