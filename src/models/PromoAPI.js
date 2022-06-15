import { API } from "./API";

export const editPromoAPI = (payload, id) => {
  return API.post(`/promo/addPromo/${id}`, payload);
};

export const getPromoByTokoAPI = ( id) => {
    return API.get(`/promo/${id}`);
  };