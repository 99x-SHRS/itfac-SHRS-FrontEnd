import React, { Component, useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'

import { registerHotel } from '../../Services/Api/Utilities/index.js'
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handleSubmit = async (event) => {
    event.preventDefault()
    const dataModel = {
      name: event.target.hotel_name.value,
      phoneNumber: number,
      // email: event.target.email.value,
      description: event.target.description.value,
      province: document.getElementById('province').value,
      district: document.getElementById('district').value,
      town: event.target.town.value,
      Street1: event.target.street_01.value,
      Street2: event.target.street_02.value,
      userId: 1,
    }

    await registerHotel(dataModel)
      .then((res) => {
        console.log(res)
        alert(res.status)
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
          <ul class='list-unstyled multi-steps'>
            <li class='is-active'>Basic Information</li>
            <li>Upload image</li>
            <li>Add value added servces</li>
          </ul>
          <div>
            <form onSubmit={handleSubmit}>
              <div className='border mt-3 p-3'>
                <h3>Enter your property details</h3>
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

                  <div className='row '>
                    <div className='col-lg-6'>
                      <label for='country'>Country/Region * </label>
                      <select
                        class='form-select'
                        aria-label='Default select example'
                        id='country-location'
                        disabled
                      >
                        <option selected>Sri Lanaka</option>
                      </select>
                    </div>
                    <small class='form-text text-muted'>
                      Your property should be located in Sri Lanaka.
                    </small>
                  </div>
                  <div>
                    <AddressSelector />
                  </div>

                  <div className='row'>
                    <div class='form-group col-lg-4 '>
                      <label for='First Name'>Town *</label>
                      <input
                        type='text'
                        class='form-control first_name'
                        placeholder='Enter Town'
                        name='town'
                        required
                      />
                    </div>
                    <div class='form-group col-lg-4 '>
                      <label for='First Name'>Street 01 *</label>
                      <input
                        type='text'
                        class='form-control street_01'
                        placeholder='Enter Street 01'
                        name='street_01'
                        required
                      />
                    </div>
                    <div class='form-group col-lg-4 '>
                      <label for='First Name'>Street 02 *</label>
                      <input
                        type='text'
                        class='form-control street_02'
                        placeholder='Enter Street 02'
                        name='street_02'
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
                  </div>
                  <div className='row'>
                    <label for='floatingTextarea2'>Description </label>
                    <div class='form-floating'>
                      <textarea
                        class='form-control'
                        placeholder='Leave a comment here'
                        id='floatingTextarea2'
                        style={{ height: '100px' }}
                        name='description'
                      ></textarea>
                    </div>
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
