import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import '../../Assets/styles/css/Seller/Components/cardMyHotel.css'
const CardMyHotel = ({ hotel }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => {
    setShow(true)
  }
  return (
    <div className='my-hotel-card'>
      <figure class='image-block'>
        <h1>{hotel.name}</h1>
        <img src={hotel.image} alt='' />
        <figcaption>
          {/* <h3>More Info</h3> */}
          <div className='row'>
            <Link to={`/seller/hotel/register?id=${hotel.hotelId}&edit=true`}>
              <button>Manage Hotel info</button>
            </Link>
          </div>
          <div className='row'>
            <button
              onClick={() => {
                handleShow()
              }}
            >
              Manage Room types & rooms
            </button>
          </div>
        </figcaption>
      </figure>
      <Modal
        show={show}
        onHide={() => {
          handleClose()
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Manage rooms & room types</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  )
}

export default CardMyHotel
