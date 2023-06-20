import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:8888'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;
