import React from 'react';
import dot from '../../../../assets/img/dot.svg';
import { NavLink, useLocation } from 'react-router-dom';
import './style.scss';
import swal from 'sweetalert';

function CardProduct() {
  const { pathname } = useLocation();
  const deleteProduk = () => {
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
    <div className="card-product max-w-sm rounded overflow-hidden shadow-lg">
      <NavLink to="/produk/1">
        <img
          className="w-full"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 pt-4">
          <div className="title text-left ">
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
      </NavLink>
      {pathname.includes('/profile') ? (
        <div className="grid grid-cols-2 gap-4 mb-6 px-6">
          <button className="bg-blue-900 button-toko font-bold text-sm hover:bg-blue-800  text-white rounded shadow-md px-6 py-2">
            Edit
          </button>
          <button
            onClick={deleteProduk}
            className="bg-red-600 button-toko font-bold text-sm hover:bg-red-500  text-white rounded shadow-md px-6 py-1"
          >
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default CardProduct;
