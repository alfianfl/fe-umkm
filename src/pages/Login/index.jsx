import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

function Login() {
  const [showPass, setShowPass] = useState(false);
  const [isRequire, setIsRequire] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  });

  const showPassHandler = () => {
    setShowPass(!showPass);
  };

  const buttonLoginHandler = () => {
    if (inputValue.email === '' || inputValue.password === '') {
      setIsRequire(true);
    } else {
      alert('anda berhasil login');
      setIsRequire(false);
    }
  };

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };

  return (
    <div className="form-login max-w-md mt-20 mx-auto bg-white rounded my-8">
      <div className="text-center flex justicy-center flex-col items-center text-gray-600 py-4">
        <div className="thumb-image mt-2">
          <img src="https://www.pinclipart.com/picdir/middle/212-2129001_mobile-app-development-services-business-login-illustration-png.png" />
        </div>
        <h1 className="font-bold mb-2 mt-4">Selamat Datang</h1>
        <p className="form-title">Masukkan data Anda untuk mengakses akun</p>
      </div>

      <div className=" pt-6 pb-16">
        <div className="form-body px-8 mx-auto">
          <div className="flex flex-col ">
            <label className="text-left font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <div
              className={`${
                isRequire && inputValue.email === '' ? 'require' : 'valid'
              } form-input flex items-center bg-white rounded mb-4`}
            >
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
                value={inputValue.email}
                onChange={inputChangeHandler}
                type="email"
                name="email"
                placeholder="Masukan email Anda"
              />
            </div>
          </div>
          <div className="flex flex-col ">
            <label className="text-left font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <div
              className={`${
                isRequire && inputValue.password === '' ? 'require' : 'valid'
              } form-input flex items-center bg-white rounded mb-4`}
            >
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
                className="  w-full h-12 focus:outline-none"
                value={inputValue.password}
                onChange={inputChangeHandler}
                type={showPass ? 'text' : 'password'}
                name="password"
                placeholder="Masukan password Anda"
              />
              <svg
                className="icon-eye"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={showPassHandler}
              >
                <path
                  d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                  stroke="#667080"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="#667080"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="button-login w-full my-4">
            <button
              onClick={buttonLoginHandler}
              className="bg-orange-500 w-full hover:bg-orange-600  text-white rounded shadow-md px-6 py-2"
            >
              Masuk
            </button>
          </div>
          <div className="text-sm">
            Belum punya akun ?{' '}
            <span className="regist-link">
              <NavLink to={'/register'}>Daftar atau Registrasi</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
