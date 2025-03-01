import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL
export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? url : "/api",
  withCredentials: true,
});
