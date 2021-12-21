import axios from "axios"
const url = "https://blog-api7991.herokuapp.com/blog-api"

// comment crud
export const fetchComments = (id) => axios.get(`${url}/posts/${id}/comments/`)
export const postComment = (comment, config) => axios.post(`${url}/comments/`, comment, config)
export const updateComment = (id, comment, config) => axios.patch(`${url}/comments/${id}/`, comment, config)
export const deleteComment = (id, config) => axios.delete(`${url}/comments/${id}/`, config)

// comment reply actions : Note- They are not implemented in redux
export const fetchReplies = (id) => axios.get(`${url}/comments/${id}/replies/`)
export const postReply = (reply, config) => axios.post(`${url}/replies/`, reply, config)
export const updateReply = (id, reply, config) => axios.patch(`${url}/replies/${id}/`, reply, config)
export const deleteReply = (id, config) => axios.delete(`${url}/replies/${id}/`, config)
