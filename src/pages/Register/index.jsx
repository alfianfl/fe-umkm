import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const registInputList = [
  {
    name: 'Nama Lengkap',
    placeholder: 'Masukan nama lengkap Anda',
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
          stroke="#F86400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
          stroke="#F86400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: ''
  },
  {
    name: 'NIK',
    placeholder: 'Masukan nomor NIK Anda',
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.627 6.76553C22.6301 6.57701 22.5953 6.38979 22.5245 6.21501C22.4538 6.04024 22.3486 5.88149 22.2152 5.74823C22.0818 5.61497 21.923 5.50993 21.7481 5.43937C21.5733 5.3688 21.386 5.33416 21.1975 5.3375C18.1368 5.35443 15.0755 5.34456 12.0148 5.34456C8.93577 5.34456 5.85675 5.34456 2.77773 5.34456C1.94307 5.34456 1.37299 5.91394 1.37299 6.7486C1.37299 10.2524 1.37299 13.7566 1.37299 17.2613C1.37299 18.0981 1.93743 18.6625 2.77915 18.6625H21.1982C22.0653 18.6625 22.6206 18.1072 22.6206 17.2415C22.6213 13.7491 22.6129 10.2573 22.627 6.76553ZM21.1312 17.5245H2.84123C2.54561 17.5245 2.50751 17.4871 2.50751 17.1893C2.50751 13.7284 2.50751 10.2674 2.50751 6.80646C2.50751 6.52988 2.5576 6.47908 2.83559 6.47908H21.1665C21.4395 6.47908 21.4903 6.532 21.4903 6.81069V17.1752C21.4868 17.4977 21.4565 17.5245 21.1312 17.5245Z"
          fill="#F86400"
        />
        <path
          d="M6.52985 15.6287C5.67331 15.6287 4.81748 15.6287 3.96094 15.6287C3.83042 15.6287 3.80078 15.5934 3.8029 15.4678C3.81066 15 3.79725 14.5323 3.80784 14.0652C3.829 13.0838 4.27491 12.3331 5.07994 11.7827C5.16673 11.7235 5.21682 11.7355 5.29655 11.7983C5.64989 12.0861 6.09172 12.2433 6.54749 12.2433C7.00326 12.2433 7.44509 12.0861 7.79843 11.7983C7.88027 11.7333 7.93037 11.7277 8.01362 11.7856C8.78973 12.307 9.23564 13.0224 9.28361 13.9608C9.30831 14.4638 9.28361 14.9683 9.29631 15.4728C9.29631 15.6026 9.26033 15.6315 9.13474 15.6308C8.26692 15.6259 7.39838 15.6287 6.52985 15.6287Z"
          fill="#F86400"
        />
        <path
          d="M6.54255 11.9407C6.20529 11.939 5.87612 11.8373 5.59667 11.6485C5.31723 11.4597 5.10008 11.1922 4.9727 10.8799C4.84532 10.5676 4.81343 10.2246 4.88108 9.8942C4.94872 9.5638 5.11286 9.26088 5.35272 9.02379C5.59257 8.7867 5.89737 8.62609 6.22854 8.56228C6.5597 8.49847 6.90236 8.53433 7.21314 8.66533C7.52392 8.79632 7.78885 9.01656 7.97442 9.29817C8.15999 9.57979 8.25786 9.91012 8.25563 10.2474C8.25024 10.6982 8.06741 11.1288 7.74674 11.4457C7.42608 11.7627 6.99342 11.9405 6.54255 11.9407Z"
          fill="#F86400"
        />
        <path
          d="M15.5284 12.57H12.4692C12.0882 12.57 11.8342 12.3379 11.8342 11.9993C11.8342 11.6606 12.0966 11.4348 12.4621 11.4348H18.5813C18.8967 11.4348 19.1366 11.6105 19.1924 11.8744C19.222 12.0058 19.2044 12.1435 19.1428 12.2633C19.0811 12.3832 18.9793 12.4775 18.8551 12.5298C18.7639 12.5637 18.6664 12.5775 18.5694 12.57H15.5284Z"
          fill="#F86400"
        />
        <path
          d="M15.5221 10.2715H12.4812C12.0945 10.2715 11.8398 10.0492 11.8377 9.71124C11.8356 9.37328 12.0945 9.13904 12.4727 9.13904H18.611C18.9144 9.13904 19.155 9.33307 19.1973 9.604C19.2236 9.73957 19.1993 9.88008 19.1289 9.99892C19.0586 10.1178 18.9471 10.2067 18.8156 10.2489C18.7335 10.2701 18.6484 10.2778 18.5637 10.2715H15.5221Z"
          fill="#F86400"
        />
        <path
          d="M15.5221 14.8653C14.4901 14.8653 13.4581 14.8653 12.4261 14.8653C12.3164 14.8711 12.2074 14.8438 12.1133 14.7869C12.0192 14.7301 11.9443 14.6463 11.8984 14.5464C11.8472 14.4523 11.8259 14.3449 11.8373 14.2384C11.8486 14.1319 11.8921 14.0314 11.9619 13.9502C12.0151 13.8794 12.0845 13.8223 12.1643 13.7839C12.2441 13.7455 12.332 13.7268 12.4205 13.7294C14.4901 13.7294 16.5597 13.7294 18.6293 13.7294C18.7037 13.728 18.7776 13.7413 18.8468 13.7685C18.916 13.7958 18.9791 13.8364 19.0326 13.8882C19.086 13.9399 19.1287 14.0017 19.1582 14.07C19.1877 14.1382 19.2034 14.2117 19.2044 14.286C19.2081 14.3621 19.1961 14.4381 19.1689 14.5093C19.1417 14.5804 19.1 14.6451 19.0464 14.6992C18.9929 14.7534 18.9286 14.7958 18.8578 14.8238C18.787 14.8518 18.7111 14.8647 18.635 14.8618C17.5957 14.8674 16.5579 14.8653 15.5221 14.8653Z"
          fill="#F86400"
        />
      </svg>
    ),
    value: ''
  },
  {
    name: 'Tanggal Lahir',
    placeholder: 'Tanggal Lahir',
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 11H9V13H7V11ZM21 6V20C21 21.1 20.1 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4H16V2H18V4H19C20.1 4 21 4.9 21 6ZM5 8H19V6H5V8ZM19 20V10H5V20H19ZM15 13H17V11H15V13ZM11 13H13V11H11V13Z"
          fill="#F86400"
        />
      </svg>
    ),
    value: ''
  },
  {
    name: 'Email',
    placeholder: 'Masukan email Anda',
    svg: (
      <svg
        className="fill-current text-orange-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="24"
        height="24"
      >
        <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
      </svg>
    ),
    value: ''
  },
  {
    name: 'No Telepon',
    placeholder: 'Pastikan No Telepon aktif',
    svg: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 15.92V18.92C21.0011 19.1985 20.9441 19.4741 20.8325 19.7293C20.7209 19.9845 20.5573 20.2136 20.3521 20.4018C20.1468 20.5901 19.9046 20.7335 19.6407 20.8227C19.3769 20.9119 19.0974 20.945 18.82 20.92C15.7428 20.5856 12.787 19.5341 10.19 17.85C7.77382 16.3146 5.72533 14.2661 4.18999 11.85C2.49997 9.24118 1.44824 6.27097 1.11999 3.17997C1.095 2.90344 1.12787 2.62474 1.21649 2.3616C1.30512 2.09846 1.44756 1.85666 1.63476 1.6516C1.82196 1.44653 2.0498 1.28268 2.30379 1.1705C2.55777 1.05831 2.83233 1.00024 3.10999 0.999975H6.10999C6.5953 0.995198 7.06579 1.16705 7.43376 1.48351C7.80173 1.79996 8.04207 2.23942 8.10999 2.71997C8.23662 3.68004 8.47144 4.6227 8.80999 5.52997C8.94454 5.8879 8.97366 6.27689 8.8939 6.65086C8.81415 7.02482 8.62886 7.36809 8.35999 7.63998L7.08999 8.90997C8.51355 11.4135 10.5864 13.4864 13.09 14.91L14.36 13.64C14.6319 13.3711 14.9751 13.1858 15.3491 13.1061C15.7231 13.0263 16.1121 13.0554 16.47 13.19C17.3773 13.5285 18.3199 13.7634 19.28 13.89C19.7658 13.9585 20.2094 14.2032 20.5265 14.5775C20.8437 14.9518 21.0122 15.4296 21 15.92Z"
          stroke="#F86400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: ''
  },
  {
    name: 'Password',
    placeholder: 'Masukan password Anda',
    svg: (
      <svg
        className="fill-current text-orange-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="24"
        height="24"
      >
        <path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
      </svg>
    ),
    value: ''
  },
  {
    name: 'Alamat',
    placeholder: 'Masukan alamat Anda',
    svg: (
      <svg
        className="location-svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
          stroke="#F86400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
          stroke="#F86400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: ''
  }
];

