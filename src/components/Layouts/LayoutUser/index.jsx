import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Commons/Navbar';
import Footer from '../../Commons/Footer';

function LayoutUser() {
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

export default LayoutUser;
