import axios from 'axios'

const token = localStorage.getItem('jwt');

const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : undefined,
    },
});

export default api