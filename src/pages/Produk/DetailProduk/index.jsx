import React, { useState } from 'react';
import tokoDummy from '../../../assets/img/tokoDummy.png';
import locationIcon from '../../../assets/img/Iconly.svg';
import img1 from '../../../assets/img/1.png';
import img2 from '../../../assets/img/2.png';
import img3 from '../../../assets/img/3.png';
import img4 from '../../../assets/img/4.png';

import './style.scss';

const miniImg = [
  {
    src: img1
  },
  {
    src: img2
  },
  {
    src: img3
  },
  {
    src: img4
  }
];
function DetailProduk() {
  const [activeImg, setActiveImg] = useState(miniImg[0].src);

  const handleImageActive = (src) => {
    setActiveImg(src);
  };
  return (
    <div className="site-detail-produk container mx-auto mt-40 lg:mt-46">
      <div className="grid grid-cols-4 gap-10">
        <section className="section-img">
          <div className="thumb-img-detail">
            <img src={activeImg} alt="" />
          </div>
          <div className="thumb-mini-img">
            {miniImg.map((item, i) => (
              <img key={i} src={item.src} onClick={() => handleImageActive(item.src)} alt="" />
            ))}
          </div>
        </section>
        <section className="col-span-3 section-description">
          <h1 className="title">Nama Produk UMKM</h1>
          <p className="price">Rp 70.000</p>

          <div className="detail-produk">
            <h2 className="font-bold">Detail Produk</h2>

            <div className="kategori">
              <p>
                Kategori: <strong>Makanan</strong>{' '}
              </p>
              <p>
                No Telepon: <strong>081234532</strong>{' '}
              </p>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                velit vulputate vitae, magnis eu tincidunt volutpat cursus
                magna. Leo ultricies sit nunc facilisi leo id nulla leo. Risus
                pharetra in at orci nisi eget. Nibh blandit.Risus pharetra in at
                orci nisi eget. Nibh blandit. lolaist Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Tortor velit vulputate vitae,
                magnis eu tincidunt volutpat cursus magna. Leo ultricies sit
                nunc facilisi leo id nulla leo. Risus pharetra in at orci nisi
                eget. Nibh blandit.Risus pharetra in.
              </p>
            </div>
          </div>

          <div className="toko">
            <div className="card-title text-left flex items-center">
              <div className="flex items-center">
                <div className="thumb-img mr-4">
                  <img src={tokoDummy} alt="" />
                </div>
                <div className="lokasi">
                  <h1 className="title font-bold">Nama Toko UMKM</h1>
                  <div className="flex items-center">
                    <img src={locationIcon} alt="" />{' '}
                    <span className="text-xs ml-2">
                      Kategori Jenis Usaha Toko
                    </span>{' '}
                  </div>
                </div>
              </div>
              <div className="button-toko ml-20">
                <button className="bg-orange-500 button-toko font-bold  hover:bg-orange-600 text-lg  text-white rounded shadow-md px-6 py-1">
                  Lihat Toko
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailProduk;
