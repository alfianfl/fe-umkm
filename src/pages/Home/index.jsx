import React, { useState, useEffect } from 'react';
import CardProduct from '../../components/Commons/Card/CardProduct';
import CardToko from '../../components/Commons/Card/CardToko';
import bg1 from '../../assets/img/bg1.png';
import bg2 from '../../assets/img/bg2.png';
import bg3 from '../../assets/img/bg3.png';
import peta from '../../assets/img/peta.svg';
import toko from '../../assets/img/toko.svg';
import pusat from '../../assets/img/pusat.svg';
import pemetaan from '../../assets/img/pemetaan.svg';
import pemasaran from '../../assets/img/pemasaran.svg';
import buka from '../../assets/img/buka.svg';
import { SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToko } from '../../redux/actions/tokoAction';
import { fetchProduct } from '../../redux/actions/productAction';
import { SwiperProduct } from '../../components/Commons/SwiperContainer';
import './style.scss';

const contentMiniCard = [
  {
    img: buka,
    title: 'Buat Toko Digital UMKM',
    content:
      'Toko Digital adalah solusi untuk membuat toko online profesional Anda seperti halnya merek-merek terkenal, dengan harga terjangkau.'
  },
  {
    img: pemasaran,
    title: 'Pemasaran Produk Luas',
    content:
      'Strategi pemasaran produk adalah usaha dalam memasarkan sebuah produk, barang, atau jasa dengan cara tertentu sehingga penjualan akan meningkat.'
  },
  {
    img: pemetaan,
    title: 'Pemetaan Lokasi UMKM',
    content:
      'Pemetaan persebaran lokasi UMKM yang divisualisasikan kedalam map GIS'
  },
  {
    img: pusat,
    title: 'Pusat Informasi UMKM',
    content:
      'Menampilkan detail UMKM terkait baik produk, toko, promo, dan tempat marketplace berjualan'
  }
];

function Home() {
  const [miniCard, setMiniCard] = useState(contentMiniCard);
  const listToko = useSelector((state) => state.listToko.toko);
  const listProduk = useSelector((state) => state.listProduk.product);
  const isLoading = useSelector((state) => state.listProduk.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchToko(`?dataSize=4`));
  }, [dispatch]);
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
            <h1>Platform Digital Pemetaan UMKM Kota Cimahi.</h1>
            <p>
            Pusat platform digital untuk menjadi peluang dalam membantu akses pengembangan dan pemasaran bagi usaha mikro, kecil dan menengah di Kota Cimahi.{' '}
            </p>
            <button className="button-selengkapnya bg-orange-500 font-bold hover:bg-orange-600  text-white rounded shadow-md px-6 py-2">
              Selengkapnya
            </button>
          </div>

          <div className="thumb-img">
            <img src={toko} className="aspect-ratio" alt="thumb1" />
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
              <h1 className="thumb-title">{item.title}</h1>
              <p>{item.content}</p>
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
          backgroundPosition: 'center'
        }}
      >
        <div className="grid grid-cols-2 container mx-auto gap-x-20">
          <div className="thumb-img">
            <img src={peta} className="aspect-ratio" alt="thumb1" />
          </div>
          <div className="text-description w-full xl:w-full">
            <h1>
              Pemetaan Sebaran UMKM <br /> Kota Cimahi
            </h1>
            <p className="xl:w-3/4 w-full">
              Pemetaan persebaran lokasi UMKM yang divisualisasikan kedalam map
              GIS, Menampilkan detail toko dan rute perjalan kepada toko terkait{' '}
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
          <button className="button-more bg-orange-500 hover:bg-orange-600  font-bold text-lg text-white rounded shadow-md px-6 py-1">
            Lihat Toko UMKM
          </button>
        </div>
        <SwiperProduct>
          {listToko.map((item, i) => (
            <SwiperSlide>
              <CardToko item={item} key={i} />
            </SwiperSlide>
          ))}
        </SwiperProduct>
      </section>
      <section className="thumb-card-produk container mx-auto">
        <div className="title-thumb">
          <h1>Produk UMKM Kota Cimahi</h1>
          <button className="button-more bg-orange-500 hover:bg-orange-600 font-bold text-lg text-white rounded shadow-md px-6 py-1">
            Lihat Produk UMKM
          </button>
        </div>
        <SwiperProduct>
          {listProduk.map((item, i) => (
            <SwiperSlide>
              <CardProduct item={item} key={i} />
            </SwiperSlide>
          ))}
        </SwiperProduct>
      </section>
    </div>
  );
}

export default Home;
