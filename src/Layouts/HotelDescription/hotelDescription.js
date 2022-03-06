import React, { Component } from 'react'
import '../../Assets/styles/css/Components/hotelPageTabs.css'

class HotelDescription extends Component {
  render() {
    return (
      <div className='hotelDescription-container' id='hotel-description'>
        <div className='mt-4 p-2 '>
          <h2>Stay in the heart of Galle</h2>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              officia deserunt qui, eaque iste ratione minus iure atque, culpa
              quae aperiam natus quaerat ducimus aliquam voluptates quasi saepe
              adipisci? Atque.
            </p>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
              modi impedit! Corrupti ratione mollitia tempore. Laudantium
              voluptatum nihil fugit vitae minima nemo placeat harum ea, ipsam
              sunt deleniti, repudiandae quia.
            </p>
            <br />
            <br />
            <p className='booknow-description'>
              <b>
                Villa White Queen has been welcoming BookNow.com guests since
                Jan 22, 2022
              </b>
            </p>
            <br />
            <br />
            <h3>Most popular facilities </h3>
            <div className='facilities-container text-center mt-4  '>
              <i class='fa-solid fa-person-swimming'>
                <div>Swimming Pool</div>
              </i>
              <i class='fa-solid fa-spa'>
                <div>Spa</div>
              </i>
              <i class='fa-solid fa-square-parking'>
                <div>Free parking</div>
              </i>
              <i class='fa-solid fa-champagne-glasses'>
                <div>Bar</div>
              </i>
              <i class='fa-solid fa-handshake-angle'>
                <div>Room service</div>
              </i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HotelDescription
