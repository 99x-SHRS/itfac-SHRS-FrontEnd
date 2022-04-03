import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RoomImages from '../../Components/RoomTypeSelector/roomImages'
import HorizontalLine from '../../Components/HorizontalLine/horizontalLine'

import '../../Assets/styles/css/Layouts/roomSelection.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const souvenirs1 = [
  {
    path: '/images/property-types/kabana.jpg',
  },
  {
    path: '/images/property-types/villa.jpg',
  },
  {
    path: '/images/property-types/villa.jpg',
  },
  {
    path: '/images/property-types/bangalow.jpg',
  },
  {
    path: '/images/property-types/guest-houses.jpg',
  },
  {
    path: '/images/property-types/guest-houses.jpg',
  },
  {
    path: '/images/property-types/guest-houses.jpg',
  },
]
const souvenirs2 = [
  {
    path: '/images/property-types/kabana.jpg',
  },
  {
    path: '/images/property-types/kabana.jpg',
  },
  {
    path: '/images/property-types/villa.jpg',
  },
  {
    path: '/images/property-types/bangalow.jpg',
  },
  {
    path: '/images/property-types/guest-houses.jpg',
  },
  {
    path: '/images/property-types/guest-houses.jpg',
  },
  {
    path: '/images/property-types/guest-houses.jpg',
  },
]
const hotelData = [
  {
    name: 'Avenra',
    sleeps: 1,
    price: 1000,
    noRooms: 3,
    disount: 0.1,
    attributes: [
      'Pool',
      'Pub',
      'DJ',
      'Air conditioning',
      'Private Bathroom',
      'Flat-screen',
      'Refrigerator',
      'Fan',
    ],
  },
  {
    name: 'Hareesha',
    sleeps: 2,
    price: 1200,
    noRooms: 2,
    disount: 0.4,
    attributes: [
      'Pool',
      'Pub',
      'DJ',
      'Air conditioning',
      'Private Bathroom',
      'Flat-screen',
      'Refrigerator',
      'Fan',
    ],
  },
  {
    name: 'Jetwings',
    sleeps: 3,
    price: 1300,
    noRooms: 1,
    disount: 0.2,
    attributes: [
      'Pool',
      'Pub',
      'DJ',
      'Air conditioning',
      'Private Bathroom',
      'Flat-screen',
      'Refrigerator',
      'Fan',
    ],
  },
  {
    name: 'SunQueen',
    sleeps: 2,
    price: 1500,
    noRooms: 3,
    disount: 0.0,
    attributes: [
      'Pool',
      'Pub',
      'DJ',
      'Air conditioning',
      'Private Bathroom',
      'Flat-screen',
      'Refrigerator',
      'Fan',
    ],
  },
]

function calculatePrice(e, price) {
  // alert(e.target.value)
  // alert(price)
}

const RoomSelection = () => {
  const [room, setRoom] = useState(-1)
  const [roomQty, setRoomQty] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    console.log('re rendered')
  }, [])

  return (
    <div className='room-selection'>
      <div class='room-selection-container'>
        <ul class='responsive-table'>
          <li class='table-header bg-primary text-white'>
            <div class='col-sm-12 col-md-4'>Room</div>
            <div class='col-sm-12 col-md-1'>Sleeps</div>
            <div class='col-sm-12 col-md-2'>Price per night</div>
            <div class='col-sm-12 col-md-1'>Rooms</div>
            <div class='col-sm-12 col-md-4'>Benefits</div>
          </li>

          {hotelData.map((hotel, hotelId) => {
            return (
              <li class='table-row border border-dark'>
                <div class='col-sm-12 col-md-4  mb-3 '>
                  <img src={souvenirs1[0].path} alt='' />
                  <RoomImages souvenirs={souvenirs1} />
                </div>
                <div class='col-sm-12 col-1  mb-3 bed-icon'>
                  <div className='verticle-center'>
                    {[...Array(hotel.sleeps)].map((elementInArray, index) => (
                      <i key={index} class='fas fa-bed m-1'></i>
                    ))}
                  </div>
                </div>

                <div class='col-sm-12 col-md-2 mb-3'>
                  <div className='prices-container'>
                    {hotel.disount != 0 ? (
                      <div className='save-today'>
                        Save {hotel.disount * 100} % Today
                      </div>
                    ) : (
                      ''
                    )}
                    {hotel.disount != 0 ? (
                      <del>
                        <div class='or-amount'>Rs.{hotel.price}</div>
                      </del>
                    ) : (
                      ''
                    )}

                    <div className='room-price'>
                      Rs.{hotel.price * (1 - hotel.disount)}
                    </div>
                  </div>
                </div>
                <div
                  class='col-sm-12 col-md-1  mb-3'
                  data-label='Payment Status'
                >
                  <div className='verticle-center no-rooms'>
                    <select
                      class='mdb-select '
                      searchable='Search here..'
                      onChange={(e) => {
                        // calculatePrice(e, hotel.price)
                        setRoom(hotelId)
                        setRoomQty(e.target.value)
                      }}
                    >
                      {[...Array(hotel.noRooms)].map((elementInArray, index) =>
                        room == hotelId || room == -1 || roomQty == 0 ? (
                          <option key={index} value={index}>
                            {index}
                          </option>
                        ) : (
                          <option key={index} value={index} disabled>
                            {index}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
                <div
                  class='col-sm-12 col-md-4  mb-3'
                  data-label='Payment Status'
                >
                  Your price includes:
                  <div className='services'>
                    {hotel.attributes.map((service, index) => {
                      return (
                        <div className='sleep-container'>
                          <i class='fa-solid fa-check mr-3'>
                            <div className='service-name'>{service}</div>
                          </i>
                        </div>
                      )
                    })}
                    <HorizontalLine />
                  </div>
                  {roomQty != 0 && hotelId == room ? (
                    <div>
                      <div className='tot-price'>
                        You can reserve this property today Rs.
                        {hotel.price * (1 - hotel.disount) * roomQty}
                      </div>
                      <HorizontalLine />
                      <br />
                    </div>
                  ) : (
                    ''
                  )}
                  <div>
                    {hotelId == room && roomQty != 0 ? (
                      <button className='reserve-button'>
                        <Link to='/booking/5789/details'>
                          <a href='#second-page'>Reserve</a>
                        </Link>
                      </button>
                    ) : (
                      <button className='reserve-button' disabled>
                        Reserve
                      </button>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default RoomSelection
