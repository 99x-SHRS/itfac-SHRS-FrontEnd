import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Layouts/Footer/footer'
import HotelCard from '../../Components/HotelCard/HotelCard'
import SavedHotelCard from '../../Components/SavedHotel/savedHotelCard'

import Hotel_1 from '../../Assets/images/hotels/hotel1.jpg'
import Hotel_2 from '../../Assets/images/hotels/hotel2.jpg'
import Hotel_3 from '../../Assets/images/hotels/hotel3.jpg'
import Hotel_4 from '../../Assets/images/hotels/hotel4.jpg'
const hotelData = [
  {
    name: 'Avenra',
    description:
      '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
    image: Hotel_1,
    createAt: '1 minutes ago',
  },
  {
    name: 'Hareesha',
    description:
      '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
    image: Hotel_2,
    createAt: '1 days ago',
  },
  {
    name: 'Jetwings',
    description:
      '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
    image: Hotel_3,
    createAt: '4 days ago',
  },
  {
    name: 'SunQueen',
    description:
      '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
    image: Hotel_1,
    createAt: '1 month ago',
  },
]
class SavedHotel extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container ' style={{ marginTop: '8rem' }}>
          <h2 className='mb-3'>Saved Hotels</h2>
          <div className='row '>
            {hotelData.map((hotel, index) => {
              return (
                <div class='col-6 col-lg-3  '>
                  <SavedHotelCard hotel={hotel} />
                </div>
              )
            })}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default SavedHotel
