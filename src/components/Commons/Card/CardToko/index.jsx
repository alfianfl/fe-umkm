import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import tokoDummy from '../../../../assets/img/tokoDummy.png';
import locationIcon from '../../../../assets/img/Iconly.svg';
import swal from 'sweetalert';
import './style.scss';

function CardToko() {
  const { pathname } = useLocation();
  const deleteToko = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        swal('Poof! Your imaginary file has been deleted!', {
          icon: 'success'
        });
      } else {
        swal('Your imaginary file is safe!');
      }
    });
  };
  return (
    <div className="card-toko max-w-sm rounded overflow-hidden shadow-lg">
      <NavLink to={`/toko/1`}>
        <div className="thumb-img">
          <img
            className="w-full"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-4 pt-6">
          <div className="title text-left flex ">
            <div className="thumb-img mr-6">
              <img src={tokoDummy} alt="" />
            </div>
            <div>
              {' '}
              <h1>The Coldest Sunset</h1>{' '}
              <span className="lokasi">
                {' '}
                <img src={locationIcon} alt="" /> <span>Lokasi Kecamatan</span>{' '}
              </span>
            </div>
          </div>
          <p className="text-black-600 text-base text-left py-4">
            Deskripsi UMKM. Urna magna sagittis id lut aliquet id nunc gravida.
          </p>
        </div>
      </NavLink>
      {pathname.includes('/profile') ? (
        <div className="grid grid-cols-2 gap-4 mb-6 px-6">
          <button className="bg-blue-900 button-toko font-bold  hover:bg-blue-800  text-white rounded shadow-md px-6 py-2">
            Edit
          </button>
          <button
            onClick={deleteToko}
            className="bg-red-600 button-toko font-bold  hover:bg-red-500  text-white rounded shadow-md px-6 py-1"
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="flex justify-end mb-6 px-6">
          <button className="bg-orange-500 button-toko font-bold  hover:bg-orange-600 text-lg  text-white rounded shadow-md px-6 py-1">
            Lihat Toko
          </button>
        </div>
      )}
    </div>
  );
}

export default CardToko;
