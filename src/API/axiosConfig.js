import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8888/web-chat-0.0.4-SNAPSHOT'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;
