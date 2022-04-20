import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListedHotels from '../Pages/Seller/Hotels/ListedHotels.js'
import RegisterHotel from '../Layouts/ListingHotel/RegisterHotel.js'
const SellerRoutes = (
  <>
    <Route exact path='/seller/hotels' element={<ListedHotels />}></Route>
    <Route
      exact
      path='/seller/hotel/register'
      element={<RegisterHotel />}
    ></Route>
  </>
)

export default SellerRoutes
