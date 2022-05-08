import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HotelCard from '../../Components/HotelCard/HotelCard'

const Recommendeds = (hotels) => {
  useEffect(() => {
    console.log(hotels.hotels)
  }, [])
  return (
    <div className='container'>
      <div className='mb-5 mt-5'>
        <h2>Recommonded from us</h2>
      </div>
      <div className='row '>
        {hotels.length != 0 ? (
          hotels.hotels.map((item, index) => {
            console.log(item)
            return (
              <div class='col-6 col-lg-3 '>
                <Link to={'/'}>
                  <HotelCard hotel={item.hotel} />
                </Link>
              </div>
            )
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
export default Recommendeds
