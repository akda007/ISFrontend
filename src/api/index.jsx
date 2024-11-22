import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.BACKEND_URL || "http://localhost:8080/api"
});


export default api
