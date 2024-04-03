import axios from "axios";
import { defaultConfig } from "../../config";
import { getCookie } from "../../utils/cookie";

export const axiosClient = axios.create({
    baseURL: defaultConfig.API_URL,
})
axiosClient.interceptors.request.use(async function (config) {
    const accessToken = getCookie("accessToken");
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  });