import React, { Component } from 'react'
import HotelHeader from '../../Layouts/HotelHeader/hotelHeader.js'
import BookingCusDetails from '../../Layouts/PersonalDetails/BookingCusDetails.js'
import Footer from '../../Layouts/Footer/footer.js'

import '../../Assets/styles/css/Layouts/CustomerDetails.css'

class CustomerDetails extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <HotelHeader />
        <div class='container-fluid step-indicator'>
          <br />
          <br />
          <ul class='list-unstyled multi-steps'>
            <li>Select your room</li>
            <li class='is-active'>Enter your details</li>
            <li>Finalize your pay ?</li>
          </ul>
        </div>
        <div className='person-details-container'>
          <BookingCusDetails />
        </div>
        <Footer />
      </div>
    )
  }
}

export default CustomerDetails
