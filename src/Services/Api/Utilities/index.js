import provider from './provider'
const BASE_URL = process.env.REACT_APP_BASE_URL

//user

const getAllHotels = async () => {
  return await provider.getAll(BASE_URL, 'hotel', 'getAllHotels')
}

export default getAllHotels
