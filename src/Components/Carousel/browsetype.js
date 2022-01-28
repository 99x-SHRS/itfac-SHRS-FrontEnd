import '../../Assets/styles/css/components/browsetype.css'
import React, { Component } from 'react'
import $ from 'jquery'
import image_1 from '../../Assets/images/property-types/luxary.jpg'
import image_2 from '../../Assets/images/property-types/kabana.jpg'
import image_3 from '../../Assets/images/property-types/villa.jpg'
import image_4 from '../../Assets/images/property-types/bangalow.jpg'
import image_5 from '../../Assets/images/property-types/guest-houses.jpg'
import { Carousel } from 'react-bootstrap'
class Browsetype extends Component {
  render() {
    return (
      <div className='container mt-5 mb-5'>
        <div
          class='gallery-full js-flickity card '
          data-flickity-options='{ "wrapAround": true }'
        >
          <div className='gallery-cell luxary text-center rounded'>
            <h3 class='card-header'>Featured</h3>
          </div>
          <div className='gallery-cell kabana text-center rounded '>
            <h3 class='card-header'>Kabana Hotels</h3>
          </div>
          <div className='gallery-cell villa text-center rounded'>
            <h3 class='card-header'>Villa</h3>
          </div>
          <div className='gallery-cell bangalow text-center rounded'>
            <h3 class='card-header'>Bangalows</h3>
          </div>
          <div className='gallery-cell guest-houses text-center rounded'>
            <h3 class='card-header'>Guest Houses</h3>
          </div>
        </div>
        <div className='gallery-mobile'>
          <Carousel fade>
            <Carousel.Item>
              <img className='d-block w-100' src={image_1} alt='First slide' />
              <Carousel.Caption>
                <h3>Luxary</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={image_2} alt='Second slide' />

              <Carousel.Caption>
                <h3>Kabana</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={image_3} alt='Third slide' />

              <Carousel.Caption>
                <h3>Villa</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={image_4} alt='Third slide' />

              <Carousel.Caption>
                <h3>Bangalow</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={image_5} alt='Third slide' />

              <Carousel.Caption>
                <h3>Guest Houses</h3>
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

export default Browsetype
