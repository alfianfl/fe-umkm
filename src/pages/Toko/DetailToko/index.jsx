import React, { useState, useEffect } from 'react';
import CardProduct from '../../../components/Commons/Card/CardProduct';
import tokoDummy from '../../../assets/img/tokoDummy.png';
import locationIcon from '../../../assets/img/Iconly.svg';
import kategoriIcon from '../../../assets/img/kategori.svg';
import link from '../../../assets/img/link.svg';
import exp1 from '../../../assets/img/exp1.png';
import ig from '../../../assets/img/instagram.jpg';
import tp from '../../../assets/img/tokopedia.png';
import sh from '../../../assets/img/shopee.png';
import em from '../../../assets/img/email.jpg';
import wa from '../../../assets/img/wa.png';
import tk from '../../../assets/img/tiktok.png';
import grab from '../../../assets/img/grab.png';
import gojek from '../../../assets/img/gojek.png';
import { SwiperSlide } from 'swiper/react';
import './style.scss';
import {
  SwiperDefault,
  SwiperAuto
} from '../../../components/Commons/SwiperContainer/index.jsx';
import { getTokoByIdAPI } from '../../../models/TokoAPI';
import { useParams } from 'react-router-dom';
import { getProductByTokoAPI } from '../../../models/ProductAPI';
import { loaderCard } from '../../../helpers';

const voucherData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

const produkData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

