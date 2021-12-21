import axios from 'axios'

const url = 'https://blog2-api7991.herokuapp.com/api/v1/posts'

// Home page
export const fetchPosts = (page) => axios.get(`${url}?limit=5/${page ? `%2F&page=${page}` : ''}`)

// Single post crud
export const fetchOne = (id) => axios.get(`${url}/${id}/`)
export const createPost = (newPost, config) => axios.post(`${url}/`, newPost, config)
export const updatePost = (id, updatedPost, config) => axios.patch(`${url}/${id}/`, updatedPost, config)
export const deletePost = (id, config) => axios.delete(`${url}/${id}/`, config)

// Like and unlike post
export const likePost = (id, config) => axios.put(`${url}/${id}/likes/`, {}, config)

// Follow unfollow user
export const follow = (id, config) => axios.put(`${url}/users/${id}/followers/`, {}, config)

// c-ud restricted to admin only
export const getCategories = () => axios.get(`${url}/categories/`)
