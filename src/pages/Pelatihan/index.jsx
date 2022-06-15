import React, { useState, useEffect } from 'react';
import CardPelatihan from '../../components/Commons/Card/CardPelatihan';
import dummy1 from '../../assets/img/Mask group.png';
import dummy2 from '../../assets/img/Mask group1.png';
import dummy3 from '../../assets/img/Mask group2.png';
import dummy4 from '../../assets/img/Mask group3.png';
import './style.scss';
import { getPelatihanAPI } from '../../models/PelatihanAPI';

const listPelatihan = [
  { img: dummy1 },
  { img: dummy2 },
  { img: dummy3 },
  { img: dummy4 },
  { img: dummy4 },
  { img: dummy3 },
  { img: dummy2 },
  { img: dummy1 }
];
function Pelatihan() {
  const [pelatihan, setPelatihan] = useState([]);

  useEffect(() => {
    getPelatihanAPI()
      .then((res) => {
        setPelatihan(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <div className="site-pelatihan container mx-auto mt-40">
      <section className="title">
        <div>
          <h1>Program Pelatihan</h1>
          <p>
            Asah kemampuan dan wawasan Anda dalam mengembangkan usaha yang Anda
            miliki
          </p>
        </div>
      </section>
      <section className="list-pelatihan">
        <div className="grid grid-cols-4 gap-4">
          {pelatihan.map((item, index) => (
            <CardPelatihan key={index} item={item} />
          ))}
        </div>
      </section>
      <section>
        <div className="button-pelatihan w-full flex justify-center my-12">
          <button className="bg-orange-500 text-lg hover:bg-orange-600 font-bold text-white rounded shadow-md px-8 py-1">
            Selengkapnya
          </button>
        </div>
      </section>
    </div>
  );
}

export default Pelatihan;
