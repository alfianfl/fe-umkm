import React from 'react';
import './style.scss';
import tokoDummy from '../../assets/img/tokoDummy.png';
import dot from '../../assets/img/dot.svg';
import komen from '../../assets/img/komen.svg';
import plus from '../../assets/img/plus.svg';
import { NavLink } from 'react-router-dom';

const listComment = [{}, {}, {}];

function Forum() {
  const trimString = () => {
    const string =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit';
    const length = 620;
    const trimmedString =
      string.length > length ? string.substring(0, length - 3) + '...' : string;

    return trimmedString;
  };
  return (
    <div className="site-forum container mx-auto mt-40">
      <section className="title">
        <div>
          <h1>Forum Diskusi</h1>
          <p>
            Buat obrolan diskusi Anda bersama banyak orang di forum diskusi ini
          </p>
        </div>
        <div className="button-add-forum">
          <NavLink to={`/diskusi/tambah-diskusi`}>
            <button className="bg-orange-500 flex items-center w-full hover:bg-orange-600  text-white rounded shadow-md font-bold text-sm px-3 py-2">
              <img src={plus} className="mr-1" alt="" /> <span>Buat Diskusi</span> 
            </button>
          </NavLink>
        </div>
      </section>
      <section className="list-forum">
        {listComment.map((item, i) => (
          <NavLink to="/diskusi/1">
            <div key={i} className="thumb-forum">
              <div className="text-left flex justify-between items-start">
                <div className="flex items-center">
                  <div className="thumb-img mr-4">
                    <img src={tokoDummy} alt="" />
                  </div>
                  <div className="akun">
                    <h1 className="font-bold">Nama Akun Pengguna</h1>
                    <div className="flex items-center">
                      <span className="text-xs">5 April 2022</span>{' '}
                    </div>
                  </div>
                </div>
                <img src={dot} alt="" />
              </div>
              <div className="forum-content">
                <h1 className="forum-title">Isian Judul Forum Diskusi</h1>
                <p>{trimString()}</p>
              </div>
              <div className="forum-comment">
                <img src={komen} alt="" />
                <span>Komentar (12)</span>
              </div>
            </div>
          </NavLink>
        ))}
      </section>
    </div>
  );
}

export default Forum;
