import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'

// Create `axios-cache-adapter` instance
const cache = setupCache({
    maxAge: 15 * 60 * 1000 //15mins
});

const httpClient = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? process.env.REACT_APP_DEV_ENDPOINT: process.env.REACT_APP_PROD_ENDPOINT,
    adapter: cache.adapter
});

httpClient.interceptors.response.use((response) => {
    return response;
}, function (error) {
    return Promise.reject(error.response);
});

export default httpClient;