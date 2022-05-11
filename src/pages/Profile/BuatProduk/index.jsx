import React, { useState } from 'react';
import plus from '../../../assets/img/plus.svg';
import './style.scss';
import CardProduct from '../../../components/Commons/Card/CardProduct';

const listProduk= [{}, {}, {}, {}, {}, {}, {}, {}, {}];
function BuatProduk() {
  return (
    <div className="site-buka-toko">
      <div className="card-title flex justify-between p-4">
        <h1>Produk UMKM</h1>
        <div className="button-add-forum">
          <button className="bg-orange-500 flex items-center w-full hover:bg-orange-600  text-white rounded shadow-md font-bold text-sm px-3 py-2">
            <img src={plus} className="mr-1" alt="" /> <span>Tambah Produk</span>
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-6">
          {listProduk.map((toko, index) => (
            <CardProduct key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuatProduk;
