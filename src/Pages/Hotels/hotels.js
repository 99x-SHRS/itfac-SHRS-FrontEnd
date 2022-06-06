import React, { Component, useEffect, useState } from 'react'
import HotelHeader from '../../Layouts/Header/hotelHeader.js'
import SearchedHotels from '../../Layouts/SearchedHotels/SearchedHotels.js'
import Searchbox from '../../Components/Searchbar/index.js'
import Footer from '../../Layouts/Footer/footer.js'
import '../../Assets/styles/css/pages/hotels.css'

const Hotels = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <HotelHeader />
      <div className='hotel-container hotels '>
        {/* <div className='hotel-searchbox secondary-searchbox'>
          <Searchbox />
        </div> */}
        <div className='p-1'>
          <SearchedHotels />
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Hotels
