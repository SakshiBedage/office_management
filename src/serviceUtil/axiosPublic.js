import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

// const { setUserDetails } = useContext(AuthContext);

const axiosPublic = axios.create({
  baseURL: "https://apingweb.com/api/login",
  headers: {
    "Content-Type": "application/json",
  },
});
const onRequest = (config) => {
  console.log(config);
  return config;
};

const onRequestError = (error) => {
  console.log(error);
  return Promise.reject(error);
};

const onResponse = (response) => {
  console.log(response);
  return response;
};

const onResponseError = (error) => {
  console.log(error);
  return Promise.reject(error);
};

axiosPublic.interceptors.request.use(onRequest, onRequestError);

axiosPublic.interceptors.response.use(onResponse, onResponseError);

export default axiosPublic;
