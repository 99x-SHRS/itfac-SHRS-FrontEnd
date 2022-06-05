import React, { Component } from 'react'
import Souvenir from '../../Carousel/souvenir'
import SplideSlider from '../../Carousel/splide'
import '../../../Assets/styles/css/Components/roomImageModal.css'
import Browsetype from '../../Carousel/browsetype'

const RoomImageModal = ({ roomId }) => {
  return (
    <div className='room-image-modal'>
      <a
        data-toggle='modal'
        data-target='#exampleModalCenter'
        className='mt-3 text-primary'
      >
        {' '}
        Click here to view all images
      </a>
      <div
        class='modal fade modal-container'
        id='exampleModalCenter'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-dialog-centered' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLongTitle'>
                Room images
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <SplideSlider roomId={roomId} />
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomImageModal
