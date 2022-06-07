import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from '../Pages/Home/dashboard'
import Hotels from '../Pages/Hotels/hotels'
import HotelPage from '../Pages/Booking/hotelPage'
import AddingVAS from '../Pages/Booking/AddingVAS'
import CustomerDetails from '../Pages/Booking/CustomerDetails'
import Payment from '../Pages/Booking/Payment.js'
import SavedHotel from '../Pages/Saved/savedHotel'
import BookingHistory from '../Pages/BookingHistory/bookingHistory.js'
import BookingDetails from '../Layouts/BookingHistroy/bookingDetails'
import LoyaltyDescription from '../Pages/Loyalty/loyaltyDescription'
import SharedSignUp from '../Pages/SharedSignUp/SharedSignUp'
import MyAccount from '../Pages/Account/MyAccount'
import Review from '../Pages/Account/Review'
const UserRoutes = (
  <>
    <Route exact path='/' element={<Dashboard />}></Route>
    <Route path='/hotels' element={<Hotels />}></Route>
    <Route path='/hotel/page' element={<HotelPage />}></Route>
    <Route path='/booking/vas' element={<AddingVAS />}></Route>
    <Route path='/booking/details' element={<CustomerDetails />}></Route>
    <Route exact path='/payment' element={<Payment />}></Route>
    <Route exact path='/saved-hotel' element={<SavedHotel />}></Route>
    <Route exact path='/booking-history' element={<BookingHistory />}></Route>
    <Route path='/booking-history/details' element={<BookingDetails />}></Route>
    <Route
      exact
      path='/loyalty-program'
      element={<LoyaltyDescription />}
    ></Route>
    <Route path='/share' element={<SharedSignUp />}></Route>
    <Route exact path='/my-account' element={<MyAccount />}></Route>
    <Route exact path='/my-account/review' element={<Review />}></Route>
  </>
)

export default UserRoutes
