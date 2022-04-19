import React from 'react'
import Navbars from '../../../Components/Navbar/navbar'
import InfomationCard from '../../../Components/Cards/InfomationCard'
import CardMyHotel from '../../../Components/Cards/CardMyHotel'
import Footer from '../../../Layouts/Footer/footer'

import '../../../Assets/styles/css/Seller/Pages/listedHotel.css'
const ListedHotels = () => {
  return (
    <div>
      <Navbars />
      <div className='hotel-listing-container'>
        <InfomationCard />
        <div className='hotel-heading mt-3'>
          <i class='fa-solid fa-hotel'></i>
          <h3>Your hotels</h3>
        </div>
        <div className='row mt-5'>
          <div class=' col-lg-3 col-sm-12 col-md-6 mt-1 '>
            <CardMyHotel />
          </div>
          <div class=' col-lg-3 col-sm-12 col-md-6  mt-1 '>
            <CardMyHotel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListedHotels
