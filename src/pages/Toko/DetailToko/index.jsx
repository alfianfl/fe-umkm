import React, { useState } from 'react';
import CardProduct from '../../../components/Commons/Card/CardProduct.jsx';
import tokoDummy from '../../../assets/img/tokoDummy.png';
import locationIcon from '../../../assets/img/Iconly.svg';
import link from '../../../assets/img/link.svg';
import exp1 from '../../../assets/img/exp1.png';
import { SwiperSlide } from 'swiper/react';
import './style.scss';
import {
  SwiperDefault,
  SwiperAuto
} from '../../../components/Commons/SwiperContainer/index.jsx';

const voucherData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

const produkData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

function DetailToko() {
  const [listProduk, setListProduk] = useState(produkData);
  const [listVoucher, setListVoucher] = useState(voucherData);
  return (
    <div className="container mx-auto mt-40 lg:mt-46">
      <section className="section-thumb-toko grid grid-cols-2 gap-8 mb-16">
        <div className="div1">
          <div className="card-title text-left flex ">
            <div className="thumb-img mr-6">
              <img src={tokoDummy} alt="" />
            </div>
            <div>
              <h1 className="title font-bold">Nama Toko UMKM</h1>
              <span className="lokasi">
                <img src={locationIcon} alt="" />{' '}
                <span>Kategori Jenis Usaha Toko</span>{' '}
              </span>
            </div>
          </div>
          <div className="description-toko my-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
              velit vulputate vitae, magnis eu tincidunt volutpat cursus magna.
              Leo ultricies sit nunc facilisi leo id nulla leo. Risus pharetra
              in at orci nisi eget. Nibh blandit.Risus pharetra in at orci nisi
              eget. Nibh blandit. lolaist
            </p>
          </div>
          <div className="lokasi">
            <img src={locationIcon} alt="" />{' '}
            <span>
              Perum Indogreen Blok E5 No 5 RT 5 RW 4, Gunung Sari, Citeureup,
              Kab.Bogor, Jawa Barat, 16810
            </span>{' '}
          </div>
        </div>
        <div className="div2 grid grid-cols-2 ">
          <span>No.Telepon: 0891234567</span>
          <span>Shopee: Toko Jilbab Citeureup</span>

          <span>Email: alvian.wadad@gmail.com</span>
          <span>Tokopedia: Jilbab2</span>

          <span>Instagram: @TokoJilbabCiteureup</span>
          <span>Grab: Toko Jilbab Citeureup</span>

          <span>Tiktok: @TokoJilbabCiteureup</span>
          <span>Gojek: Toko Jilbab Citeureup</span>
        </div>
      </section>
      <section className="section-carousel">
        <SwiperDefault>
          <SwiperSlide>
            <div className="thumb-img">
              <img className="aspect-ratio" src={exp1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb-img">
              <img className="aspect-ratio" src={exp1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb-img">
              <img className="aspect-ratio" src={exp1} alt="" />
            </div>
          </SwiperSlide>
        </SwiperDefault>
      </section>
      <section className="section-voucher">
        <h1>Voucher Toko</h1>
        <SwiperAuto>
          {listVoucher.map((item, i) => (
            <SwiperSlide>
              <div key={i} className="voucher-detail text-left">
                <p className="voucher-title">Beli 1 Gratis 1</p>
                <div className="flex justify-between items-center">
                  <p className="platform">Plaform : Tokopedia</p>
                  <div className="thumb-img">
                    <img src={link} alt="" />
                  </div>
                </div>
                <p className="expired">Belaku sampai : 31 April 2022</p>
              </div>
            </SwiperSlide>
          ))}
        </SwiperAuto>
      </section>
      <section className="section-product">
        <div className="title text-left mb-6">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66683 33.3332H10.0002V16.6666C10.0002 16.2246 10.1758 15.8006 10.4883 15.4881C10.8009 15.1755 11.2248 14.9999 11.6668 14.9999H31.6668V11.6666C31.6668 11.2246 31.4912 10.8006 31.1787 10.4881C30.8661 10.1755 30.4422 9.99992 30.0002 9.99992H24.9152C24.4952 6.25992 21.3502 3.33325 17.5002 3.33325C13.6502 3.33325 10.5052 6.25992 10.0852 9.99992H5.00016C4.55814 9.99992 4.13421 10.1755 3.82165 10.4881C3.50909 10.8006 3.3335 11.2246 3.3335 11.6666V29.9999C3.3335 30.884 3.68469 31.7318 4.30981 32.3569C4.93493 32.9821 5.78277 33.3332 6.66683 33.3332ZM17.5002 6.66658C19.5118 6.66658 21.1968 8.09992 21.5835 9.99992H13.4168C13.8035 8.09992 15.4885 6.66658 17.5002 6.66658Z"
              fill="#F86400"
            />
            <path
              d="M35.0002 18.3333H15.0002C14.5581 18.3333 14.1342 18.5088 13.8217 18.8214C13.5091 19.134 13.3335 19.5579 13.3335 19.9999V33.3333C13.3335 34.2173 13.6847 35.0652 14.3098 35.6903C14.9349 36.3154 15.7828 36.6666 16.6668 36.6666H33.3335C34.2176 36.6666 35.0654 36.3154 35.6905 35.6903C36.3156 35.0652 36.6668 34.2173 36.6668 33.3333V19.9999C36.6668 19.5579 36.4912 19.134 36.1787 18.8214C35.8661 18.5088 35.4422 18.3333 35.0002 18.3333ZM25.0002 29.9999C20.4052 29.9999 16.6668 26.2616 16.6668 21.6666H20.0002C20.0002 24.4233 22.2435 26.6666 25.0002 26.6666C27.7568 26.6666 30.0002 24.4233 30.0002 21.6666H33.3335C33.3335 26.2616 29.5952 29.9999 25.0002 29.9999Z"
              fill="#F86400"
            />
          </svg>

          <h1 className="ml-4 font-bold">Produk UMKM</h1>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {listProduk.map((produk, index) => (
            <CardProduct key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default DetailToko;
