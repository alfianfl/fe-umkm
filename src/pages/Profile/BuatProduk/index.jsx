import React, { useState, useEffect } from 'react';
import plus from '../../../assets/img/plus.svg';
import { NavLink } from 'react-router-dom';
import './style.scss';
import CardProduct from '../../../components/Commons/Card/CardProduct';
import { useDispatch, useSelector } from 'react-redux';
import { loaderCard } from '../../../helpers';
import { fetchProductByUser } from '../../../redux/actions/productAction';

function BuatProduk() {
  const listProduk = useSelector((state) => state.listProduk.product);
  const isLoading = useSelector((state) => state.listProduk.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductByUser());
  }, [dispatch]);

  const deleteProdukHandler = () => {
    dispatch(fetchProductByUser());
  };
  return (
    <div className="site-buka-toko">
      <div className="card-title flex justify-between p-4">
        <h1>Produk UMKM</h1>
        <div className="button-add-forum">
          <NavLink to="/profile/buka-produk/tambah-produk">
            <button className="bg-orange-500 flex items-center w-full hover:bg-orange-600  text-white rounded shadow-md font-bold text-sm px-3 py-2">
              <img src={plus} className="mr-1" alt="" />{' '}
              <span>Tambah Produk</span>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="p-4">
        {isLoading ? (
          <div className="flex justify-center">{loaderCard()}</div>
        ) : listProduk.length === 0 ? (
          <div className="flex justify-center ">
            <div className="w-1/2">
              <div>
                <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_203587-28.jpg?w=2000" />
                <h1 className="text-center font-bold">
                  Oppss...Kamu Belum Memiliki Produk
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {listProduk.map((item, index) => (
              <CardProduct
                deleteProdukHandler={() => deleteProdukHandler()}
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

export default BuatProduk;
