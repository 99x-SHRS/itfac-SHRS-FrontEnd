import React, { Component, useEffect, useState } from 'react'
import { searchHotels } from '../../Services/Api/Utilities/index.js'
import PriceRange from '../leftSideBar/priceRange'
import StartFilter from '../leftSideBar/startFilter'
import HotelCard from '../../Components/SearchedHotelCard/hotelCard'

import Hotel_1 from '../../Assets/images/hotels/hotel1.jpg'
import Hotel_2 from '../../Assets/images/hotels/hotel2.jpg'
import Hotel_3 from '../../Assets/images/hotels/hotel3.jpg'
import Hotel_4 from '../../Assets/images/hotels/hotel4.jpg'

import '../../Assets/styles/css/Layouts/searchedHotels.css'
import { useSearchParams } from 'react-router-dom'

const SearchedHotels = (props) => {
  const [searchedParams, setSearchedparams] = useSearchParams()
  let [hotels, setHotels] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const dataModel = {
        location: searchedParams.get('location') || '',
        checkInDate: searchedParams.get('checkin-date') || '',
        checkOutDate: searchedParams.get('checkout-date') || '',
        adult: searchedParams.get('adults') || '',
        children: searchedParams.get('children') || '',
        rooms: searchedParams.get('rooms') || '',
      }
      await searchHotels(dataModel).then((data) => {
        setHotels(data.data)
      })
    }
    fetchData()
  }, [hotels.length])

  return (
    <div>
      <div className='searched-hotel-container hotels   pt-2 rounded b-1'>
        <div className='row'>
          <div className='col-lg-3 left-side-bar'>
            <div class='card p-3 left-container'>
              <div className='mb-3'>
                <b>Filter By</b>
              </div>
              <div className='mb-3'>
                <PriceRange />
              </div>
              <div>
                <StartFilter />
              </div>
            </div>
          </div>
          <div className=' col-md-9 searched-hotel'>
            {hotels.map((hotel, index) => {
              return <HotelCard hotelData={hotel} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchedHotels
