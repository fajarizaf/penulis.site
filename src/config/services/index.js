import authGet from './authGet'
import Delete from './Delete'
import Get from './Get'
import Post from './Post'
import Put from './Put'

const getPosts = (endpoint) => Get(endpoint)
const getPost = (endpoint) => Get(endpoint)
const verifyToken = (endpoint) => Get(endpoint)
const Logout = (endpoint) => Get(endpoint)
const Login = (endpoint,data) => Post(endpoint,data)
const Register = (endpoint,data) => Post(endpoint,data)

//private API endpoint
const ListPost = (endpoint) => authGet(endpoint)
const getpostID = (endpoint) => authGet(endpoint)
const DeletePost = (endpoint) => Delete(endpoint)
const CreatePost = (endpoint,data) => Post(endpoint,data)
const UpdatePost = (endpoint,data) => Put(endpoint,data)

const API = {
    getPost,
    getPosts,
    ListPost,
    getpostID,
    DeletePost,
    CreatePost,
    UpdatePost,
    verifyToken,
    Logout,
    Login,
    Register,
}

export default API

