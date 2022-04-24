import React from 'react';
import dot from '../../../../assets/img/dot.svg';
import { NavLink } from 'react-router-dom';
import './style.scss';

function CardProduct() {
  return (
    <NavLink to="/produk/1">
      <div className="card-product max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 pt-4">
          <div className="card-title text-left ">
            <p className="text-black-600 text-base text-left">
              Deskripsi UMKM. Urna magna sagittis id lut aliquet id nunc
              gravida.
            </p>
          </div>
          <div className="price my-2">
            <span className="text-orange-500 text-left">Rp. 100.000</span>
          </div>
        </div>
        <div className="flex justify-between mb-6 px-6  pt-2">
          <button className="button-kategori  text-white text-lg rounded shadow-md px-6">
            Kategori
          </button>
          <img src={dot} alt="" />
        </div>
      </div>
    </NavLink>
  );
}

export default CardProduct;
