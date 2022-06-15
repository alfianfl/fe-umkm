import React, { useState, useEffect } from 'react';
import './style.scss';
import plus from '../../assets/img/plus.svg';
import { NavLink } from 'react-router-dom';
import { getForumAPI } from '../../models/ForumAPI';
import ListForum from '../../components/Forum/ListForum';
import { loaderCard } from '../../helpers';

function Forum() {
  const [listForum, setListForum] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getForumAPI()
      .then((res) => {
        setListForum(res.data.response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="site-forum container mx-auto mt-40 ">
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
              <img src={plus} className="mr-1" alt="" />{' '}
              <span>Buat Diskusi</span>
            </button>
          </NavLink>
        </div>
      </section>
      <section className="list-forum ">
        {loading ? (
          <div className='flex justify-center mb-80 '>{loaderCard()}</div>
        ) : (
          listForum.map((item, i) => <ListForum item={item} />)
        )}
      </section>
    </div>
  );
}

export default Forum;
