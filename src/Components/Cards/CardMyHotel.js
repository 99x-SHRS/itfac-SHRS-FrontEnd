import React from 'react'
import '../../Assets/styles/css/Seller/Components/cardMyHotel.css'
const CardMyHotel = ({ hotel }) => {
  return (
    <div className='my-hotel-card'>
      <figure class='image-block'>
        <h1>{hotel.name}</h1>
        <img src={hotel.image} alt='' />
        <figcaption>
          <h3>More Info</h3>
          <p>{hotel.description}</p>
          <button>Go to the hotel</button>
        </figcaption>
      </figure>
    </div>
  )
}

export default CardMyHotel
