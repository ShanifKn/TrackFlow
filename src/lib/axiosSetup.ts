import axios from "axios";

import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { DOMAIN_URL } from "../../config/index";

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
