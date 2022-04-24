import React, { useState } from 'react';
import CardProduct from '../../components/Commons/Card/CardProduct.jsx';
import CardToko from '../../components/Commons/Card/CardToko/index.jsx';
import bg1 from '../../assets/img/bg1.png';
import bg2 from '../../assets/img/bg2.png';
import bg3 from '../../assets/img/bg3.png';
import peta from '../../assets/img/peta.svg';
import toko from '../../assets/img/toko.svg';
import pusat from '../../assets/img/pusat.svg';
import pemetaan from '../../assets/img/pemetaan.svg';
import pemasaran from '../../assets/img/pemasaran.svg';
import buka from '../../assets/img/buka.svg';
import './style.scss';

const contentMiniCard = [
  {
    img: buka,
    title: 'Buat Toko Digital UMKM',
    content: ''
  },
  {
    img: pemasaran,
    title: 'Pemasaran Produk Luas',
    content: ''
  },
  {
    img: pemetaan,
    title: 'Pemetaan Lokasi UMKM',
    content: ''
  },
  {
    img: pusat,
    title: 'Pusat Informasi UMKM',
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
    <div className="mt-4">
      <section
        className="section-thumb-1  pt-36 pb-20"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="container mx-auto grid grid-cols-2 gap-x-20">
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
              src={toko}
              className="aspect-ratio"
              alt="thumb1"
            />
          </div>
        </div>
      </section>
      <section
        className="section-mini-card"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="grid container mx-auto grid-cols-4 gap-20">
          {miniCard.map((item, i) => (
            <div key={i}>
              <div className="thumb-img-mini">
                <img src={item.img} alt="" />
              </div>
              <h1 className='thumb-title'>{item.title}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                risus orci nisi a tellus dignissim.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="section-thumb-2"
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition:'center'
        }}
      >
        <div className="grid grid-cols-2 container mx-auto gap-x-20">
          <div className="thumb-img">
            <img
              src={peta}
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
            <button className="button-selengkapnya bg-orange-500 hover:bg-orange-600 font-bold  text-white rounded shadow-md px-6 py-2">
              Selengkapnya
            </button>
          </div>
        </div>
      </section>
      <section className="thumb-card-toko container mx-auto">
        <div className="title-thumb ">
          <h1>Toko UMKM Kota Cimahi</h1>
          <button className="bg-orange-500 hover:bg-orange-600  font-bold text-lg text-white rounded shadow-md px-6 py-1">
            Lihat Toko UMKM
          </button>
        </div>
        <div className="grid grid-cols-4 gap-12 mt-8">
          {listToko.map((item,i) => (
            <CardToko key={i}/>
          ))}
        </div>
      </section>
      <section className="thumb-card-produk container mx-auto">
        <div className="title-thumb">
          <h1>Produk UMKM Kota Cimahi</h1>
          <button className="bg-orange-500 hover:bg-orange-600 font-bold text-lg text-white rounded shadow-md px-6 py-1">
            Lihat Produk UMKM
          </button>
        </div>
        <div className="grid grid-cols-4 gap-12 mt-8">
          {listProduk.map((item,i) => (
            <CardProduct key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
