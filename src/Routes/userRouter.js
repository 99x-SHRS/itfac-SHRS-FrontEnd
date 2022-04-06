import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from '../Pages/Home/dashboard'
import Hotels from '../Pages/Hotels/hotels'
import HotelPage from '../Pages/Booking/hotelPage'
import CustomerDetails from '../Pages/Booking/CustomerDetails'
import Payment from '../Pages/Booking/Payment.js'
import SavedHotel from '../Pages/Saved/savedHotel'
import BookingHistory from '../Pages/BookingHistory/bookingHistory.js'
import BookingDetails from '../Layouts/BookingHistroy/bookingDetails'
import LoyaltyDescription from '../Pages/Loyalty/loyaltyDescription'
// /hotels/:location/:checkin/:checkout/:adults/:children/:rooms
const UserRoutes = (
  <>
    <Route exact path='/' element={<Dashboard />}></Route>
    <Route path='/hotels' element={<Hotels />}></Route>
    <Route path='/hotel/page' element={<HotelPage />}></Route>
    <Route
      exact
      path='/booking/:id/details'
      element={<CustomerDetails />}
    ></Route>
    <Route
      exact
      path='/booking/:id/details/payment'
      element={<Payment />}
    ></Route>
    <Route exact path='/saved-hotel' element={<SavedHotel />}></Route>
    <Route exact path='/booking-history' element={<BookingHistory />}></Route>
    <Route
      exact
      path='/booking-history/details'
      element={<BookingDetails />}
    ></Route>

    <Route
      exact
      path='/loyalty-program'
      element={<LoyaltyDescription />}
    ></Route>
  </>
)

export default UserRoutes
