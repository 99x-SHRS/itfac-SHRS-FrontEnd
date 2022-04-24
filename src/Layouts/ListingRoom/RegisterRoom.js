import React, { useState } from 'react'
import Navbars from '../../Components/Navbar/navbar'
import Footer from '../Footer/footer.js'
import RoomTypeSelector from './RoomTypeSelector.js'
import RoomDetials from './RoomDetials'
import AddRoomImage from './AddRoomImage'
import '../../Assets/styles/css/Seller/Layouts/registerRoom.css'
const RegisterRoom = () => {
  const [roomType, setRoomType] = useState(null)
  return (
    <div>
      <Navbars />
      <div className='room-adding-container container  p-2'>
        <div className='row m-1 '>
          <div className='col-md-8 border'>
            <RoomTypeSelector setRoomType={setRoomType} />
            <RoomDetials roomType={roomType} setRoomType={setRoomType} />
            {/* <AddRoomImage /> */}
          </div>
          <div className='col-md-3 d-md-none d-lg-block border ml-1'>asd</div>
        </div>
      </div>
      <div className='room-type-footer'>
        <Footer />
      </div>
    </div>
  )
}

export default RegisterRoom