function Register() {
  const [inputForm, setInputForm] = useState(registInputList);
  const [isRequire, setIsRequire]= useState(false)

  const inputChangeHandler = (e, id) => {
    const { value } = e.target;
    const newState = [...inputForm];
    newState[id] = {
      ...newState[id],
      value
    };
    setInputForm(newState);
  };

  const buttonRegistHandler = () => {
    // if (inputValue.email === '' || inputValue.password === '') {
    //   setIsRequire(true);
    // } else {
    //   alert('anda berhasil Daftar');
    //   setIsRequire(false);
    // }
  };
  return (
    <div className="form-register max-w-md mt-20 mx-auto bg-white rounded my-8">
      <div className="text-center flex justicy-center flex-col items-center text-gray-600 py-4">
        <div className="thumb-image mt-2">
          <img src="https://www.pinclipart.com/picdir/middle/212-2129001_mobile-app-development-services-business-login-illustration-png.png" />
        </div>
        <h1 className="font-bold mb-2 mt-4">Registrasi Akun</h1>
        <p className="form-title">Masukkan data dengan lengkap dan benar</p>
      </div>

      <div className=" pt-6 pb-16">
        <div className="form-body px-8 mx-auto">
          {inputForm.map((input, index) => (
            <div key={index} className="flex flex-col ">
              <label className="text-left font-semibold mb-2" htmlFor="nama">
                {input.name}
              </label>
              <div className="form-input flex items-center bg-white rounded mb-4">
                <span className="px-3">{input.svg}</span>
                {input.name === 'Alamat' ? (
                  <textarea
                    className="w-full h-12 focus:outline-none"
                    type="text"
                    name={input.name}
                    onChange={(e) => inputChangeHandler(e, index)}
                    placeholder={input.placeholder}
                  />
                ) : (
                  <input
                    className="w-full h-12 focus:outline-none"
                    type={
                      input.name === 'Password'
                        ? 'password'
                        : input.name === 'Tanggal Lahir'
                        ? 'date'
                        : 'text'
                    }
                    name={input.name}
                    onChange={(e) => inputChangeHandler(e, index)}
                    placeholder={input.placeholder}
                  />
                )}
              </div>
            </div>
          ))}
          <div className="button-login w-full my-4">
            <button onClick={buttonRegistHandler} className="bg-orange-500 w-full hover:bg-orange-600 text-white rounded shadow-md px-6 py-2">
              Daftar
            </button>
          </div>
          <div className="text-sm">
            Sudah punya akun ?{' '}
            <span className="regist-link">
              {' '}
              <span className="regist-link">
                <NavLink to={'/login'}>Masuk</NavLink>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
