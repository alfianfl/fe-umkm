import React from 'react';
import dummy5 from '../../../assets/img/Mask group5.png';
import './style.scss';

function DetailPelatihan() {
  return (
    <div className="site-detail-pelatihan container mx-auto mt-40">
      <div className="flex justify-center mb-8">
        <h1>
          Judul Pelatihan Wawasan Pengembangan UMKM
        </h1>
      </div>
      <div className="thumb-img">
        <img src={dummy5} alt="" />
      </div>
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, et
          dui sit sem eget eu consequat, sit. Non suspendisse lorem id posuere
          aliquet luctus quam. Cursus molestie arcu eu, turpis. In convallis leo
          amet duis porttitor. Risus, enim curabitur pulvinar sapien suspendisse
          consequat. Et donec interdum est aliquet adipiscing imperdiet. Dis
          senectus nunc feugiat eu, vitae blandit. Malesuada sapien, ornare est
          nulla. Pharetra nec nisl volutpat tortor dignissim nisl vel sed. Proin
          ornare aenean arcu amet consectetur urna lectus. Libero dignissim duis
          aliquet donec tempus id praesent tempor tellus. Adipiscing .
        </p>
      </div>
      <div className="button-pelatihan w-full flex justify-end my-4">
        <button className="bg-orange-500 w-full hover:bg-orange-600 font-bold text-white rounded shadow-md px-6 py-2">
          Link Pendaftaran
        </button>
      </div>
    </div>
  );
}

export default DetailPelatihan;
