import React, { Component, useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { updateBookingById } from '../../Services/Api/Utilities/index.js'
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from 'react-phone-number-input'
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector'
import SideSummary from '../../Layouts/Payment/SideSummary.js'
import 'react-phone-number-input/style.css'

const BookingCusDetails = () => {
  const [country, setCountry] = useState('LK')
  const [number, setNumber] = useState(0)
  const [searchedParams, setSearchedparams] = useSearchParams()
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    // const details = {
    //   firstName: event.target.first_name.value,
    //   lastName: event.target.last_name.value,
    //   email: event.target.email.value,
    //   settedContry: country,
    //   telephone_number: number,
    //   arrival_time: event.target.arrival_time.value,
    //   rent_car: event.target.rent_car.checked,
    //   special_request: event.target.special_request.value,
    // }
    // window.location.href = `/hotels?${URL}`
    console.log(event.target.arrival_time.value)
    function getDateFromHours(time) {
      time = time.split(':')
      let now = new Date()

      return new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...time)
    }

    const bookingId = searchedParams.get('booking') || ''
    const dataModel = {
      specialRequest: event.target.special_request.value,
      arrivalTime: getDateFromHours('12:00:01'),
      guestName:
        event.target.first_name.value + ' ' + event.target.last_name.value,
      rentCar: event.target.rent_car.checked,
      customerId: 1,
      // adult: searchedParams.get('rooms') || '',
      // children: searchedParams.get('children') || '',
      // rooms: searchedParams.get('rooms') || '',
      // hotelId: searchedParams.get('hotel') || '',
    }
    console.log(getDateFromHours('12:00:01'))
    updateBooking(bookingId, dataModel)
  }

  const updateBooking = async (bookingId, dataModel) => {
    await updateBookingById(bookingId, dataModel)
      .then((res) => {
        console.log(res)
        window.location.href = `/booking/${
          searchedParams.get('booking') || ''
        }/details/payment`
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className='container'>
      <div className='row user-details '>
        <div className='col-md-4 col-lg-3 '>
          <SideSummary />
        </div>
        <div className='col-md-7 col-lg-8  '>
          <div className='border'>
            <div>
              <h4> Good to know:</h4>
            </div>
            <div>
              <ul class='fa-ul mt-1 mb-3'>
                <li>
                  <span class='fa-li'>
                    <i class='fa-solid fa-check-circle'></i>
                  </span>
                  No credit card needed!
                </li>
                <li>
                  <span class='fa-li'>
                    <i class='fa-solid fa-check-circle'></i>
                  </span>
                  No credit card needed!
                </li>
                <li>
                  <span class='fa-li'>
                    <i class='fa-solid fa-check-circle'></i>
                  </span>
                  No credit card needed!
                </li>
              </ul>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='border mt-3'>
              <h3>Enter your details</h3>
              <div className='personal-details-form'>
                <div className='row'>
                  <div class='form-group col-lg-6 '>
                    <label for='First Name'>First Name *</label>
                    <input
                      type='text'
                      class='form-control first_name'
                      placeholder='Enter first name'
                      name='first_name'
                      required
                    />
                  </div>
                  <div class='form-group col-lg-6'>
                    <label for='last Name'>Last Name *</label>
                    <input
                      type='text'
                      class='form-control last_name'
                      placeholder='Enter last name'
                      name='last_name'
                      required
                    />
                  </div>
                </div>
                <div className='row'>
                  <div class='form-group col-lg-12 '>
                    <label for='exampleInputEmail1'>Email address *</label>
                    <input
                      type='email'
                      class='form-control email'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Enter email'
                      name='email'
                      required
                    />
                    <small id='emailHelp' class='form-text text-muted'>
                      Confirmation email sent to this address
                    </small>
                  </div>
                </div>
                {/* <div className='row'>
                  <div class='form-group col-lg-12 '>
                    <label for='exampleInputEmail1'>
                      Confirm Email Address *
                    </label>
                    <input
                      type='email'
                      class='form-control re_email'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Enter email'
                      required
                    />
                  </div>
                </div> */}
                <div className='row'>
                  <div>
                    <label for='country'>Country/Region * </label>
                    <br />
                    <CountryDropdown
                      className='border country-selector country'
                      value={country}
                      // defaultOptionLabel={'Sri Lanka'}
                      onChange={setCountry}
                      required
                    />
                  </div>
                </div>
                <div className='row'>
                  <div>
                    <label for='phone Number'>Telephone *</label>
                    <PhoneInput
                      placeholder='Enter phone number'
                      class='form-control border telephone_number'
                      value={number}
                      defaultCountry='LK'
                      onChange={setNumber}
                      required
                      error={
                        number
                          ? isValidPhoneNumber(number)
                            ? undefined
                            : 'Invalid phone number'
                          : 'Phone number required'
                      }
                    />
                    <small class='form-text text-muted'>
                      We will send confirmation SMS and communicate with you via
                      this number in the future.
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className='border mt-3 add-transport'>
              <h4>Add to your stay</h4>
              <div class='form-check'>
                <input
                  class='form-check-input rent_car'
                  type='checkbox'
                  name='rent_car'
                  id='flexCheckDefault'
                />
                <label for='flexCheckDefault'>
                  I'm interested in renting a car
                </label>
              </div>

              <div>
                <p>
                  If you do not select specific time below selector,we will
                  identify, your arrival time is{' '}
                  <i style={{ color: 'blue' }}> 10.00 AM</i>
                </p>
                <div class='md-form mx-5 my-5'>
                  <input
                    type='time'
                    id='inputMDEx1'
                    class='form-control arrival_time'
                    name='arrival_time'
                    value='10:00:00'
                  />
                  <label for='inputMDEx1'>Choose your arrival time</label>
                </div>
              </div>
            </div>
            <div className='border  mt-3'>
              <h4>Special requests</h4>
              <div className='row'>
                <p>
                  Special requests can't be guaranteed, but the property will do
                  its best to meet your needs. You can always make a special
                  request after your booking is complete.
                </p>
                <p>Please write your requests in English. (optional)</p>
              </div>
              <div class='form-group'>
                <textarea
                  class='form-control rounded-0 special_request'
                  id='exampleFormControlTextarea1'
                  rows='5'
                  name='special_request'
                ></textarea>
              </div>
            </div>
            <div className='border  mt-3'>
              <h4>Review House Rules</h4>

              <div className='p-2'>
                <p>
                  Your host would like you to agree to the following house
                  rules:
                </p>
                <ul class='fa-ul mt-3 mb-3'>
                  <li>
                    <span class='fa-li'>
                      <i class='fa-solid fa-check-circle'></i>
                    </span>
                    No smoking
                  </li>
                  <li>
                    <span class='fa-li'>
                      <i class='fa-solid fa-check-circle'></i>
                    </span>
                    Quiet hours are between 10:00 PM and 7:00 AM
                  </li>
                  <li>
                    <span class='fa-li'>
                      <i class='fa-solid fa-check-circle'></i>
                    </span>
                    Pets are not allowed
                  </li>
                </ul>
                <p>
                  By continuing to the next step, you agree to these house rules
                </p>
              </div>
            </div>
            <div className='next-container'>
              <button
                className='previous-button btn btn-primary'
                onClick={() => {
                  navigate(-1)
                }}
              >
                {'<'} Previous!
              </button>

              <button type='submit' className='next-button btn btn-primary'>
                Almost done! {'>'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookingCusDetails
