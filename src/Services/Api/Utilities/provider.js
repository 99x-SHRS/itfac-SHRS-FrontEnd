import axios from 'axios'
import { handleResponse, handleError } from './response'

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

export default { getAll, getOneById }
