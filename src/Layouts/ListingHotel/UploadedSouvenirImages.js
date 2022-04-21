import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  getAllsouvenirByHotelId,
  deleteSouvenirById,
} from '../../Services/Api/Utilities'
const UploadedSouvenirImages = ({ trigger }) => {
  const [searchedParams, setSearchedparams] = useSearchParams()
  const [souvenirs, setSouvenirs] = useState(null)
  useEffect(() => {
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

  const deleteSouvenir = async (params) => {
    const dataModel = [params]
    await deleteSouvenirById(dataModel)
      .then((res) => {
        console.log(res)
        getSouvenirImages()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <div className='mt-2 mb-2'>
        <table style={{ marginLeft: 'auto', marginRight: 'auto' }}>
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
          {souvenirs != null ? (
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
    </div>
  )
}

export default UploadedSouvenirImages
