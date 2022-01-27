import React, { Component } from 'react'
import '../../Assets/styles/css/components/browsetype.css'
import $ from 'jquery'
class Browsetype extends Component {
  componentDidMount() {
    $(document).ready(function () {
      $('.items').slick({
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      })
    })
  }
  render() {
    return (
      <div class='items'>
        <div>
          <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190720/gallery/preview/02_o_car.jpg' />
        </div>
        <div>
          <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190715/gallery/preview/03_r_car.jpg' />
        </div>
        <div>
          <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190714/gallery/preview/04_g_car.jpg' />
        </div>
        <div>
          <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190714/gallery/preview/01_b_car.jpg' />
        </div>
        <div>
          <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190720/gallery/preview/02_o_car.jpg' />
        </div>
        <div>
          <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190715/gallery/preview/03_r_car.jpg' />
        </div>
        <div>
          <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190714/gallery/preview/04_g_car.jpg' />
        </div>
        <div>
          <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190714/gallery/preview/01_b_car.jpg' />
        </div>
      </div>
    )
  }
}

export default Browsetype
