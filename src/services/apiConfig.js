import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

// interceptors are called before a request is sent and after a response is received
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
},
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
