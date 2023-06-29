import axios from "axios";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const API_URL = 'http://localhost:8080'

const {setMessage,clearMessage, logout} = useActions();
const {text} = useTypedSelector(state => state.message)


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

        logout();
        clearMessage();
        setMessage('Вы не авторизованы или время действия вашей сессии истекло. Попробуйте войти ещё раз.');
        console.log(text);

    }
    throw error;
})

export default $api;