import axios from "axios";

const formDataApi = axios.create({
    baseURL: 'http://localhost:8080',
});

formDataApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        delete config.headers.Authorization;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default formDataApi;