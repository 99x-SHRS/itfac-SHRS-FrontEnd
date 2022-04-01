import provider from './provider'
const BASE_URL = process.env.REACT_APP_BASE_URL

//user

const getAllHotels = async () => {
  return await provider.getAll(BASE_URL, 'hotel', 'getAllHotels')
}

const searchHotels = async (bodyData) => {
  return await provider.getAllPOST(BASE_URL, 'hotel', 'search', bodyData)
}
export { getAllHotels, searchHotels }
