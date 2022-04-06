import provider from './provider'
const BASE_URL = process.env.REACT_APP_BASE_URL

//hotels end points

const getAllHotels = async () => {
  return await provider.getAll(BASE_URL, 'hotel', 'getAllHotels')
}

const searchHotels = async (bodyData) => {
  return await provider.getAllPOST(BASE_URL, 'hotel', 'search', bodyData)
}
const getRoomTypesByHotelId = async (bodyData) => {
  return await provider.getAllPOST(
    BASE_URL,
    'roomtype',
    'getRoomTypesByHotelId',
    bodyData
  )
}
const getAvailbleRooms = async (bodyData) => {
  return await provider.getAllPOST(
    BASE_URL,
    'room',
    'getAvailbleRooms',
    bodyData
  )
}
const getRoomByHotelId = async (bodyData) => {
  return await provider.getAllPOST(
    BASE_URL,
    'room',
    'getRoomByHotelId',
    bodyData
  )
}
const getRoomsByHotelIdAndRoomType = async (bodyData) => {
  return await provider.getAllPOST(
    BASE_URL,
    'room',
    'getRoomsByHotelIdAndRoomType',
    bodyData
  )
}
const getAllImagesByRoomId = async (bodyData) => {
  return await provider.getAllPOST(
    BASE_URL,
    'uploads/room',
    'getAllImagesByRoomId',
    bodyData
  )
}

export {
  getAllHotels,
  searchHotels,
  getRoomTypesByHotelId,
  getAvailbleRooms,
  getRoomByHotelId,
  getRoomsByHotelIdAndRoomType,
  getAllImagesByRoomId,
}
