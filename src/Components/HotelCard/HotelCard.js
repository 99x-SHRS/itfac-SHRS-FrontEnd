import React, { Component } from 'react'
import '../../Assets/styles/css/components/hotelCard.css'
class HotelCard extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div class='card recommonded-hotels'>
        <img src={this.props.hotel.image} class='card-img-top' alt='...' />
        <div class='card-body'>
          <h4 class='card-title'>{this.props.hotel.name}</h4>
          <p class='card-text text-justify'>{this.props.hotel.description}</p>
        </div>
      </div>
    )
  }
}

export default HotelCard
