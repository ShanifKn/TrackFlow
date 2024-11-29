import axios from "axios";
import { getCookie } from "cookies-next";
import { DOMAIN_URL } from "../../config/index";
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: DOMAIN_URL,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    return Promise.reject(error);
  }
);

export default axiosInstance;
