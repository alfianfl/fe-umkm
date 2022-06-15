import React, { useState } from 'react';
import { editPasswordAPI } from '../../../models/UserAPI';
import './style.scss';
import swal from 'sweetalert';
import Cookies from 'js-cookie';
import { loaderOverlay } from '../../../helpers';

function EditPassword() {
  const [showPass, setShowPass] = useState(false);
  const [showConfrimPass, setShowConfrimPass] = useState(false);
  const [isRequire, setIsRequire] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    confirmPassword: '',
    password: ''
  });
  const id = Cookies.get('userId');

  const showPassHandler = () => {
    setShowPass(!showPass);
  };
  const showConfrimPassHandler = () => {
    setShowConfrimPass(!showConfrimPass);
  };

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };

  const ubahPassword = () => {
    setLoading(true)
    editPasswordAPI(
      {
        password_baru: inputValue.password,
        password: inputValue.confirmPassword
      },
      id
    )
      .then((res) => {
        if (res.data.message === 'Password tidak sama') {
          swal('Password yang dimasukan salah');
        } else {
          swal({
            title: 'Berhasil mengubah data',
            icon: 'success'
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className="site-edit-profile">
      <div className="card-title p-4">
        <h1>Ganti Password</h1>
      </div>
      {loading && loaderOverlay()}
      <div className="p-4 form-content">
        <div className="flex flex-col form-body">
          <label className="text-left font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <div
            className={`${
              isRequire && inputValue.password === '' ? 'require' : 'valid'
            } form-input pr-4 flex items-center bg-white rounded mb-4`}
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
        <div className="flex flex-col form-body">
          <label className="text-left font-semibold mb-2" htmlFor="password">
            Confrim Password
          </label>
          <div
            className={`${
              isRequire && inputValue.confirmPassword === ''
                ? 'require'
                : 'valid'
            } form-input pr-4 flex items-center bg-white rounded mb-4`}
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
              value={inputValue.confirmPassword}
              onChange={inputChangeHandler}
              type={showConfrimPass ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Masukan password Anda"
            />
            <svg
              className="icon-eye"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={showConfrimPassHandler}
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
        <div
          onClick={ubahPassword}
          className="button-save w-full flex justify-end mt-4"
        >
          <button className="bg-orange-500 hover:bg-orange-600 text-lg text-white font-bold rounded shadow-md px-6 py-1">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPassword;
