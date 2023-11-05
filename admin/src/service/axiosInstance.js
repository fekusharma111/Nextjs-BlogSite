import axios from "axios";
import { API_NOTIFICATION_MESSAGES } from "../constants/config";
import CryptoJS from "crypto-js";
import { SERVICE_URLs } from "./apiFactory";
import { getCookie } from "../utils/utils";
import { jwtDecode } from "jwt-decode";
const API_URL = "http://localhost:5000";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.headers && config.headers["authorization"]) {
      // console.log("calling")
      let accessToken = config.headers["authorization"].split(" ")[1];
      let refreshToken = getCookie("refreshToken");
      const currentDate = new Date();
      const decodedJWTToken = jwtDecode(accessToken);
      if (decodedJWTToken.exp * 1000 < currentDate.getTime()) {
        try {
          const data = await API.refreshToken({ token: refreshToken });

          if (data.isSuccess) {
            config.headers["authorization"] = "Bearer " + getCookie("accessToken");
          }
        } catch (error) {
          console.log("error while refreshing token axios", error);
        }
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const cookies = response.headers["set-cookie"];

    if (cookies && cookies.length > 0) {
      // Set cookies in the browser
      cookies.forEach((cookie) => {
        document.cookie = cookie;
      });
    }
    return processResponse(response);
  },
  (error) => {
    return Promise.reject(processError(error));
  }
);

const processResponse = (response) => {
  if (response?.status === 200) {
    console.log("handling response in processResponse function", response.status, response.data);
    return {
      isSuccess: true,
      data: response.data.encryptedData
        ? CryptoJS.AES.decrypt(response.data.encryptedData, "CryptoEncryptionKey").toString(CryptoJS.enc.Utf8)
        : response.data,
    };
  } else {
    return {
      isFailure: true,
      status: response.status,
      message: response.statusText, // Use statusText to get the error message
      code: response?.status,
    };
  }
};

const processError = (error) => {
  if (error.response) {
    console.log("ERROR IN RESPONSE", error.toJSON());
    return {
      isError: true,
      message: API_NOTIFICATION_MESSAGES.responseFailure,
      originalMessage: error.response.data.message,
      code: error.response.status,
    };
  } else if (error.request) {
    console.log("ERROR IN REQUEST", error.toJSON());
    return {
      isError: true,
      message: API_NOTIFICATION_MESSAGES.requestFailure,
      originalMessage: error.message, // Use error.message to get the error message
      code: "",
    };
  } else {
    console.log("ERROR IN Network", error.toJSON());
    return {
      isError: true,
      message: API_NOTIFICATION_MESSAGES.networkError,
      originalMessage: error.message, // Use error.message to get the error message
      code: "",
    };
  }
};

const API = {};
for (const [key, value] of Object.entries(SERVICE_URLs)) {
  API[key] = (body, includeAuthorization = false) => {
    const headers = includeAuthorization ? { authorization: `Bearer ${getCookie("accessToken")}` } : {};
    return axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responseType: value.responseType,
      headers,
      withCredentials: true,
    });
  };
}

export { API };
