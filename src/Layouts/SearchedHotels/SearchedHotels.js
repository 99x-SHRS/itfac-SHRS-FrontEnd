import React, { Component } from 'react'

import PriceRange from '../leftSideBar/priceRange'
import StartFilter from '../leftSideBar/startFilter'
import HotelCard from '../../Components/SearchedHotelCard/hotelCard'

import Hotel_1 from '../../Assets/images/hotels/hotel1.jpg'
import Hotel_2 from '../../Assets/images/hotels/hotel2.jpg'
import Hotel_3 from '../../Assets/images/hotels/hotel3.jpg'
import Hotel_4 from '../../Assets/images/hotels/hotel4.jpg'

import '../../Assets/styles/css/Layouts/searchedHotels.css'

const hotelData = [
  {
    name: 'Avenra Beach Hotel',
    description:
      '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
    province: 'Galle',
    stars: 4,
    image: Hotel_1,
    price: 3500,
  },
  {
    name: 'Hareesha Cabana',
    description:
      '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
    image: Hotel_2,
    stars: 2,
    province: 'Galle',
    price: 2700,
  },
  {
    name: 'Jetwings Family Restorent',
    description:
      '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
    image: Hotel_3,
    stars: 3,
    province: 'Galle',
    price: 5500,
  },
  {
    name: 'SunQueen',
    description:
      '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
    image: Hotel_4,
    stars: 1,
    province: 'Galle',
    price: 7500,
  },
  {
    name: 'SunQueen',
    description:
      '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
    image: Hotel_4,
    stars: 5,
    province: 'Galle',
    price: 3200,
  },
]
class SearchedHotels extends Component {
  render() {
    return (
      <div>
        <div className='searched-hotel-container hotels bg-light  pt-2 rounded b-1'>
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
              {hotelData.map((hotel, index) => {
                return <HotelCard hotel={hotel} />
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchedHotels
