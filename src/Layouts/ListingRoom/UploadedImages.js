import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import DarkOverlaybackGround from '../../Components/DarkOverlaybackGround/DarkOverlaybackGround'
import { getAllImagesByRoomId } from '../../Services/Api/Utilities'
const UploadedImages = ({ loading }) => {
  useEffect(() => {
    getImages()
  }, [loading])
  const navigate = useNavigate()
  const params = useParams()
  const [searchedParams, setSearchedparams] = useSearchParams()
  const [images, setImages] = useState([])
  const [created, setCreated] = useState(false)
  const getImages = async () => {
    const dataModel = {
      id: searchedParams.get('id') || '',
    }
    await getAllImagesByRoomId(dataModel)
      .then((res) => {
        console.log(res)
        setImages(res.data)
      })
      .catch((err) => {
        console.log()
      })
  }
  return (
    <>
      <div className='row '>
        {images.map((image) => {
          return (
            <div className='col-lg-2 m-3 room-image'>
              <img src={image.image} alt='' />
            </div>
          )
        })}
      </div>
      <div className='next-container'>
        <button
          className='previous-button btn btn-primary'
          // onClick={() => {
          //   navigate(-1)
          // }}
          disabled
        >
          {'<'} Previous!
        </button>
        {images.length >= 0 ? (
          <button
            type='submit'
            className='next-button btn btn-primary'
            onClick={() => {
              setCreated(true)
              setTimeout(() => {
                setCreated(false)
                navigate(`/seller/hotel/${params.hotelId}/rooms`)
              }, 3000)
            }}
          >
            Finish the listing ! {'>'}
          </button>
        ) : (
          <>
            <button
              type='submit'
              className='next-button btn btn-primary'
              disabled
            >
              Next ! {'>'}
            </button>
          </>
        )}
      </div>
      <DarkOverlaybackGround
        loading={created}
        content={'Finishing your room'}
      />
    </>
  )
}

export default UploadedImages
