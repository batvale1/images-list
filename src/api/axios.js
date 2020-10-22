import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_AXIOS_BASE_URL,
});

export default {
  get: async (path, payload) => axiosInstance.get(path, payload),
};
