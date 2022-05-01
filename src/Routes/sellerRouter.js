import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListedHotels from '../Pages/Seller/Hotels/ListedHotels.js'
import RegisterHotel from '../Layouts/ListingHotel/RegisterHotel.js'
import UploadImage from '../Layouts/ListingHotel/UploadImage.js'
import UploadSouvenirImage from '../Layouts/ListingHotel/UploadSouvenirImage.js'
import AddValueAddedServices from '../Layouts/ListingHotel/AddValueAddedServices.js'
import RegisterRoom from '../Layouts/ListingRoom/RegisterRoom.js'
import ListingRoomType from '../Layouts/ListingRoomType/ListingRoomType.js'
import ListedRooms from '../Layouts/ListingRoom/ListedRooms.js'
import AddRoomImage from '../Layouts/ListingRoom/AddRoomImage.js'
const SellerRoutes = (
  <>
    <Route exact path='/seller/hotels' element={<ListedHotels />}></Route>
    <Route
      exact
      path='/seller/hotel/register'
      element={<RegisterHotel />}
    ></Route>
    <Route exact path='/seller/hotel/image' element={<UploadImage />}></Route>
    <Route
      exact
      path='/seller/hotel/souvenir'
      element={<UploadSouvenirImage />}
    ></Route>
    <Route
      exact
      path='/seller/hotel/value-added-services'
      element={<AddValueAddedServices />}
    ></Route>
    <Route
      exact
      path='/seller/hotel/:hotelId/create-room'
      element={<RegisterRoom />}
    ></Route>
    <Route
      exact
      path='/seller/hotel/:hotelId/roomtype'
      element={<ListingRoomType />}
    ></Route>
    <Route
      exact
      path='/seller/hotel/:hotelId/rooms'
      element={<ListedRooms />}
    ></Route>
    <Route
      exact
      path='/seller/:hotelId/room/upload-image'
      element={<AddRoomImage />}
    ></Route>
    {/* <Route
      exact
      path='/seller/:hotelId/room/upload-image'
      element={<AddRoomImage />}
    ></Route> */}
  </>
)

export default SellerRoutes
