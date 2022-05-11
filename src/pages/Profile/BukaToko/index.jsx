import React, { useState } from 'react';
import CardToko from '../../../components/Commons/Card/CardToko';
import plus from '../../../assets/img/plus.svg';
import './style.scss';

const listToko = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
function BukaToko() {
  return (
    <div className="site-buka-toko">
      <div className="card-title flex justify-between p-4">
        <h1>Buka Usaha UMKM</h1>
        <div className="button-add-forum">
          <button className="bg-orange-500 flex items-center w-full hover:bg-orange-600  text-white rounded shadow-md font-bold text-sm px-3 py-2">
            <img src={plus} className="mr-1" alt="" /> <span>Buat Toko</span>
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-6">
          {listToko.map((toko, index) => (
            <CardToko key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BukaToko;
