import axios from "axios";

const baseURL = `http://localhost:5000/api`;

export const API = axios.create({
    baseURL: baseURL,
    headers:{
        'Content-Type': 'application/json'
      },
    withCredentials:true
});
