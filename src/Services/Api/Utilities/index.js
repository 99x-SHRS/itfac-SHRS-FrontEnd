import provider from './provider'
const BASE_URL = process.env.REACT_APP_BASE_URL

// *****************************************************************************
//                          hotels end points
// *****************************************************************************
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

const saveHotelById = async (bodyData) => {
  return await provider.getAllPOST(BASE_URL, 'hotel', 'saveHotel', bodyData)
}
// *****************************************************************************
//                          rooms  end points
// *****************************************************************************
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

const getRoomDetailsById = async (bodyData) => {
  return await provider.getAllPOST(BASE_URL, 'room', 'getRoomById', bodyData)
}
const getAvailableRoomQtyByRoomId = async (bodyData) => {
  return await provider.getOneByIdPost(
    BASE_URL,
    'room',
    'getAvailableRoomQtyByRoomId',
    bodyData
  )
}
// *****************************************************************************
//                          discount  end points
// *****************************************************************************
const getDiscountByHotelId = async (bodyData) => {
  return await provider.getAllPOST(
    BASE_URL,
    'discount',
    'getDiscountByHotelId',
    bodyData
  )
}

// *****************************************************************************
//                          booking  end points
// *****************************************************************************

const placeBooking = async (bodyData) => {
  return await provider.insertData(BASE_URL, 'booking', '', bodyData)
}
const updateBookingById = async (id, bodyData) => {
  return await provider.updateById(
    BASE_URL,
    'booking',
    'updateBookingById',
    id,
    bodyData
  )
}
const getBookingDetailsById = async (bodyData) => {
  return await provider.getOneByIdPost(
    BASE_URL,
    'booking',
    'getBookingById',
    bodyData
  )
}
const getCurrentBookingByUserId = async (bodyData) => {
  return await provider.getAllPOST(
    BASE_URL,
    'booking',
    'getCurrentBookingByUserId',
    bodyData
  )
}
const getPastBookingByUserId = async (bodyData) => {
  return await provider.getAllPOST(
    BASE_URL,
    'booking',
    'getPastBookingByUserId',
    bodyData
  )
}
const getBookingByUserId = async (bodyData) => {
  return await provider.getAllPOST(
    BASE_URL,
    'booking',
    'getBookingByUserId',
    bodyData
  )
}

// *****************************************************************************
//                          vas  end points
// *****************************************************************************

const getVasByHotelId = async (bodyData) => {
  return await provider.getAllPOST(BASE_URL, 'vas', 'getVASByHotelId', bodyData)
}
const subscribeVAS = async (bodyData) => {
  return await provider.getAllPOST(
    BASE_URL,
    'booking',
    'addVASToBooking',
    bodyData
  )
}
const unSubscribeVAS = async (params) => {
  return await provider.deleteData(
    BASE_URL,
    'vas',
    'deleteVASByBookingAndVASId',
    params
  )
}
const getVASByBookingId = async (bodyData) => {
  return await provider.getAllPOST(
    BASE_URL,
    'vas',
    'getVASByBookingId',
    bodyData
  )
}

// *****************************************************************************
//                          payment  end points
// *****************************************************************************
const getTotalAmountByBookingId = async (bodyData) => {
  return await provider.getOneByIdPost(
    BASE_URL,
    'payment',
    'totalAmountByBookingId',
    bodyData
  )
}
const paymentStatusByBookingId = async (bodyData) => {
  return await provider.getOneByIdPost(
    BASE_URL,
    'payment',
    'paymentStatusByBookingId',
    bodyData
  )
}
// *****************************************************************************
//                          voucher  end points
// *****************************************************************************
const validateCoupon = async (bodyData) => {
  return await provider.getOneByIdPost(
    BASE_URL,
    'coupon',
    'validateCoupon',
    bodyData
  )
}

// *****************************************************************************
//                          customer grade  end points
// *****************************************************************************

const getCustomerDiscount = async (bodyData) => {
  return await provider.getOneByIdPost(
    BASE_URL,
    'loyalty',
    'getCustomerDiscount',
    bodyData
  )
}

// *****************************************************************************
//                          payment   end points
// *****************************************************************************

const pay = async (bodyData) => {
  return await provider.insertData(BASE_URL, 'payment', 'pay', bodyData)
}
export {
  getAllHotels,
  searchHotels,
  getRoomTypesByHotelId,
  getAvailbleRooms,
  getRoomByHotelId,
  getRoomsByHotelIdAndRoomType,
  getAllImagesByRoomId,
  getDiscountByHotelId,
  placeBooking,
  getVasByHotelId,
  subscribeVAS,
  unSubscribeVAS,
  getVASByBookingId,
  updateBookingById,
  getBookingDetailsById,
  getRoomDetailsById,
  getTotalAmountByBookingId,
  validateCoupon,
  getCustomerDiscount,
  getAvailableRoomQtyByRoomId,
  pay,
  paymentStatusByBookingId,
  getBookingByUserId,
  getCurrentBookingByUserId,
  getPastBookingByUserId,
  saveHotelById,
}
