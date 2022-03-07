import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

import image_1 from '../../Assets/images/property-types/luxary.jpg'
import image_2 from '../../Assets/images/property-types/kabana.jpg'
import image_3 from '../../Assets/images/property-types/villa.jpg'
import image_4 from '../../Assets/images/property-types/bangalow.jpg'
import image_5 from '../../Assets/images/property-types/guest-houses.jpg'

import '../../Assets/styles/css/Components/souvenir.css'

class Souvenir extends Component {
  render() {
    return (
      <div className='souvenir-carousol'>
        <div className='souvenir-container mt-5 '>
          <Carousel fade>
            <Carousel.Item>
              <img className='d-block w-100' src={image_5} alt='First slide' />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={image_5} alt='Second slide' />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={image_5} alt='Third slide' />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}

export default Souvenir
