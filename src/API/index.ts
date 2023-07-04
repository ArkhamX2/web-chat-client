import axios from "axios";

export const API_URL = 'http://localhost:8080'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {

    if (error.response.status == 401 && error.config) {
        localStorage.setItem('token', '')
        window.location.replace('/')
        alert('Вы не авторизованы или срок действия Вашей сессии истек. Попробуйте авторизоваться снова.')
    }
    throw error;
})

export default $api;