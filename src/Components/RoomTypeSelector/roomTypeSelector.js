import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DropDownList from '../../Components/DropDownList/dropDownList'
import RoomSelection from '../../Layouts/RoomSelection/roomSelection'
import HorizontalLine from '../HorizontalLine/horizontalLine'
import {
  getRoomTypesByHotelId,
  getRoomsByHotelIdAndRoomType,
  getRoomByHotelId,
} from '../../Services/Api/Utilities/index.js'

import '../../Assets/styles/css/Layouts/roomTypeSelector.css'

const RoomTypeSelector = () => {
  const params = useParams()
  const [roomTypes, setRoomTypes] = useState([])
  const [roomType, setRoomType] = useState()
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const fetchRoomData = async () => {
      console.log('changed')

      const dataModel = {
        hotelId: params.id,
        roomTypeId: roomType,
      }

      await getRoomsByHotelIdAndRoomType(dataModel)
        .then((res) => {
          setRooms(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    fetchRoomData()
  }, [roomType])

  const fetchData = async (data) => {
    const dataModel = {
      id: params.id,
    }
    await getRoomTypesByHotelId(dataModel)
      .then((res) => {
        setRoomTypes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    // await getRoomByHotelId(dataModel)
    //   .then((res) => {
    //     setRoomTypes(res.data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
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
      <RoomSelection roomData={rooms} />
    </div>
  )
}
export default RoomTypeSelector
