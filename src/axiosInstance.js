import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',  // Use environment variable for API URL
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,  // Ensure cookies are sent with every request (required for cross-origin requests)
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    
    (config) => {
        // No need to manually add the token since it's automatically sent via cookies
        return config;  // Proceed with the request as usual
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        
        if (error.response.status === 401) {
            // Unauthorized, maybe token expired, handle accordingly (e.g., redirect to login)
            console.error('Unauthorized! Please login again.');
            window.location.href = '/login'; // Redirect to login
        } else if (error.response.status === 500) {
            // Server error
            console.error('Server error, please try again later.');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
