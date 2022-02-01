import React, { Component } from 'react'

class SearchedHotel extends Component {
  render() {
    return (
      <div className=''>
        <div class='card mb-3 p-2'>
          <div class='row no-gutters'>
            <div class='col-md-4'>
              <img
                src={this.props.hotel.image}
                class='card-img rounded'
                alt='...'
              />
            </div>
            <div class='col-md-8'>
              <div class='card-body'>
                <b>
                  <h3 class='card-title'>{this.props.hotel.name}</h3>
                </b>
                <h5 class='card-title'>{this.props.hotel.province}</h5>
                <p class='card-text'>{this.props.hotel.description}</p>
                <p class='card-text'>
                  <small class='text-muted'>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchedHotel
