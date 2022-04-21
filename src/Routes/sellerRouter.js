import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListedHotels from '../Pages/Seller/Hotels/ListedHotels.js'
import RegisterHotel from '../Layouts/ListingHotel/RegisterHotel.js'
import UploadImage from '../Layouts/ListingHotel/UploadImage.js'
import UploadSouvenirImage from '../Layouts/ListingHotel/UploadSouvenirImage.js'
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
  </>
)

export default SellerRoutes
