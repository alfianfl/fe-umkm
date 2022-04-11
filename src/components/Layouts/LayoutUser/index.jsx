import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Commons/Navbar';

function LayoutUser() {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </>
  );
}

export default LayoutUser;
