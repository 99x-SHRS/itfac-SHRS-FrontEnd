import React from 'react'
import Navbars from '../../Components/Navbar/navbar'
import Footer from '../Footer/footer.js'
const UploadImage = () => {
  return (
    <div>
      <Navbars />
      <div className='hotel-register-container'>
        <div class='container step-indicator'>
          <ul class='list-unstyled multi-steps'>
            <li>Basic Information</li>
            <li class='is-active'>Upload image</li>
            <li>Add value added servces</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UploadImage
