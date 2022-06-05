import React, { useState, useRef, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { getAllImagesByRoomId } from '../../Services/Api/Utilities/index.js'
import '../../Assets/styles/css/Components/souvenir.css'

const SplideSlider = ({ roomId }) => {
  const [images, setRoomImages] = useState(null)
  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    const dataModel = {
      id: roomId,
    }
    await getAllImagesByRoomId(dataModel)
      .then((res) => {
        try {
          if (res.data.length == 0) {
            setRoomImages(null)
          } else {
            setRoomImages(res.data)
          }
        } catch (e) {
          setRoomImages(null)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <>
        {images != null ? (
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
        ) : (
          <>
            <div class='alert alert-primary' role='alert'>
              Nothing to display.
            </div>
          </>
        )}
      </>
    </>
  )
}

export default SplideSlider
