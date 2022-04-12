import axios from 'axios'
import { handleResponse, handleError } from './response'

//get methods
const getAll = async (url, type, task) => {
  console.log(`${url}/${type}/${task}`)
  return axios
    .get(`${url}/${type}/${task}`)
    .then(handleResponse)
    .catch(handleError)
}
const getOneById = (url, type, task) => {
  return axios
    .get(`${url}/${type}/${task}`)
    .then(handleResponse)
    .catch(handleError)
}

//post methods
const getAllPOST = async (url, type, task, data) => {
  return axios
    .post(`${url}/${type}/${task}`, data)
    .then(handleResponse)
    .catch(handleError)
}

const getAllById = async (url, type, task, data) => {
  return axios
    .post(`${url}/${type}/${task}`, data)
    .then(handleResponse)
    .catch(handleError)
}
const getOneByIdPost = async (url, type, task, data) => {
  return axios
    .post(`${url}/${type}/${task}`, data)
    .then(handleResponse)
    .catch(handleError)
}
const insertData = async (url, type, task, data) => {
  return axios
    .post(`${url}/${type}/${task}`, data)
    .then(handleResponse)
    .catch(handleError)
}
const deleteData = async (url, type, task, data) => {
  return axios
    .delete(`${url}/${type}/${task}/${data[0]}/${data[1]}`)
    .then(handleResponse)
    .catch(handleError)
}

export default {
  getAll,
  getOneById,
  getAllPOST,
  getAllById,
  getOneByIdPost,
  insertData,
  deleteData,
}
