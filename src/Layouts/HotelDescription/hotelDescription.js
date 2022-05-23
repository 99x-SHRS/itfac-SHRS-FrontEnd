import React, { Component, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getHotelById } from '../../Services/Api/Utilities'
import '../../Assets/styles/css/Components/hotelPageTabs.css'

const HotelDescription = () => {
  const [searchedParams, setSearchedparams] = useSearchParams()
  const [hotelDetails, setHotelDetails] = useState()
  useEffect(() => {
    getHotelDetails()
  }, [])
  const getHotelDetails = async () => {
    const dataModal = {
      id: searchedParams.get('hotel') || '',
    }
    await getHotelById(dataModal)
      .then((res) => {
        console.log(res.data[0])
        setHotelDetails(res.data[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='hotelDescription-container' id='hotel-description'>
      <div className='mt-4 p-2 '>
        <h2>Stay in the {hotelDetails.name}</h2>
        <div>
          <br />
          <br />
          <p>{hotelDetails.description}</p>
          <br />
          <br />

          <br />
          <br />
          <p className='booknow-description'>
            <b>
              {hotelDetails.name} has been welcoming BookNow.LK guests since
              {' ' + hotelDetails.createdAt.split('-')[0]}
            </b>
          </p>
          <br />
          <br />
          <h3>Most popular facilities </h3>
          <div className='facilities-container text-center mt-4  '>
            <i class='fa-solid fa-person-swimming'>
              <div>Swimming Pool</div>
            </i>
            <i class='fa-solid fa-spa'>
              <div>Spa</div>
            </i>
            <i class='fa-solid fa-square-parking'>
              <div>Free parking</div>
            </i>
            <i class='fa-solid fa-champagne-glasses'>
              <div>Bar</div>
            </i>
            <i class='fa-solid fa-handshake-angle'>
              <div>Room service</div>
            </i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelDescription
