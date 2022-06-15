import React, { useState, useEffect } from 'react';
import tokoDummy from '../../../assets/img/tokoDummy.png';
import locationIcon from '../../../assets/img/Iconly.svg';
import img1 from '../../../assets/img/1.png';
import img2 from '../../../assets/img/2.png';
import img3 from '../../../assets/img/3.png';
import img4 from '../../../assets/img/4.png';
import { loaderCard } from '../../../helpers';
import { NavLink, useParams } from 'react-router-dom';
import './style.scss';
import { getDetailProductAPI } from '../../../models/ProductAPI';
import { getTokoByIdAPI } from '../../../models/TokoAPI';

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
  const { id } = useParams();
  const [produk, setProduk] = useState({})
  const [toko, setToko] = useState({});
  const [activeImg, setActiveImg] = useState('');


  useEffect(() => {
    getDetailProductAPI(id)
    .then(res=>{
      setProduk(res.data.data)
      setActiveImg(res.data.data.foto_produk[0].url)
      getTokoByIdAPI(res.data.data.id_toko)
      .then(res=>{
        setToko(res.data.data)
      }).catch(err=>{
        console.log(err);
      })
    }).catch(err=>{
      console.log(err);
    })
  }, []);



  const handleImageActive = (src) => {
    setActiveImg(src);
  };
  return (
    <div className="site-detail-produk container mx-auto mt-40 lg:mt-46">
      <div className="grid grid-cols-6 gap-10">
        <section className="section-img col-span-2 flex flex-col ">
          <div className="thumb-img-detail w-full ">
            <img src={activeImg} alt="" className="w-full" />
          </div>
          <div className="thumb-mini-img">
            {produk?.foto_produk?.map((item, i) => (
              <img
                className="m-1"
                key={i}
                src={item.url}
                onClick={() => handleImageActive(item.url)}
                alt=""
              />
            ))}
          </div>
        </section>
        <section className="col-span-4 ml-20 section-description">
          <h1 className="title">{produk.nama_produk}</h1>
          <p className="price">Rp {produk.harga_produk}</p>

          <div className="detail-produk">
            <h2 className="font-bold">Detail Produk</h2>

            <div className="kategori">
              <p>
                Kategori: <strong>{produk.kategori_produk}</strong>{' '}
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
                  <h1 className="title font-bold">{toko?.nama_toko}</h1>
                  <div className="flex items-center">
                    <img src={locationIcon} alt="" />{' '}
                    <span className="text-xs ml-2">
                      {toko?.alamat} ,  {toko?.kecamatan},  {toko?.kode_pos}
                    </span>{' '}
                  </div>
                </div>
              </div>
              <div className="button-toko ml-20">
                <NavLink to={`/toko/${toko?._id}`}>
                  <button className="bg-orange-500 button-toko font-bold  hover:bg-orange-600 text-lg  text-white rounded shadow-md px-6 py-1">
                    Lihat Toko
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailProduk;
