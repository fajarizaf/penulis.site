import axios from 'axios'

const send = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_ENDPOINT_API,
})

send.interceptors.request.use(async(config) =>{
    
    const getToken = await axios.get('/api/auth/rtoken', { withCredentials: true })
    config.headers.Authorization = `Bearer ${getToken.data.accessToken}`
    
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default send