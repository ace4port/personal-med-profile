import axios from 'axios'
const url = 'https://phr21.herokuapp.com/api/v1'

export const getConfig = () => {
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  return config
}

export const patient_logIn = ({ email, password }) => axios.post(`${url}/patient-accounts/login/`, { email, password })

export const patient_register = ({ full_name, email, password, contact_no, gender, date_of_birth, blood_group }) =>
  axios.post(`${url}/patients/`, { full_name, email, password, contact_no, gender, date_of_birth, blood_group })

export const doctor_logIn = ({ email, password }) => axios.post(`${url}/doctor-accounts/login`, { email, password })

export const doctor_register = ({
  full_name,
  email,
  password,
  contact_no,
  gender,
  date_of_birth,
  blood_group,
  department,
}) =>
  axios.post(`${url}/doctors/`, {
    full_name,
    email,
    password,
    contact_no,
    gender,
    date_of_birth,
    blood_group,
    department,
  })

export const fetchUser = () => axios.get(`${url}/patient-accounts/me/profile/`, getConfig())
export const UpdateAccount = (formdata) =>
  axios.put(`${url}/patient-accounts/me/profile/`, { ...formdata }, getConfig())

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
