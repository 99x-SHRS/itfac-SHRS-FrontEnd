import React, { Component } from 'react'
import RoomImages from '../../Components/RoomTypeSelector/roomImages'
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
    price: 12500,
    noRooms: 3,
  },
  {
    name: 'Hareesha',
    sleeps: 2,
    price: 12500,
    noRooms: 2,
  },
  {
    name: 'Jetwings',
    sleeps: 3,
    price: 12500,
    noRooms: 1,
  },
  {
    name: 'SunQueen',
    sleeps: 2,
    price: 12500,
    noRooms: 3,
  },
]
function calculatePrice(e) {
  alert(e.target.value)
}

class RoomSelection extends Component {
  render() {
    return (
      <div className='room-selection'>
        <div class='room-selection-container'>
          <ul class='responsive-table'>
            <li class='table-header'>
              <div class=' col-5 '>Room</div>
              <div class=' col-2'>Sleeps</div>
              <div class=' col-2'>Today Price</div>
              <div class=' col-1'>Rooms</div>
              <div class=' col-2'>Status</div>
            </li>

            {hotelData.map((hotel, index) => {
              return (
                <li class='table-row'>
                  <div class=' col-5'>
                    <RoomImages souvenirs={souvenirs1} />
                  </div>
                  <div class=' col-2'>
                    <div className='verticle-center'>
                      {[...Array(hotel.sleeps)].map((elementInArray, index) => (
                        <i key={index} class='fas fa-bed m-1'></i>
                      ))}
                    </div>
                  </div>

                  <div class=' col-2'>
                    <div className='room-price verticle-center'>
                      Rs.{hotel.price}
                    </div>
                  </div>
                  <div class=' col-1' data-label='Payment Status'>
                    <div className='verticle-center no-rooms'>
                      <select
                        class='mdb-select '
                        searchable='Search here..'
                        onChange={calculatePrice}
                      >
                        {[...Array(hotel.noRooms)].map(
                          (elementInArray, index) => (
                            <option key={index} value={index}>
                              {index}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                  <div class=' col-2' data-label='Payment Status'>
                    <div className='verticle-center'>
                      <button className='reserve-button'>Reserve</button>
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
}

export default RoomSelection
