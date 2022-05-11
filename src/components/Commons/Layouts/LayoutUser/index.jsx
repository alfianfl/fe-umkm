import React from 'react';
import { Outlet, useLocation, NavLink } from 'react-router-dom';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import tokoDummy from '../../../../assets/img/tokoDummy.png';
import store from '../../../../assets/img/store.svg';
import user from '../../../../assets/img/user2.svg';
import lock from '../../../../assets/img/lock.svg';
import product from '../../../../assets/img/product.svg';
import './style.scss';

function LayoutUser() {
  const { pathname } = useLocation();
  return (
    <>
      <main>
        <Navbar />
        {pathname.includes('/profile') ? (
          <div className="container sidebar-profile mx-auto mt-40">
            <div className="grid gap-8 grid-cols-4">
              <div className="text-left">
                <div className="side-profile-thumb p-4">
                  <div className="flex ">
                    <div className="card-title text-left flex ">
                      <div className="thumb-img mr-6">
                        <img src={tokoDummy} alt="" />
                      </div>
                      <div className="flex flex-col">
                        {' '}
                        <h1>The Coldest Sunset</h1>{' '}
                        <span className="email">mustopa.sina@gmail.com</span>
                        <span className="no-telp">081233432432</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="side-profile-thumb mt-4 p-4">
                  <div className="profile-section">
                    <h1 className="section-title">Profile</h1>
                    <NavLink to={'/profile/edit-profile'}>
                      <div className="side-nav">
                        <img src={user} alt="" />{' '}
                        <span className="side-link">Profile Akun</span>
                      </div>
                    </NavLink>
                    <NavLink to={'/profile/edit-password'}>
                      <div className="side-nav">
                        <img src={lock} alt="" />{' '}
                        <span className="side-link">Ganti Password</span>
                      </div>
                    </NavLink>
                  </div>
                  <div className="umkm-section mt-4">
                    <h1 className="section-title">Etalase UMKM</h1>
                    <div className="side-nav">
                      <img src={store} alt="" />{' '}
                      <span className="side-link">Buka Usaha UMKM</span>
                    </div>
                    <div className="side-nav">
                      <img src={product} alt="" />{' '}
                      <span className="side-link">Produk UMKM</span>
                    </div>
                  </div>
                  <div className="button-keluar w-full mt-4">
                    <button className="bg-orange-500 w-full hover:bg-orange-600 text-lg text-white font-bold rounded shadow-md px-6 py-1">
                      Keluar
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <Outlet />
              </div>
            </div>
          </div>
        ) : (
          <Outlet />
        )}

        <Footer />
      </main>
    </>
  );
}

export default LayoutUser;
