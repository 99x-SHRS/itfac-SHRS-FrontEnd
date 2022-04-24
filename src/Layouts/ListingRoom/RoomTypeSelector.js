import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getRoomTypesByHotelId } from '../../Services/Api/Utilities'
const RoomTypeSelector = ({ setRoomType }) => {
  const params = useParams()
  const [roomTypes, setRoomTypes] = useState([])
  const [selectedroomType, setSelectedRoomType] = useState(null)

  useEffect(() => {
    getRoomTypes()
  }, [])

  const getRoomTypes = async () => {
    const dataModel = {
      id: params.hotelId,
    }
    await getRoomTypesByHotelId(dataModel)
      .then((res) => {
        console.log(res)
        setRoomTypes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      Select room type
      <div className='row ml-1'>
        {roomTypes.map((roomType) => {
          return (
            <div
              className='col-md-3 border m-2 shadow p-3  bg-white rounded roomtype-card'
              onClick={() => {
                setSelectedRoomType(roomType.roomTypeId)
                setRoomType(roomType.roomTypeId)
              }}
            >
              {selectedroomType == roomType.roomTypeId ? (
                <i
                  class='fa fa-plus-circle current-room-type'
                  aria-hidden='true'
                ></i>
              ) : (
                <></>
              )}
              {roomType.type}
            </div>
          )
        })}
      </div>
      <Link to={`/seller/hotel/${params.hotelId}/roomtype`}>
        <small id='emailHelp' class='form-text text-muted text-primary'>
          Do you want to add new room type ?
        </small>
      </Link>
    </div>
  )
}

export default RoomTypeSelector
