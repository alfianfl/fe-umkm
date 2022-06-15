import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import user from '../../../assets/img/user.svg';
import './style.scss';
import Cookies from 'js-cookie';

const navList = [
  {
    name: 'Beranda',
    path: '/'
  },
  {
    name: 'Peta UMKM',
    path: '/peta'
  },
  {
    name: 'Toko',
    path: '/toko'
  },
  {
    name: 'Produk',
    path: '/produk'
  },
  {
    name: 'Pelatihan',
    path: '/pelatihan'
  },
  {
    name: 'Diskusi',
    path: '/diskusi'
  }
];

function Navbar() {
  const { pathname } = useLocation();
  const [path, setPath] = useState('');
  const token = Cookies.get('accessToken');

  useEffect(() => {
    setPath(pathname);
  }, [path, pathname]);

  const setActiveNavStyle = (path) => {
    if (path === pathname) {
      return 'actives';
    }
  };

  return (
    <nav className="navbar-main bg-white border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="thumb-image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Kota_Cimahi.svg"
            className="mr-3 h-12 sm:h-16"
            alt="UMKM Logo"
          />
        </div>

        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3  text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex items-center flex-col mt-4 md:flex-row md:mt-0 md:font-medium">
            {navList.map((nav, index) => (
              <li key={index}>
                <NavLink
                  className={`${setActiveNavStyle(
                    nav.path
                  )} navLink block py-2 pr-4 pl-3 rounded  md:p-0`}
                  to={nav.path}
                >
                  {nav.name}
                </NavLink>
              </li>
            ))}
            {token ? (
              <li>
                <NavLink to={'/profile/edit-profile'}>
                  <button
                    type="button"
                    className="button-profile rounded-lg text-sm px-5 py-2.5 mr-2  "
                  >
                    <img src={user} className="mr-2" alt="" />
                    profile
                  </button>
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink to={'/login'}>
                  <button
                    type="button"
                    className="button-auth rounded-lg text-sm px-5 py-2.5 mr-2  "
                  >
                    Masuk / Daftar
                  </button>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
