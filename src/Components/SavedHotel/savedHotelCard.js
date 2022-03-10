import React, { Component } from 'react'
import '../../Assets/styles/css/Components/savedHotelCard.css'
class SavedHotelCard extends Component {
  render() {
    return (
      <div class='card recommonded-hotels'>
        <img src={this.props.hotel.image} class='card-img-top' alt='...' />
        <div class='card-body'>
          <h4 class='card-title'>{this.props.hotel.name}</h4>
          <p class='card-text text-justify'>{this.props.hotel.description}</p>
          <div className='savedAt'>
            <small>{this.props.hotel.createAt}</small>
          </div>
          <div className='saveHotelBtm'>
            <button className='go-to-hotel mt-2 item'>Go to hotel {'>'}</button>
            <i class='fa fa-trash item' aria-hidden='true'></i>
          </div>
        </div>
      </div>
    )
  }
}

export default SavedHotelCard
