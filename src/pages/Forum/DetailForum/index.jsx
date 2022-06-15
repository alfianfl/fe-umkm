import React, { useState, useEffect } from 'react';
import tokoDummy from '../../../assets/img/tokoDummy.png';
import komen from '../../../assets/img/komen.svg';
import enter from '../../../assets/img/enter.svg';
import { useParams, NavLink } from 'react-router-dom';
import back from '../../../assets/img/back.png';
import './style.scss';
import {
  addCommentAPI,
  getCommentByForumAPI,
  getDetailForumAPI
} from '../../../models/ForumAPI';
import { loaderCard } from '../../../helpers';

function DetailForum() {
  const [forum, setForum] = useState({});
  const [isi, setIsi] = useState('');
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [komentar, setKomentar] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getDetailForumAPI(id)
      .then((res) => {
        setForum(res.data);
        setIsi(res.data.isi_forum)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getCommentByForumAPI(id)
      .then((res) => {
    
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const refetch = () => {
    getCommentByForumAPI(id)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getDetailForumAPI(id)
      .then((res) => {
        setForum(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const payload = {
        komentar
      };
      setLoading(true);
      addCommentAPI({ payload, id })
        .then((res) => {
          refetch();
          setLoading(false);
          setKomentar('');
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <div className="site-detail-forum container mx-auto mt-40">
      <div className="edit-toko">
        <h1
          className="text-center"
          style={{ fontSize: '30px', color: ' #033b55' }}
        >
          Halaman Detail Forum
        </h1>
        <NavLink to="/diskusi">
          <h1 className="flex">
            {' '}
            <img src={back} alt="back" />
            <span>Kembali</span>{' '}
          </h1>
        </NavLink>
      </div>
      <div className="article-main py-1 px-4">
        <section className="article-title">
          <h1 className="title text-center">{forum.judul_forum}</h1>
          <div className="flex items-center justify-between lg:w-1/3 w-full mx-auto mt-6">
            <div className="flex items-center">
              <div className="thumb-img mr-4">
                <img src={tokoDummy} alt="" />
              </div>
              <div className="akun">
                <h1 className="font-bold text-lg">{forum.nama_user}</h1>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-date">{forum.createdAt}</span>{' '}
            </div>
          </div>
        </section>
        <section className="article-content">
          <p className="text-justify">
            {isi.replace(/<\/?[^>]+(>|$)/g, "")
         }
          </p>
        </section>
      </div>
      <section className="article-comment">
        <div className="comment-icon mb-6 flex">
          <img src={komen} alt="" />
          <span className="ml-2">Komentar ({comments.length})</span>
        </div>
        <div className="input-group relative flex items-stretch w-full mb-4">
          <textarea
            type="text"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Tulis Komentar atau Diskusi"
            aria-label="Search"
            value={komentar}
            onChange={(e) => setKomentar(e.target.value)}
            aria-describedby="button-addon2"
            onKeyDown={handleKeyDown}
          />
          <button
            className="btn button-enter inline-block px-6 py-2.5 bg-white-600 flex items-center"
            type="button"
            id="button-addon2"
            onClick={handleKeyDown}
          >
            <img src={enter} alt="" />
          </button>
        </div>
        <div>
          {loading ? (
            <div className="flex justify-center"> {loaderCard()} </div>
          ) : (
            comments.map((item, i) => (
              <div key={i} className="flex mt-6">
                <div className="thumb-img-comment mr-2">
                  <img src={tokoDummy} alt="" />
                </div>
                <div className="comment">
                  <div className="akun">
                    <h1 className="font-bold">{item.nama_user}</h1>
                    <div className="flex items-center">
                      <span className="text-date">{item.createdAt}</span>{' '}
                    </div>
                  </div>
                  <div className="forum-content mt-2">
                    <p>{item.komentar}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default DetailForum;
