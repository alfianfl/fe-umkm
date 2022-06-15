import { API } from './API';

export const getUserAPI = (id) => {
  return API.get(`/user/profile/${id}`);
};

export const editUserAPI = (payload, id) => {
    return API.patch(`/user/editprofile/${id}`, payload);
  };

  export const editPasswordAPI = (payload, id) => {
    return API.patch(`/user/editpassword/${id}`, payload);
  };

