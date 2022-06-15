import { API } from './API';

export const getForumAPI = () => {
  return API.get('/forum');
};

export const addForumAPI = (payload) => {
  return API.post('/forum/addForum', payload);
};

export const getDetailForumAPI = (id) => {
  return API.get(`/forum/detailForum/${id}`);
};

export const addCommentAPI = ({ payload, id }) => {
  return API.post(`/comment/addComment/${id}`, payload);
};

export const getCommentByForumAPI = (id) => {
  return API.get(`/comment/${id}`);
};
