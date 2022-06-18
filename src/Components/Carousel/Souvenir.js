import React, { Component, useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { getAllsouvenirByHotelId } from '../../Services/Api/Utilities/Index.js'
import image_1 from '../../Assets/images/property-types/luxary.jpg'
import image_2 from '../../Assets/images/property-types/kabana.jpg'
import image_3 from '../../Assets/images/property-types/villa.jpg'
import image_4 from '../../Assets/images/property-types/bangalow.jpg'
import image_5 from '../../Assets/images/property-types/guest-houses.jpg'

import '../../Assets/styles/css/Components/souvenir.css'

const Souvenir = () => {
  const [souvenirs, setSouvenirs] = useState(null)

  useEffect(() => {
    getSouvenir()
  }, [])

  const getSouvenir = async () => {
    const dataModal = {
      id: 24,
    }
    await getAllsouvenirByHotelId(dataModal)
      .then((res) => {
        console.log(res)
        setSouvenirs(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='souvenir-carousol'>
      <div className='souvenir-container mt-5 '>
        <Carousel fade>
          {souvenirs != null ? (
            souvenirs.map((item) => {
              return (
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={item.image}
                    alt='First slide'
                  />
                  <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.subTitle}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })
          ) : (
            <></>
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default Souvenir
