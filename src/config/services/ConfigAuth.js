import axios from 'axios'

const send = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:4000',
})

send.interceptors.request.use(async(config) =>{
    
    const getToken = await axios.get('/api/auth/rtoken')
    config.headers.Authorization = `Bearer ${getToken.data.accessToken}`
    
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default send