function DetailToko() {
  const [listProduk, setListProduk] = useState(produkData);
  const [toko, setToko] = useState({});
  const [listVoucher, setListVoucher] = useState(voucherData);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getLink = (name) => {
    return toko.sosial_media
      ?.filter((item) => item.platform_sosmed === name)
      .map((item) => item.link_sosmed).length === 0
      ? '#'
      : toko.sosial_media
          ?.filter((item) => item.platform_sosmed === name)
          .map((item) => item.link_sosmed);
  };

  useEffect(() => {
    setLoading(true);
    getProductByTokoAPI(id)
      .then((res) => {
        setListProduk(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    getTokoByIdAPI(id)
      .then((res) => {
        setToko(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, []);
  return (
    <div className="container mx-auto mt-40 lg:mt-46">
      <section className="section-thumb-toko grid grid-cols-2 gap-8 mb-16">
        <div className="div1">
          <div className="card-title text-left flex ">
            <div className="thumb-img5 mr-6">
              <img src={tokoDummy} alt="" />
            </div>
            <div>
              <h1 className="title font-bold">{toko.nama_toko}</h1>
              <span className="lokasi items-center">
                <img src={kategoriIcon} alt="" />{' '}
                <span className="ml-1">
                  Kategori Toko : {toko.sektor_usaha}
                </span>{' '}
              </span>
            </div>
          </div>
          <div className="description-toko my-6">
            <p className="text-justify">{toko.deskripsi_toko}</p>
          </div>
          <div className="lokasi">
            <img src={locationIcon} alt="" />{' '}
            <span className="ml-1">
              {toko.alamat}, {toko.kode_pos}, {toko.kecamatan}
            </span>{' '}
          </div>
        </div>
        <div className="div2 grid grid-cols-2 ">
          <span>
            {' '}
            <span className="font-bold flex items-center">
              <img src={wa} className="mr-2" alt="" /> No.Telepon :{' '}
              {toko.telp_toko}
            </span>
          </span>
          <a className="link-sosmed" href={getLink('Shopee')}>
            <span className="font-bold flex items-center">
              {' '}
              <img src={sh} className="mr-2" alt="" /> Shopee :{' '}
              {toko.sosial_media
                ?.filter((item) => item.platform_sosmed === 'Shopee')
                .map((item) => '@' + item.nama_sosmed).length === 0
                ? '-'
                : toko.sosial_media
                    ?.filter((item) => item.platform_sosmed === 'Shopee')
                    .map((item) => '@' + item.nama_sosmed)}
            </span>{' '}
          </a>

          <span>
            <span className="font-bold flex items-center  mt-4">
              <img src={em} className="mr-2" alt="" />
              Email : {toko.email_toko}
            </span>
          </span>
          <a className="link-sosmed" href={getLink('Tokopedia')}>
            <span className="font-bold flex items-center  mt-4">
              <img src={tp} className="mr-2" alt="" />
              Tokopedia :{' '}
              {toko.sosial_media
                ?.filter((item) => item.platform_sosmed === 'Tokopedia')
                .map((item) => '@' + item.nama_sosmed).length === 0
                ? '-'
                : toko.sosial_media
                    ?.filter((item) => item.platform_sosmed === 'Tokopedia')
                    .map((item) => '@' + item.nama_sosmed)}
            </span>{' '}
          </a>

          <a className="link-sosmed" href={getLink('Instagram')}>
            <span className="font-bold flex items-center  mt-4">
              <img src={ig} className="mr-2" alt="" />
              Instagram :{' '}
              {toko.sosial_media
                ?.filter((item) => item.platform_sosmed === 'Instagram')
                .map((item) => '@' + item.nama_sosmed).length === 0
                ? '-'
                : toko.sosial_media
                    ?.filter((item) => item.platform_sosmed === 'Instagram')
                    .map((item) => '@' + item.nama_sosmed)}
            </span>{' '}
          </a>
          <a className="link-sosmed" href={getLink('Grab')}>
            <span className="font-bold flex items-center  mt-4">
              <img src={grab} className="mr-2" alt="" />
              Grab :{' '}
              {toko.sosial_media
                ?.filter((item) => item.platform_sosmed === 'Grab')
                .map((item) => '@' + item.nama_sosmed).length === 0
                ? '-'
                : toko.sosial_media
                    ?.filter((item) => item.platform_sosmed === 'Grab')
                    .map((item) => '@' + item.nama_sosmed)}
            </span>{' '}
          </a>

          <a className="link-sosmed" href={getLink('Tiktok')}>
            <span className="font-bold flex items-center  mt-4">
              <img src={tk} className="mr-2" alt="" />
              Tiktok :{' '}
              {toko.sosial_media
                ?.filter((item) => item.platform_sosmed === 'Tiktok')
                .map((item) => '@' + item.nama_sosmed).length === 0
                ? '-'
                : toko.sosial_media
                    ?.filter((item) => item.platform_sosmed === 'Tiktok')
                    .map((item) => '@' + item.nama_sosmed)}
            </span>{' '}
          </a>
          <a className="link-sosmed" href={getLink('Gokej')}>
            <span className="font-bold flex items-center  mt-4">
              <img src={gojek} className="mr-2" alt="" />
              Gojek :{' '}
              {toko.sosial_media
                ?.filter((item) => item.platform_sosmed === 'Gojek')
                .map((item) => '@' + item.nama_sosmed).length === 0
                ? '-'
                : toko.sosial_media
                    ?.filter((item) => item.platform_sosmed === 'Gokek')
                    .map((item) => '@' + item.nama_sosmed)}
            </span>{' '}
          </a>
        </div>
      </section>
      <section className="section-carousel">
        <h1>Galeri Toko</h1>
        <SwiperDefault>
          {toko.galeri?.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="thumb-img">
                <img className="aspect-ratio" src={item.url} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </SwiperDefault>
      </section>
      <section className="section-voucher">
        <h1>Voucher Toko</h1>
        <SwiperAuto>
          {toko?.promos?.map((item, i) => (
            <SwiperSlide>
              <div key={i} className="voucher-detail text-left">
                <p className="voucher-title">{item.nama_promo}</p>
                <div className="flex justify-between items-center">
                  <p className="platform font-bold">Plaform : {item.platform}</p>
                  <div className="thumb-img">
                    <img src={link} alt="" />
                  </div>
                </div>
                <p className="expired font-bold">Belaku sampai : {item.masa_berlaku}</p>
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
        {loading ? (
          <div className="flex justify-center">{loaderCard()}</div>
        ) : listProduk.length === 0 ? (
          <div className="flex justify-center">
            <div className="w-1/4">
              <div>
                <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_203587-28.jpg?w=2000" />
                <h1 className="text-center">
                  Oppss...Toko belum memiliki produk
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-8">
            {listProduk.map((item, index) => (
              <CardProduct item={item} key={index} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default DetailToko;
