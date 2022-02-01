import React, { Component } from 'react'
import SearchedHotel from '../../Components/searchedHotel/searchedHotel'
import SideSearchbar from '../../Components/SideSearchbar/SideSearchbar'
import '../../Assets/styles/css/Layouts/searchedHotels.css'
import InputSlider from '../../Components/InputSlider/inputSlider'
import Hotel_1 from '../../Assets/images/hotels/hotel1.jpg'
import Hotel_2 from '../../Assets/images/hotels/hotel2.jpg'
import Hotel_3 from '../../Assets/images/hotels/hotel3.jpg'
import Hotel_4 from '../../Assets/images/hotels/hotel4.jpg'
import PriceRange from '../leftSideBar/priceRange'
import StartFilter from '../leftSideBar/startFilter'
const hotelData = [
  {
    name: 'Avenra Beach Hotel',
    description:
      '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
    province: 'Galle',
    image: Hotel_1,
  },
  {
    name: 'Hareesha Cabana',
    description:
      '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
    image: Hotel_2,
    province: 'Galle',
  },
  {
    name: 'Jetwings Family Restorent',
    description:
      '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
    image: Hotel_3,
    province: 'Galle',
  },
  {
    name: 'SunQueen',
    description:
      '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
    image: Hotel_4,
    province: 'Galle',
  },
  {
    name: 'SunQueen',
    description:
      '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
    image: Hotel_4,
    province: 'Galle',
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
                <div>
                  <b>Filter By</b>
                </div>
                <PriceRange />
                <StartFilter />
              </div>
            </div>
            <div className='col-10 col-md-9 searched-hotel'>
              {hotelData.map((hotel, index) => {
                return <SearchedHotel hotel={hotel} />
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchedHotels
