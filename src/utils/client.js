import axios from 'axios';

// Create an Axios instance
const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    timeout: 10000,
});

// Optionally, set default headers
client.defaults.headers.common['Content-Type'] = 'application/json';

// Intercept request to include token in headers
client.interceptors.request.use(
    (config) => {
        // Retrieve token from localStorage or other secure storage
        const token = localStorage.getItem('token');

        // If the token is available, add it to the Authorization header
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default client;
