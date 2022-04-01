import React, { useEffect, useState } from 'react'
import HotelCard from '../../Components/HotelCard/HotelCard'

import Hotel_1 from '../../Assets/images/hotels/hotel1.jpg'
import Hotel_2 from '../../Assets/images/hotels/hotel2.jpg'
import Hotel_3 from '../../Assets/images/hotels/hotel3.jpg'
import Hotel_4 from '../../Assets/images/hotels/hotel4.jpg'

import { getAllHotels } from '../../Services/Api/Utilities/index.js'

const Recommendeds = () => {
  ///call the api ->return JSON
  const [recommondedHotel, setRecommondedHotel] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0)
    pageOnLoad()
  }, [])

  const pageOnLoad = async () => {
    const recommondedData = await getAllHotels()

    setRecommondedHotel(recommondedData.data.slice(0, 4))
    console.log(recommondedHotel)
  }

  return (
    <div className='container'>
      <div className='mb-5 mt-5'>
        <h2>Recommonded from us</h2>
      </div>
      <div className='row '>
        {recommondedHotel.map((hotel, index) => {
          return (
            <div class='col-6 col-lg-3 '>
              <HotelCard hotel={hotel} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Recommendeds
