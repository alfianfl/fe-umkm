import React from 'react';
import dot from '../../../../assets/img/dot.svg';
import { NavLink, useLocation } from 'react-router-dom';
import './style.scss';
import swal from 'sweetalert';
import { deleteProductAPI } from '../../../../models/ProductAPI';

function CardProduct({item, deleteProdukHandler}) {
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
        deleteProductAPI(item._id)
          .then(res=>{
            deleteProdukHandler()
          })
          .catch(err=>{
            console.log(err);
          })
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
      <NavLink to={`/produk/${item._id}`}>
        <div className="thumb-img">
          <img
            className="image-produk"
            src={item?.foto_produk === undefined ? '': item?.foto_produk[0]?.url}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-6 pt-4">
          <div className="title text-left ">
            <p className="text-black-600 text-base font-bold text-left">
              {item.nama_produk}
            </p>
          </div>
          <div className="price my-2">
            <span className="text-orange-500 text-left">Rp. {item.harga_produk}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mb-6 px-6  pt-2">
          <button className="button-kategori  text-white text-lg rounded shadow-md px-6">
            {item.kategori_produk}
          </button>
          <img className='dot' src={dot} alt="" />
        </div>
      </NavLink>
      {pathname.includes('/profile') ? (
        <div className="grid grid-cols-2 gap-4 mb-6 px-6">
          <div className="w-full">
            <NavLink to={`/profile/buka-produk/tambah-produk/${item._id}`}>
              <button className="bg-blue-900 button-toko w-full font-bold  hover:bg-blue-800  text-white rounded shadow-md px-6 py-2">
                Edit
              </button>
            </NavLink>
          </div>
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
