import { BASE_URL } from "@src/config";
import axios from "axios";

const api = axios.create({
    baseURL: BASE_URL
})

// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("token")
//         config.headers.Authorization = token ? `Bearer ${token}` : undefined
//         return config;
//     },
//     (error) => error
// )

export default api
