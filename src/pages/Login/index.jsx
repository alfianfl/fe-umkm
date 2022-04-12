import React from 'react';
import './style.scss';

function Login() {
  return (
    <div className="form-login max-w-md mt-20 mx-auto bg-white rounded my-8">
      <div className="text-center flex justicy-center flex-col items-center text-gray-600 py-4">
        <div className="thumb-image mt-2">
          <img src="" />
        </div>
        <h1 className="font-bold mb-2 mt-4">Selamat Datang</h1>
        <p className="form-title">Masukkan data Anda untuk mengakses akun</p>
      </div>

      <div className=" pt-6 pb-16">
        <div className="form-body px-8 mx-auto">
          <div className="flex flex-col ">
            <label className="text-left" htmlFor="email">
              Email
            </label>
            <div className="form-input flex items-center bg-white rounded shadow-md mb-4">
              <span className="px-3">
                <svg
                  className="fill-current text-orange-500  w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
                </svg>
              </span>
              <input
                className="w-full h-12 focus:outline-none"
                type="email"
                name="email"
                placeholder="Masukan email Anda"
              />
            </div>
          </div>
          <div className="flex flex-col ">
            <label className="text-left" htmlFor="password">
              Password
            </label>
            <div className="form-input flex items-center bg-white rounded shadow-md mb-4">
              <span className="px-3">
                <svg
                  className="fill-current text-orange-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
              </span>
              <input
                className="w-full h-12 focus:outline-none"
                type="password"
                name="password"
                placeholder="Masukan password Anda"
              />
            </div>
          </div>
          <div className="button-login w-full my-4">
            <button className="bg-orange-500 w-full  text-white rounded shadow-md px-6 py-2">
              Masuk
            </button>
          </div>
          <div className="text-sm">
            Belum punya akun ?{' '}
            <span className="regist-link">Daftar atau Registrasi</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
