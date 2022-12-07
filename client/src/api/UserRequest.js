import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8000"})


API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  })
export const getUser = (id) => API.get(`/user/${id}`)

export const updateUser = (id,formData) => API.put(`/user/${id}`, formData);

export const getAllUser = () => API.get('/user')

export const followUser = (id,data) => API.put(`/user/${id}/follow`,data)

export const unFollowUser = (id,data) => API.put(`/user/${id}/unfollow`,data)