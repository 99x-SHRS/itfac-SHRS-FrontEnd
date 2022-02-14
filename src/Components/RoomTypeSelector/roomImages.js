import React, { Component } from 'react'
import '../../Assets/styles/css/Layouts/roomImages.css'
// import HotelImageScript from '../../Assets/js/roomImage.js'

var ReactDOM = require('react-dom')
var Carousel = require('react-responsive-carousel').Carousel
var ReactDOM = require('react-dom')

class RoomImages extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Carousel autoPlay>
        {this.props.souvenirs.map((souvenir, index) => {
          return (
            <div>
              <img alt='' src={souvenir.path} />
              <p className='hotel-souvenir-title'>{index}</p>
            </div>
          )
        })}
      </Carousel>
    )
  }
}

export default RoomImages
