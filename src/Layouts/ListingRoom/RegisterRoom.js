import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbars from '../../Components/Navbar/navbar'
import Footer from '../Footer/footer.js'
import RoomTypeSelector from './RoomTypeSelector.js'
import RoomDetials from './RoomDetials'
import '../../Assets/styles/css/Seller/Layouts/registerRoom.css'
const RegisterRoom = () => {
  const [roomType, setRoomType] = useState(null)
  return (
    <div>
      <Navbars />
      <div className='room-adding-container container  p-2'>
        <div className='row m-1 '>
          <div className='col-md-12 border'>
            <RoomTypeSelector setRoomType={setRoomType} roomType={roomType} />
            <RoomDetials roomType={roomType} setRoomType={setRoomType} />
            {/* <AddRoomImage /> */}
          </div>
        </div>
      </div>
      <div className='room-type-footer'>
        <Footer />
      </div>
    </div>
  )
}

export default RegisterRoom
