import axios from 'axios'
import { getConfig } from 'api'
const url = 'http://phr21.herokuapp.com/api/v1/appointments'

export const fetchAppointments = () => axios.get(`${url}`)
export const createAppointments = (formdata) => axios.post(`${url}/`, { ...formdata }, getConfig())

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

export const patient_logIn = ({ email, password }) => axios.post(`${url}/patient-accounts/login/`, { email, password })

export const patient_register = ({ full_name, email, password, contact_no, gender, date_of_birth, blood_group }) =>
  axios.post(`${url}/patients/`, { full_name, email, password, contact_no, gender, date_of_birth, blood_group })

export const doctor_logIn = ({ email, password }) => axios.post(`${url}/patient-accounts/login/`, { email, password })

export const doctor_register = ({ full_name, email, password, contact_no, gender, date_of_birth, blood_group }) =>
  axios.post(`${url}/doctor/`, { full_name, email, password, contact_no, gender, date_of_birth, blood_group })

/*
export const logIn = ({ username, password }) => axios.post(`${url}/user_login/`, { username, password })
export const logOut = () => axios.post(`${url}/user_logout`)
export const refresh = (tokenR) => axios.post(`${url}/user_refresh_token/`, { refresh: tokenR })

export const user = (id) => axios.get(`${url}/users/${id}/`)

export const profile = () => axios.get(`${url}/me/profile/`)
export const updateUser = (id, details, config) => axios.put(`${url}/users/${id}/`, details, config)

export const updateProfile = (id, formData, config) => axios.put(`${url}/users/${id}/profile/`, formData, config)

// api not working ...
export const changePw = () => axios.post(`${url}/me/change_password/`)
*/
