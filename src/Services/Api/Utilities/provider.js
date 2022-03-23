import axios from 'axios'
import { handleResponse, handleError } from './response'

const BASE_URL = 'http://127.0.0.1:8000/api'

const getAll = (resource) => {
  return axios
    .get(`${BASE_URL}/${resource}`)
    .then(handleResponse)
    .catch(handleError)
}

const post = (resource, model) => {
  return axios
    .post(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError)
}

const remove = (resource, id) => {
  return axios
    .delete(`${BASE_URL}/${resource}`, id)
    .then(handleResponse)
    .catch(handleError)
}

export const apiProvider = {
  getAll,
  post,
  remove,
}
