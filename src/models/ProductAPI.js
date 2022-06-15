import { API } from './API';

export const createProductAPI = (payload) => {
  return API.post('/produk/addProduk', payload);
};

export const getProductAPI = (query) => {
  return API.get(`/produk${query || ''}`);
};

export const getDetailProductAPI = (id) => {
  return API.get(`/produk/detailProduk/${id}`);
};

export const getProductByUserAPI = () => {
  return API.get(`/produk/user`);
};

export const getProductByTokoAPI = (id) => {
  return API.get(`/produk/toko/${id}`);
};

export const deleteProductAPI = (id) => {
  return API.post(`/produk/deleteProduk/${id}`);
};

export const editProductAPI = (payload, id) => {
  return API.patch(`/produk/editProduk/${id}`, payload);
};

