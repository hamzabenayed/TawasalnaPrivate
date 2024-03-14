import axios from 'axios';
import { base_Url
 } from '../../BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create({
  timeout: 10000,
  baseURL: base_Url,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.url?.includes('auth')) return config;

    const token = await AsyncStorage.getItem('USER_ACCESS');

    if (!token) return config;

    config.headers['Authorization'] = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Add a response interceptor

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url ===
        `http://${base_Url}/tawasalna-user/auth/refresh-token`
    ) {
      AsyncStorage.removeItem("USER_ACCESS");
      AsyncStorage.removeItem("USER_REFRESH");
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = await AsyncStorage.getItem("USER_REFRESH");
      const expiredToken = await AsyncStorage.getItem("USER_ACCESS");

      return axiosInstance
        .post(
          `http://${base_Url}/tawasalna-user/auth/refresh-token`,
          {
            expiredToken,
          },
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            const data = res.data;

            AsyncStorage.setItem("USER_REFRESH", data.refresh);
            AsyncStorage.setItem("USER_ACCESS", data.access);

            axiosInstance.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${data.access}`;
            return axiosInstance(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;