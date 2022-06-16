import axios from "axios";

const baseURL = `https://be-umkm.herokuapp.com/api`;

export const API = axios.create({
    baseURL: baseURL,
    headers:{
        'Content-Type': 'application/json'
      },
    withCredentials:true
});
