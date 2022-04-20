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
import Navbars from '../../Components/Navbar/navbar'
import AddressSelector from '../../Components/AddressSelector/AddressSelector.js'
import '../../Assets/styles/css/Seller/Layouts/registerHotel.css'
const RegisterHotel = () => {
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
      contactNo: number,
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
        // window.location.href = `/booking/${
        //   searchedParams.get('booking') || ''
        // }/details/payment`
        window.location.href = `/payment?booking=${
          searchedParams.get('booking') || ''
        }`
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <Navbars />
      <div className='hotel-register-container'>
        <div class='container step-indicator'>
          <br />
          <br />
          <ul class='list-unstyled multi-steps'>
            <li class='is-active'>Basic Information</li>
            <li>Add value added servces</li>
            <li>Upload image</li>
          </ul>
          <div>
            <form onSubmit={handleSubmit}>
              <div className='border mt-3 p-3'>
                <h3>Enter your details</h3>
                <div className='personal-details-form'>
                  <div className='row'>
                    <div class='form-group col-lg-6 '>
                      <label for='Hotel Name'>Hotel Name *</label>
                      <input
                        type='text'
                        class='form-control hotel_name'
                        placeholder='Enter Hotel Name'
                        name='hotel_name'
                        required
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div class='form-group col-lg-6 '>
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
                  <div className='row'>
                    <div class='form-group col-lg-6 '>
                      <label for='exampleInputEmail1'>Province *</label>
                      <input
                        type='email'
                        class='form-control email'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        placeholder='Enter email'
                        name='email'
                        required
                      />
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
                        We will send confirmation SMS and communicate with you
                        via this number in the future.
                      </small>
                    </div>
                    <AddressSelector />
                  </div>
                </div>
              </div>
              <div className='next-container'>
                <button type='submit' className='next-button btn btn-primary'>
                  Next! {'>'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterHotel
