import React, { useState, useEffect } from 'react';
import tokoDummy from '../../../assets/img/tokoDummy.png';
import dot from '../../../assets/img/dot.svg';
import komen from '../../../assets/img/komen.svg';
import { trimString } from '../../../helpers';
import { NavLink } from 'react-router-dom';
import { getCommentByForumAPI } from '../../../models/ForumAPI';

function ListForum({ item }) {
  const [comments, setComments] = useState(0);

  useEffect(() => {
    getCommentByForumAPI(item._id)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <NavLink to={`/diskusi/${item._id}`}>
      <div key={item._id} className="thumb-forum">
        <div className="text-left flex justify-between items-start">
          <div className="flex items-center">
            <div className="thumb-img mr-4">
              <img src={tokoDummy} alt="" />
            </div>
            <div className="akun">
              <h1 className="font-bold">{item.nama_user}</h1>
              <div className="flex items-center">
                <span className="text-xs">{item.createdAt}</span>{' '}
              </div>
            </div>
          </div>
          <img src={dot} alt="" />
        </div>
        <div className="forum-content">
          <h1 className="forum-title">{item.judul_forum}</h1>
          <p>
            {trimString(
              item.isi_forum
                .replace(/^\<p\>/, '')
                .replace(/\<\/p\>$/, '')
                .replace(/\<\/strong\>$/, '')
                .replace(/^\<strong\>/, ''),
              620
            )}
          </p>
        </div>
        <div className="forum-comment">
          <img src={komen} alt="" />
          <span>Komentar ({comments.length})</span>
        </div>
      </div>
    </NavLink>
  );
}

export default ListForum;
