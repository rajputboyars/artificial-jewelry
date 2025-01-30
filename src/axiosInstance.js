// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',  // Replace with your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Get token from localStorage or state
        const token = localStorage.getItem('authToken');

        if (token) {
            // Attach the token to the Authorization header
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;  // Make sure to return the config to continue the request
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Optionally, you can modify the response here if needed
        return response;
    },
    (error) => {
        // Global error handling (e.g., if token is expired or unauthorized)
        if (error.response.status === 401) {
            // Unauthorized, maybe token expired, redirect to login
            console.error('Unauthorized! Please login again.');
            localStorage.removeItem('authToken');
            window.location.href = '/login';  // Or use react-router
        } else if (error.response.status === 500) {
            // Server error
            console.error('Server error, please try again later.');
        }
        return Promise.reject(error);
    }


);

export default axiosInstance;
