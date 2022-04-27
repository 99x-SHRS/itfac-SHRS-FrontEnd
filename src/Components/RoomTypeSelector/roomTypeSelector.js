import React, { Component, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import DropDownList from '../../Components/DropDownList/dropDownList'
import RoomSelection from '../../Layouts/RoomSelection/roomSelection'
import HorizontalLine from '../HorizontalLine/horizontalLine'

import {
  getRoomTypesByHotelId,
  getRoomsByHotelIdAndRoomType,
} from '../../Services/Api/Utilities/index.js'

import '../../Assets/styles/css/Layouts/roomTypeSelector.css'

const RoomTypeSelector = () => {
  const [searchedParams, setSearchedparams] = useSearchParams()
  const [roomTypes, setRoomTypes] = useState([])
  const [roomType, setRoomType] = useState(1)
  let hotelId = searchedParams.get('hotel') || ''
  useEffect(() => {
    if (roomType.length != 0) {
      fetchData()
    }
  }, [roomTypes.length])
  useEffect(() => {
    console.log('changed')
  }, [roomType])

  const fetchData = async () => {
    const dataModel = {
      id: hotelId,
    }
    await getRoomTypesByHotelId(dataModel)
      .then((res) => {
        setRoomTypes(res.data)
        console.log(res.data[0].roomTypeId)
        if (res.data.lengt != 0) {
          setRoomType(res.data[0].roomTypeId)
        }

        console.log(roomTypes)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <div className='mt-4 pt-4' id='room-Type-Selector'>
        <HorizontalLine />
        <h3> Select Room Type</h3>
      </div>
      <div className='p-2 mb-5'>
        <form>
          <div className='room-type-selector row '>
            <DropDownList roomTypes={roomTypes} setRoomType={setRoomType} />
          </div>
        </form>
        <div className='mt-4'>
          <HorizontalLine />
        </div>
      </div>
      <RoomSelection roomTypeId={roomType} />
    </div>
  )
}
export default RoomTypeSelector
