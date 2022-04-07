import axios from 'axios';


// const token = localStorage.getItem('token');
// console.log('token');
// console.log(token);
const instance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 30000,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        // Authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
    }
});

export default instance;
