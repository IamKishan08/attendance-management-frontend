
import axios from 'axios';

const username = 'user'; 
const password = 'password';
const encodedCredentials = btoa(username + ':' + password);

const axiosInstance = axios.create({
 baseURL: 'http://localhost:8080/api',
 headers: {
    Authorization: `Basic ${encodedCredentials}`,
 },
});

export default axiosInstance;