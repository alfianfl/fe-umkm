import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

function LayoutUserProfile() {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default LayoutUserProfile;
