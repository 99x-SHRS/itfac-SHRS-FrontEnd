import React, { useState, useRef, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { getAllImagesByRoomId } from '../../Services/Api/Utilities/index.js'
import '../../Assets/styles/css/Components/souvenir.css'

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
        console.log(err)
      })
  }
  return (
    <>
      <Splide
        options={{
          rewind: false,
          perPage: 2,
          perMove: 2,
          gap: 1,
          padding: '2px',
          pagination: false,
          breakpoints: {
            623: {
              perPage: 2,
              perMove: 2,
            },
            935: {
              perPage: 2,
              perMove: 2,
            },
            1247: {
              perPage: 2,
              perMove: 2,
            },
          },
        }}
      >
        {images.map((item) => {
          return (
            <SplideSlide className='slide souvenir-images'>
              <img src={item.image} />
            </SplideSlide>
          )
        })}
      </Splide>
    </>
  )
}

export default SplideSlider
