import axios from 'axios'
import { URL } from 'api'

export const fetchAll = () => axios.get(URL + '/prescriptions/')

export const fetchLatest = () => axios.get(URL + '/latest/prescription/medicines/')

export const fetchMedicines = (id) => axios.get(URL + '/prescriptions/' + id + '/medicines/')

export const createPrescription = (formdata) => axios.post(URL + '/prescriptions/', formdata)
export const editPrescription = (formdata) => axios.post(URL + '/prescriptions/', formdata)
