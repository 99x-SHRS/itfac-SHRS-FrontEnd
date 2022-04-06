import React, { useState, useRef, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { getAllImagesByRoomId } from '../../Services/Api/Utilities/index.js'
import '../../Assets/styles/css/Components/souvenir.css'

const initialItems = Array.apply(null, Array(6)).map(
  (value, index) => index + 1
)

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

const SplideSlider = ({ roomId }) => {
  const [items, setItems] = useState(initialItems)
  useEffect(() => {
    console.log(roomId)
  }, [roomId])
  // const getImages=()=>{]
  // getAllImagesByRoomId
  // }
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
        {items.map((item) => {
          return (
            <SplideSlide key={item} className='slide'>
              <img
                src={`https://source.unsplash.com/random/400x500?sig=${item}`}
                alt={`${item}`}
              />
            </SplideSlide>
          )
        })}
      </Splide>
    </>
  )
}

export default SplideSlider
