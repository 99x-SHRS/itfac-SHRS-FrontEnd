import React, { Component } from 'react'
import '../../Assets/styles/css/Components/hotelCard.css'
class HotelCard extends Component {
  getStars(params) {
    let content = []
    for (let i = 0; i < params; i++) {
      content.push(<i class='fa fa-star' aria-hidden='true'></i>)
    }
    return content
  }
  render() {
    return (
      <div class='card recommonded-hotels'>
        <img src={this.props.hotel.image} class='card-img-top' alt='...' />
        <div class='card-body'>
          <h4 class='card-title'>
            {this.props.hotel.name} {this.getStars(1)}
          </h4>
          <div class='flex items-center'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='map-marker-alt'
              class='h-3 w-3 text-blue-500 fill-current mr-1'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 512'
            >
              <path
                fill='currentColor'
                d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'
              ></path>
            </svg>
            <p class='text-xs text-gray-600'>
              Galle
              <a class='font-semibold text-gray-700 ml-2' href=''>
                Show on Map
              </a>
            </p>
          </div>
          <p class='card-text text-justify mt-3'>
            {this.props.hotel.description}
          </p>
        </div>
      </div>
    )
  }
}

export default HotelCard
