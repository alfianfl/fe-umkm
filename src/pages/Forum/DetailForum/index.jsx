import React from 'react';
import tokoDummy from '../../../assets/img/tokoDummy.png';
import komen from '../../../assets/img/komen.svg';
import enter from '../../../assets/img/enter.svg';
import './style.scss';

const listComment = [
  {
    comment:
      'All these different providers are very adept at helping you decide which type of care would be best. The Postdoctoral Fellowship program at PHC offers comprehensive training and experience in providing psychological services within. All these different providers are very adept at helping you decide which type of care would be best. The Postdoctoral Fellowship program at PHC offers comprehensive training and experience in providing psychological services within. All these different providers are very adept at helping you decide which type of care would be best. The Postdoctoral Fellowship program at PHC offers comprehensive training and experience in providing psychological services within.'
  },
  {
    comment:
      'All these different providers are very adept at helping you decide which type of care would be best. The Postdoctoral Fellowship program at PHC offers comprehensive training and experience in providing psychological services within . . . . .'
  },
  {
    comment:
      'All these different providers are very adept at helping you decide which type of care would be best. The Postdoctoral Fellowship program at PHC offers comprehensive training and experience in providing psychological services within . . . . .'
  }
];
function DetailForum() {
  return (
    <div className="site-detail-forum container mx-auto mt-40">
      <section className="article-title">
        <h1 className="title text-center">
          Diskusi Penggunaan Instagram Adsense UMKM
        </h1>
        <div className="flex items-center justify-between lg:w-1/3 w-full mx-auto mt-6">
          <div className="flex items-center">
            <div className="thumb-img mr-4">
              <img src={tokoDummy} alt="" />
            </div>
            <div className="akun">
              <h1 className="font-bold text-lg">Nama Akun Pengguna</h1>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-date">5 April 2022</span>{' '}
          </div>
        </div>
      </section>
      <section className="article-content">
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, et
          dui sit sem eget eu consequat, sit. Non suspendisse lorem id posuere
          aliquet luctus quam. Cursus molestie arcu eu, turpis. In convallis leo
          amet duis porttitor. Risus, enim curabitur pulvinar sapien suspendisse
          consequat. Et donec interdum est aliquet adipiscing imperdiet. Dis
          senectus nunc feugiat eu, vitae blandit. Malesuada sapien, ornare est
          nulla. Pharetra nec nisl volutpat tortor dignissim nisl vel sed. Proin
          ornare aenean arcu amet consectetur urna lectus. Libero dignissim duis
          aliquet donec tempus id praesent tempor tellus. Adipiscing vita.
        </p>
      </section>
      <section className="article-comment">
        <div className="comment-icon mb-6 flex">
          <img src={komen} alt="" />
          <span className="ml-2">Komentar (12)</span>
        </div>
        <div className="input-group relative flex items-stretch w-full mb-4">
          <input
            type="text"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Tulis Komentar atau Diskusi"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            className="btn button-enter inline-block px-6 py-2.5 bg-white-600 flex items-center"
            type="button"
            id="button-addon2"
          >
            <img src={enter} alt="" />
          </button>
        </div>
        {listComment.map((item, i) => (
          <div key={i} className="flex mt-6">
            <div className="thumb-img-comment">
              <img src={tokoDummy} alt="" />
            </div>
            <div className="comment">
              <div className="akun">
                <h1 className="font-bold">Nama Akun Pengguna</h1>
                <div className="flex items-center">
                  <span className="text-date">5 April 2022</span>{' '}
                </div>
              </div>
              <div className="forum-content mt-2">
                <p>{item.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default DetailForum;
