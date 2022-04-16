import React, { useState } from 'react';
import CardProduct from '../../components/Commons/Card/CardProduct.jsx';
import CardToko from '../../components/Commons/Card/CardToko/index.jsx';
import './style.scss';

const contentMiniCard = [
  {
    img: '',
    title: '',
    content: ''
  },
  {
    img: '',
    title: '',
    content: ''
  },
  {
    img: '',
    title: '',
    content: ''
  },
  {
    img: '',
    title: '',
    content: ''
  }
];

const tokoData = [{}, {}, {}, {}];
const produkData = [{}, {}, {}, {}];

function Home() {
  const [miniCard, setMiniCard] = useState(contentMiniCard);
  const [listToko, setListToko] = useState(tokoData);
  const [listProduk, setListProduk] = useState(produkData);
  return (
    <div className="container mx-auto mt-52">
      <section className="section-thumb-1">
        <div className="grid grid-cols-2 gap-x-20">
          <div className="text-description w-full xl:w-full xl:w-3/4">
            <h1>Urna dui neque quis aliquet nibh amet.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              fringilla amet dictum adipiscing pellentesque amet amet.{' '}
            </p>
            <button className="button-selengkapnya bg-orange-500 font-bold hover:bg-orange-600  text-white rounded shadow-md px-6 py-2">
              Selengkapnya
            </button>
          </div>

          <div className="thumb-img">
            <img
              src="https://www.ukmindonesia.id/assets/uploads/cover_image/0164e424c935c8db7566fed4ef1a9861.jpg"
              className="aspect-ratio"
              alt="thumb1"
            />
          </div>
        </div>
      </section>
      <section className="section-mini-card">
        <div className="grid grid-cols-4 gap-20">
          {miniCard.map((item) => (
            <div>
              <div className="thumb-img-mini">
                <img src="" alt="" />
              </div>
              <h1>A interdum maecenas platea.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                risus orci nisi a tellus dignissim.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-thumb-2">
        <div className="grid grid-cols-2 gap-x-20">
          <div className="thumb-img">
            <img
              src="https://www.ukmindonesia.id/assets/uploads/cover_image/0164e424c935c8db7566fed4ef1a9861.jpg"
              className="aspect-ratio"
              alt="thumb1"
            />
          </div>
          <div className="text-description w-full xl:w-full">
            <h1>
              Pemetaan Sebaran UMKM <br /> Kota Cimahi
            </h1>
            <p className="xl:w-3/4 w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              fringilla amet dictum adipiscing pellentesque amet amet.{' '}
            </p>
            <button className="button-selengkapnya bg-orange-500 font-bold hover:bg-orange-600  text-white rounded shadow-md px-6 py-2">
              Selengkapnya
            </button>
          </div>
        </div>
      </section>
      <section className="thumb-card-toko">
        <div className="title-thumb">
          <h1>Toko UMKM Kota Cimahi</h1>
          <button className="bg-orange-500 font-bold hover:bg-orange-600 text-lg text-white rounded shadow-md px-6 py-2">
            Lihat Toko UMKM
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8">
          {listToko.map((item) => (
            <CardToko />
          ))}
        </div>
      </section>
      <section className="thumb-card-produk">
        <div className="title-thumb">
          <h1>Produk UMKM Kota Cimahi</h1>
          <button className="bg-orange-500 font-bold hover:bg-orange-600 text-lg text-white rounded shadow-md px-6 py-2">
            Lihat Produk UMKM
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8">
          {listProduk.map((item) => (
            <CardProduct />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
