import axios from 'axios'
import { URL } from 'api'

export const createPrescription = () => {}
export const editPrescription = () => {}
export const fetchAll = () => {}

export const fetchLatest = () => axios.get(URL + '/latest/prescription/medicines/')
