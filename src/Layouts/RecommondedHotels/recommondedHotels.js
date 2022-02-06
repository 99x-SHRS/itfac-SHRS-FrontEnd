import React from 'react'
import HotelCard from '../../Components/HotelCard/HotelCard'

import Hotel_1 from '../../Assets/images/hotels/hotel1.jpg'
import Hotel_2 from '../../Assets/images/hotels/hotel2.jpg'
import Hotel_3 from '../../Assets/images/hotels/hotel3.jpg'
import Hotel_4 from '../../Assets/images/hotels/hotel4.jpg'

const Recommendeds = () => {
  ///call the api ->return JSON

  const hotelData = [
    {
      name: 'Avenra',
      description:
        '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
      image: Hotel_1,
    },
    {
      name: 'Hareesha',
      description:
        '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
      image: Hotel_2,
    },
    {
      name: 'Jetwings',
      description:
        '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
      image: Hotel_3,
    },
    {
      name: 'SunQueen',
      description:
        '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates officiis suscipit sed a distinctio facilis similique ratione animi voluptas?',
      image: Hotel_1,
    },
  ]

  return (
    <div className='container'>
      <div className='mb-5 mt-5'>
        <h2>Recommonded from us</h2>
      </div>
      <div className='row '>
        {hotelData.map((hotel, index) => {
          return (
            <div class='col-6 col-md-3 '>
              <HotelCard hotel={hotel} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Recommendeds
