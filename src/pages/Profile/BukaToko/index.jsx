import React, { useState, useEffect } from 'react';
import CardToko from '../../../components/Commons/Card/CardToko';
import plus from '../../../assets/img/plus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTokoByUser } from '../../../redux/actions/tokoAction';
import { loaderCard } from '../../../helpers';
import { NavLink } from 'react-router-dom';
import './style.scss';

function BukaToko() {
  const listToko = useSelector((state) => state.listToko.toko);
  const isLoading = useSelector((state) => state.listToko.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTokoByUser());
  }, [dispatch]);

  const deleteTokoHandler = () => {
    dispatch(fetchTokoByUser());
  };
  return (
    <div className="site-buka-toko">
      <div className="card-title flex justify-between p-4">
        <h1>Buka Usaha UMKM</h1>
        <div className="button-add-forum">
          <NavLink to="/profile/buka-toko/tambah-toko">
            <button className="bg-orange-500 flex items-center w-full hover:bg-orange-600  text-white rounded shadow-md font-bold text-sm px-3 py-2">
              <img src={plus} className="mr-1" alt="" /> <span>Buat Toko</span>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="p-4">
        {isLoading ? (
          <div className="flex justify-center">{loaderCard()}</div>
        ) : listToko.length === 0 ? (
          <div className="flex justify-center ">
            <div className="w-1/2">
              <div>
                <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_203587-28.jpg?w=2000" />
                <h1 className="text-center font-bold">Oppss...Kamu Belum Memiliki Toko</h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {listToko.map((item, index) => (
              <CardToko
                deleteTokoHandler={() => deleteTokoHandler()}
                item={item}
                key={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BukaToko;
