import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";
const axiosParams = {
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
};

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

const axiosInstance = axios.create(axiosParams);

export default axiosInstance;