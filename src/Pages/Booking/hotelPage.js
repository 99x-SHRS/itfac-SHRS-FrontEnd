import React, { Component } from 'react'
import HotelHeader from '../../Layouts/HotelHeader/hotelHeader.js'
import HotelDescription from '../../Layouts/HotelDescription/hotelDescription.js'
import Souvenir from '../../Components/Carousel/souvenir'
import HotelPageTabs from '../../Components/HotelPageTabs/hotelPageTabs.js'
import RoomTypeSelector from '../../Components/RoomTypeSelector/roomTypeSelector.js'
import Facilities from '../../Layouts/Facilities/facilities.js'
import Review from '../../Layouts/Reviews/review.js'
import HotelLocation from '../../Layouts/Location/hotelLocation.js'
import Footer from '../../Layouts/Footer/footer.js'

import '../../Assets/styles/css/Pages/hotelPage.css'
class hotelPage extends Component {
  render() {
    return (
      <div>
        <HotelHeader />
        <div className='container hotel-room-seletor-container'>
          <Souvenir />
          <HotelPageTabs />
          <HotelDescription />
          <RoomTypeSelector />
          <Facilities />
          <Review />
          <HotelLocation />
        </div>

        <Footer />
      </div>
    )
  }
}

export default hotelPage
