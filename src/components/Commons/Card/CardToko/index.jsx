import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import tokoDummy from '../../../../assets/img/tokoDummy.png';
import locationIcon from '../../../../assets/img/Iconly.svg';
import swal from 'sweetalert';
import { trimString } from '../../../../helpers';
import './style.scss';
import dot from '../../../../assets/img/dot.svg';
import { deleteTokoAPI } from '../../../../models/TokoAPI';

function CardToko({ item, deleteTokoHandler }) {
  const { pathname } = useLocation();
  const deleteToko = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      deleteTokoAPI(item._id)
        .then(res => {  
          deleteTokoHandler()
        })
        .catch(err=>{
          console.log(err);
        })
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
      <NavLink to={`/toko/${item._id}`}>
        <div className="thumb-img">
          <img
            className="image-toko"
            src={item.galeri.length !== 0 ? item.galeri[0].url : tokoDummy}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-4 pt-6">
          <div className="title text-left flex items-start justify-between">
            <div className='flex items-center'>
              <div className="thumb-img mr-6">
                <img src={item.logo ? item.logo : tokoDummy} alt="" />
              </div>
              <div>
                {' '}
                <h1>{item.nama_toko}</h1>{' '}
                <span className="lokasi">
                  {' '}
                  <img className='img-lokasi' src={locationIcon} alt="" /> <span>{item.kecamatan}</span>{' '}
                </span>
              </div>
            </div>
            <img className='dot' src={dot} alt="" />
          </div>
          <p className="text-black-600 isi text-justify py-4" style={{width:'100%'}}>
            {trimString( item.deskripsi_toko || '', 50)}
          </p>
        </div>
      </NavLink>
      {pathname.includes('/profile') ? (
        <div className="grid grid-cols-2 gap-4 mb-6 px-6">
          <div className="w-full">
            <NavLink to={`/profile/buka-toko/edit-toko/${item._id}`}>
              <button className="bg-blue-900 button-toko w-full font-bold  hover:bg-blue-800  text-white rounded shadow-md px-6 py-2">
                Edit
              </button>
            </NavLink>
          </div>
          <button
            onClick={deleteToko}
            className="bg-red-600 button-toko font-bold  hover:bg-red-500  text-white rounded shadow-md px-6 py-1"
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="flex justify-end mb-6 px-6">
          <NavLink to="/toko/1">
            <button className="bg-orange-500 button-toko font-bold  hover:bg-orange-600 text-lg  text-white rounded shadow-md px-6 py-1">
              Lihat Toko
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default CardToko;
