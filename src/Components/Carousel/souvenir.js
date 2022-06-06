import React, { Component, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'

import { getAllsouvenirByHotelId } from '../../Services/Api/Utilities'
import image_1 from '../../Assets/images/property-types/luxary.jpg'
import image_2 from '../../Assets/images/property-types/kabana.jpg'
import image_3 from '../../Assets/images/property-types/villa.jpg'
import image_4 from '../../Assets/images/property-types/bangalow.jpg'
import image_5 from '../../Assets/images/property-types/guest-houses.jpg'

import '../../Assets/styles/css/components/souvenir.css'

const Souvenir = () => {
  const [searchedParams, setSearchedparams] = useSearchParams()
  const [images, setImages] = useState(null)

  useEffect(() => {
    console.log(images != null)
    getSouviners()
  }, [])

  const getSouviners = async () => {
    const dataModel = {
      id: searchedParams.get('hotel') || '',
    }
    await getAllsouvenirByHotelId(dataModel)
      .then((res) => {
        console.log(res)
        setImages(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className='souvenir-carousol'>
      <div className='souvenir-container mt-5 '>
        <Carousel fade>
          {images != null ? (
            <>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={image_1}
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </>
          ) : (
            <>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={image_1}
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </>
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default Souvenir
