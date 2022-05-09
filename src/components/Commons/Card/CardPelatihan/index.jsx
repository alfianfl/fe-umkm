import React from 'react';
import { NavLink } from 'react-router-dom';
import { trimString } from '../../../../helpers';
import './style.scss';

function CardPelatihan(props) {
  return (
    <NavLink to={`/pelatihan/1`}>
      <div className="card-pelatihan max-w-sm rounded overflow-hidden shadow-lg">
        <div className="thumb-img">
          <img
            className="w-full"
            src={props.img}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-4 pt-6">
          <div className="card-title ">
            <h1 style={{ color: '#033B55' }} className="font-bold">
              Judul Pelatihan Wawasan UMKM{' '}
            </h1>
          </div>
          <p className="text-black-600 text-base text-justify py-4">
            {trimString(
              'Deskripsi Pelatihan UMKM. Urna magnatida sagittis id lut aliquet id nunc gravidasialasu. Tambahan Deskripsi UMKM. Urna magnaca sagittis id lut aliquet id nunc gravidasialas...',
              300
            )}
          </p>
        </div>
        <div className="flex  justify-end mb-6 px-6">
          <button className="bg-orange-500 font-bold  hover:bg-orange-600 text-white rounded shadow-md px-6 py-1">
            Selengkapnya
          </button>
        </div>
      </div>
    </NavLink>
  );
}

export default CardPelatihan;
