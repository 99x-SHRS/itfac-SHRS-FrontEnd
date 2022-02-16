import React, { Component } from 'react'
import RoomImageModal from '../Modal/RoomImages/roomImageModal'
import '../../Assets/styles/css/Layouts/roomImages.css'
// import HotelImageScript from '../../Assets/js/roomImage.js'

var Carousel = require('react-responsive-carousel').Carousel

class RoomImages extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <RoomImageModal />
      </div>
    )
  }
}

export default RoomImages
