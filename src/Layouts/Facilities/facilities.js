import React, { Component, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  getFacilityTypesByHotelId,
  getAllFacilitiesByHotelId,
} from '../../Services/Api/Utilities'
import '../../Assets/styles/css/Layouts/facilities.css'
const facilitiess = [
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
]

const Facilities = () => {
  const [searchedParams, setSearchedparams] = useSearchParams()
  const [hotel, setHotel] = useState(null)
  const [facilities, setFacilities] = useState(null)
  const [facilityTypes, setFacilityTypes] = useState(null)

  useEffect(() => {
    setHotel(searchedParams.get('hotel') || '')
    if (hotel != null) {
      getFacilites()
      getFacilityTypes()
    }
  }, [])

  const getFacilites = async () => {
    const dataModel = {
      hotelId: hotel,
    }
    await getFacilityTypesByHotelId(dataModel)
      .then((res) => {
        // console.log(res.data)
        setFacilities(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getFacilityTypes = async () => {
    const dataModel = {
      id: hotel,
    }
    await getAllFacilitiesByHotelId(dataModel)
      .then((res) => {
        // console.log(res.data)
        setFacilityTypes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className='mt-4 pt-4' id='hotel-facilities'>
      <h3>Facilities of Furnished apartment at Nawala</h3>
      <div className='container mt-3'>
        <div className='row mb-3 '>
          <div className='col-md-4  '>
            <div className='facility-header'>
              <i class='fas fa-parking'></i>
              <p>Parking</p>
            </div>
            <div className='mt-2 '>
              <p>
                Free private parking is available on site (reservation is not
                needed).
              </p>
              <div className='mt-2'>
                {facilitiess.map((facility, index) => {
                  return (
                    <div className='m-1'>
                      <i class='fa-solid fa-check'></i>
                      <span className='ml-2'>{facility}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='col-md-4  '>
            <div className='facility-header'>
              <div className='facility-header'>
                <i class='fa-solid fa-wifi'></i>
                <p>WIFI</p>
              </div>
            </div>

            <div>
              <p>WiFi is available in all areas and is free of charge.</p>
              <div className='mt-2'>
                {facilitiess.map((facility, index) => {
                  return (
                    <div className='m-1'>
                      <i class='fa-solid fa-check'></i>
                      <span className='ml-2'>{facility}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='col-md-4  '>
            <div className='facility-header'>
              <i class='fa-solid fa-utensils'></i>
              <p>Food & Drink</p>
            </div>
            <div>
              <p>WiFi is available in all areas and is free of charge.</p>
              <div className='mt-2'>
                {facilitiess.map((facility, index) => {
                  return (
                    <div className='m-1'>
                      <i class='fa-solid fa-check'></i>
                      <span className='ml-2'>{facility}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facilities
