import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  getAllsouvenirByHotelId,
  deleteSouvenirById,
} from '../../Services/Api/Utilities'
const UploadedSouvenirImages = ({ trigger }) => {
  const [searchedParams, setSearchedparams] = useSearchParams()
  const [souvenirs, setSouvenirs] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    toast.configure()
    getSouvenirImages()
  }, [trigger])

  const getSouvenirImages = async () => {
    const dataModel = {
      id: searchedParams.get('id') || '',
    }
    await getAllsouvenirByHotelId(dataModel)
      .then((res) => {
        setSouvenirs(res.data)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const notifySuccess = (message) => {
    toast.success(message)
  }
  const notifyError = (message) => {
    toast.error(message)
  }
  const deleteSouvenir = async (params) => {
    const dataModel = [params]
    await deleteSouvenirById(dataModel)
      .then((res) => {
        console.log(res)
        notifySuccess('Deleted souvenir successfully')
        getSouvenirImages()
      })
      .catch((err) => {
        notifyError('spme thing went wrong !')
        console.log(err)
      })
  }
  return (
    <div>
      <div className='mt-2 mb-2'>
        <table style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          {souvenirs.length != 0 ? (
            <h4
              style={{
                fontWeight: 'bold',
                marginBottom: '2rem',
                marginTop: '2rem',
                textAlign: 'center',
              }}
            >
              Uploaded Images
            </h4>
          ) : (
            <></>
          )}

          {souvenirs.length != 0 ? (
            souvenirs.map((souvenir) => {
              console.log(souvenir)
              return (
                <div style={{ marginBottom: '0.4rem' }}>
                  <tr>
                    <td style={{ width: '20rem' }}>{souvenir.title}</td>
                    <td>
                      {' '}
                      <i
                        class='fa-solid fa-trash'
                        style={{ color: 'green', cursor: 'pointer' }}
                        onClick={() => {
                          deleteSouvenir(souvenir.souvenirId)
                        }}
                      ></i>
                    </td>
                  </tr>
                </div>
              )
            })
          ) : (
            <></>
          )}
        </table>
      </div>
      <div className='next-container'>
        <button
          className='previous-button btn btn-primary'
          // onClick={() => {
          //   navigate(-1)
          // }}
        >
          {'<'} Previous!
        </button>
        {souvenirs.length >= 0 ? (
          <button
            type='submit'
            className='next-button btn btn-primary'
            onClick={() => {
              window.location.href = `/seller/hotel/value-added-services?id=${
                searchedParams.get('id') || ''
              }`
            }}
          >
            Next ! {'>'}
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
    </div>
  )
}

export default UploadedSouvenirImages
