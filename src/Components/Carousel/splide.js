import React, { useState, useRef, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { getAllImagesByRoomId } from '../../Services/Api/Utilities/index.js'
import '../../Assets/styles/css/Components/souvenir.css'

const souvenirs1 = [
  {
    image: '/images/property-types/kabana.jpg',
  },
  {
    image: '/images/property-types/villa.jpg',
  },
  {
    image: '/images/property-types/villa.jpg',
  },
  {
    image: '/images/property-types/bangalow.jpg',
  },
  {
    image: '/images/property-types/guest-houses.jpg',
  },
  {
    image: '/images/property-types/guest-houses.jpg',
  },
  {
    image: '/images/property-types/guest-houses.jpg',
  },
]

const SplideSlider = ({ roomId }) => {
  const [images, setRoomImages] = useState([])
  useEffect(() => {
    getImages()
  }, [roomId])

  useEffect(() => {
    getImages()
  }, [images.length])

  const getImages = async () => {
    const dataModel = {
      id: roomId,
    }
    await getAllImagesByRoomId(dataModel)
      .then((res) => {
        setRoomImages(res.data)
      })
      .catch((err) => {
        setRoomImages(souvenirs1)
      })
  }
  return (
    <>
      <Splide
        options={{
          rewind: false,
          perPage: 5,
          perMove: 5,
          gap: 20,
          padding: '3rem',
          pagination: false,
          breakpoints: {
            623: {
              perPage: 2,
              perMove: 2,
            },
            935: {
              perPage: 3,
              perMove: 3,
            },
            1247: {
              perPage: 4,
              perMove: 4,
            },
          },
        }}
      >
        {images.map((item) => {
          return (
            <SplideSlide className='slide'>
              <img src={item.image} />
            </SplideSlide>
          )
        })}
      </Splide>
    </>
  )
}

export default SplideSlider
