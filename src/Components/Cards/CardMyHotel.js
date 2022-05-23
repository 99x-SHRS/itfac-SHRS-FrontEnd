import React from 'react'
import { Link } from 'react-router-dom'
import '../../Assets/styles/css/Seller/Components/cardMyHotel.css'
const CardMyHotel = ({ hotel }) => {
  return (
    <div className='my-hotel-card'>
      <figure class='image-block'>
        <h1>{hotel.name}</h1>
        <img src={hotel.image} alt='' />
        <figcaption>
          <h3>More Info</h3>
          <p>''</p>
          <div className='row'>
            <Link to={`/seller/hotel/${hotel.hotelId}/roomtype`}>
              <button>Add room type</button>
            </Link>
          </div>
          <div className='row'>
            <Link to={`/seller/hotel/${hotel.hotelId}/create-room`}>
              <button>Add room</button>
            </Link>
          </div>
          <div className='row'>
            <Link to={`/seller/hotel/${hotel.hotelId}/rooms`}>
              <button>Available Rooms</button>
            </Link>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default CardMyHotel
