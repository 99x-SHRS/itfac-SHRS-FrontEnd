import React from 'react'
import Navbars from '../../Components/Navbar/navbar'

import '../../Assets/styles/css/Seller/Layouts/registerRoom.css'
const RegisterRoom = () => {
  return (
    <div>
      <Navbars />
      <div className='room-adding-container container'>
        {/* <div class=' step-indicator'>
          <ul class='list-unstyled multi-steps'>
            <li class='is-active'>Basic Information</li>
            <li>Upload hotel Image</li>
            <li>Upload souvenir Images</li>
            <li>Add value added servces</li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default RegisterRoom
