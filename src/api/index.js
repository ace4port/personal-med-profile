import axios from 'axios'

export const URL = 'http://phr21.herokuapp.com/api/v1'

export * from './post'
export * from './user'
export * from './comments'

export const fetchDepartments = () => axios.get(`${URL}/departments/`)

export const fetchDoctors = () => axios.get(`${URL}/doctors/`)
