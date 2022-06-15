import { API } from "./API";

export const createTokoAPI = (payload) => {
  return API.post("/toko/addToko", payload);
};

export const getTokoAPI = (query) => {
  return API.get(`/toko${query||''}`);
};

export const getTokoByUserAPI = () => {
  return API.get(`/user/listtoko`);
};

export const deleteTokoAPI = (id) => {
  return API.post(`/toko/deleteToko/${id}`);
};

export const getTokoByIdAPI = (id) => {
  return API.get(`/toko/profileToko/${id}`);
};

export const editTokoByIdAPI = (payload, id) => {
  return API.patch(`/toko/editProfil/${id}`, payload);
};

export const editMedsosAPI = (payload, id) => {
  return API.patch(`/toko/editSosialMedia/${id}`, payload);
};

export const editAlamatAPI = (payload, id) => {
  return API.patch(`/toko/editAlamat/${id}`, payload);
};

export const editPromoAPI = (payload, id) => {
  return API.patch(`/toko/editPromo/${id}`, payload);
};

export const editAdministrasiAPI = (payload, id) => {
  return API.patch(`/toko/editAdministrasi/${id}`, payload);
};
export const editLegalitasAPI = (payload, id) => {
  return API.patch(`/toko/editLegalitas/${id}`, payload);
};