import { BASE_URL } from "@src/config";
import axios from "axios";
import { getUser } from "@src/apis";

const api = axios.create({
    baseURL: BASE_URL,
})

api.interceptors.request.use(
    async (config) => {
        const token = (await getUser())?.accessToken
        config.headers.Authorization = token ? `Bearer ${token}` : undefined
        return config;
    },
    (error) => error
)

export default api
