import React, { Component } from 'react'
import '../../Assets/styles/css/Layouts/facilities.css'
const facilities = [
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
]

class Facilities extends Component {
  render() {
    return (
      <div className='mt-4 pt-4' id='hotel-facilities'>
        <h3>Facilities of Furnished apartment at Nawala</h3>
        <div className='container mt-3'>
          <div className='row mb-3 '>
            <div className='col-md-4  '>
              <div className='facility-header'>
                <i class='fas fa-parking'></i>
                <p>Parking</p>
              </div>
              <div className='mt-2 '>
                <p>
                  Free private parking is available on site (reservation is not
                  needed).
                </p>
                <div className='mt-2'>
                  {facilities.map((facility, index) => {
                    return (
                      <div className='m-1'>
                        <i class='fa-solid fa-check'></i>
                        <span className='ml-2'>{facility}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-4  '>
              <div className='facility-header'>
                <div className='facility-header'>
                  <i class='fa-solid fa-wifi'></i>
                  <p>WIFI</p>
                </div>
              </div>

              <div>
                <p>WiFi is available in all areas and is free of charge.</p>
                <div className='mt-2'>
                  {facilities.map((facility, index) => {
                    return (
                      <div className='m-1'>
                        <i class='fa-solid fa-check'></i>
                        <span className='ml-2'>{facility}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-4  '>
              <div className='facility-header'>
                <i class='fa-solid fa-utensils'></i>
                <p>Food & Drink</p>
              </div>
              <div>
                <p>WiFi is available in all areas and is free of charge.</p>
                <div className='mt-2'>
                  {facilities.map((facility, index) => {
                    return (
                      <div className='m-1'>
                        <i class='fa-solid fa-check'></i>
                        <span className='ml-2'>{facility}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-md-4  '>
              <div className='facility-header'>
                <i class='fa-solid fa-person-swimming'></i>
                <p> Outdoor swimming pool</p>
              </div>
              <div>
                <p>All pools are free of charge.</p>
                <div className='mt-2'>
                  {facilities.map((facility, index) => {
                    return (
                      <div className='m-1'>
                        <i class='fa-solid fa-check'></i>
                        <span className='ml-2'>{facility}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-4  '>
              <div className='facility-header'>
                <i class='fa-solid fa-lock'></i>
                <p>Safety & security</p>
                <div className='mt-2'>
                  {facilities.map((facility, index) => {
                    return (
                      <div className='m-1'>
                        <i class='fa-solid fa-check'></i>
                        <span className='ml-2'>{facility}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-4  '>
              <div className='facility-header'>
                <i class='fa-solid fa-wheelchair'></i>
                <p>Accessibility</p>
                <div className='mt-2'>
                  {facilities.map((facility, index) => {
                    return (
                      <div className='m-1'>
                        <i class='fa-solid fa-check'></i>
                        <span className='ml-2'>{facility}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-md-4  '>
              <div className='facility-header'>
                <i class='fa-solid fa-couch'></i>
                <p>Living Area</p>
                <div className='mt-2'>
                  {facilities.map((facility, index) => {
                    return (
                      <div className='m-1'>
                        <i class='fa-solid fa-check'></i>
                        <span className='ml-2'>{facility}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-4  '>
              <div className='facility-header'>
                <i class='fa-solid fa-baseball-bat-ball'></i>
                <p>Activities</p>
                <div className='mt-2'>
                  {facilities.map((facility, index) => {
                    return (
                      <div className='m-1'>
                        <i class='fa-solid fa-check'></i>
                        <span className='ml-2'>{facility}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-4  '>
              <div className='facility-header'>
                <i class='fa-solid fa-messages'></i>
                <p>Languages Spoken</p>
                <div className='mt-2'>
                  {facilities.map((facility, index) => {
                    return (
                      <div className='m-1'>
                        <i class='fa-solid fa-check'></i>
                        <span className='ml-2'>{facility}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className='row mb-3'>
            <div className='col-md-4  '>
              <div className='facility-header'>
                <i class='fa-solid fa-spa'></i>
                <p>Spa</p>
                <div className='mt-2'>
                  {facilities.map((facility, index) => {
                    return (
                      <div className='m-1'>
                        <i class='fa-solid fa-check'></i>
                        <span className='ml-2'>{facility}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-4  '>
              <div className='facility-header'>
                <i class='fa-solid fa-building-columns'></i>
                <p>Building Characteristics</p>
                <div className='mt-2'>
                  {facilities.map((facility, index) => {
                    return (
                      <div className='m-1'>
                        <i class='fa-solid fa-check'></i>
                        <span className='ml-2'>{facility}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-4  '>
              <div className='facility-header'>
                <i class='fa-solid fa-child'></i>
                <p>Entertainment & Family Services</p>
                <div className='mt-2'>
                  {facilities.map((facility, index) => {
                    return (
                      <div className='m-1'>
                        <i class='fa-solid fa-check'></i>
                        <span className='ml-2'>{facility}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Facilities
