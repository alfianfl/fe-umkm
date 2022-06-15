import { API } from "./API";

export const getPelatihanAPI = () => {
  return API.get(`/pelatihan`);
};



