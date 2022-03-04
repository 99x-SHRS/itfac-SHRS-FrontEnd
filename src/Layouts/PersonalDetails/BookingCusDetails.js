import React, { Component, useState } from 'react'

import 'react-phone-number-input/style.css'
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from 'react-phone-number-input'
import HorizontalLine from '../../Components/HorizontalLine/horizontalLine.js'

const BookingCusDetails = () => {
  const [value, setValue] = useState()
  return (
    <div className='container'>
      <div className='row user-details  pt-5'>
        <div className='col-md-4 col-lg-3 '>
          <div className='border'>
            <h4 className='mb-3'>Booking Details</h4>
            <div className='time-container'>
              <div className='border-end '>
                <h5>
                  <i class='fa fa-sign-in mr-1' aria-hidden='true'></i>
                  Check-in date
                </h5>
                <p>Sun, Mar 20, 2022</p>
              </div>
              <div>
                <h5>
                  <i class='fa fa-sign-out  mr-1' aria-hidden='true'></i>
                  Check-out date
                </h5>
                <p>Tue, Mar 22, 2022</p>
              </div>
            </div>
            <div>
              <p>Total length of stay: 3 nights</p>
            </div>
            <div>
              <a href=''>Do you want to change the dates?</a>
            </div>
            <hr />
            <div>
              <p>You selected Deluxe room</p>
            </div>
            <div>
              <a href=''>Do you want to change the room type?</a>
            </div>
          </div>
          <div className='border mt-3'>
            <h4>Payment summary</h4>
            <div className='payment-summary'>
              <div>Deluxe Double Room</div>
              <div>LKR 20,098.38</div>
            </div>
          </div>
          <div className='border mt-3'>
            <div>
              <h4>How much will it cost to cancel?</h4>
              <p>
                Free cancellation until 11:59 PM on Mar 12 From 12:00 AM on Mar
                13 LKR 10,934
              </p>
            </div>
          </div>
          <div className='border mt-3'>
            <div>
              <h4>Your loyalty benefits included in the price:</h4>
              <p>14% discount</p>
              <p>Applied to the price before taxes and fees</p>
            </div>
          </div>
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
          <div className='border mt-3'>
            <h3>Enter your details</h3>
            <form className='personal-details-form'>
              <div className='row'>
                <div class='form-group col-lg-6 '>
                  <label for='exampleInputEmail1'>First Name *</label>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Enter first name'
                    required
                  />
                </div>
                <div class='form-group col-lg-6'>
                  <label for='exampleInputPassword1'>Last Name *</label>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Enter last name'
                    required
                  />
                </div>
              </div>
              <div className='row'>
                <div class='form-group col-lg-12 '>
                  <label for='exampleInputEmail1'>Email address *</label>
                  <input
                    type='email'
                    class='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                    required
                  />
                  <small id='emailHelp' class='form-text text-muted'>
                    Confirmation email sent to this address
                  </small>
                </div>
              </div>
              <div className='row'>
                <div class='form-group col-lg-12 '>
                  <label for='exampleInputEmail1'>
                    Confirm Email Address *
                  </label>
                  <input
                    type='email'
                    class='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                    required
                  />
                </div>
              </div>
              <div className='row'>
                <div class='form-group '>
                  <label for='exampleInputEmail1'>Telephone *</label>
                  <PhoneInput
                    placeholder='Enter phone number'
                    class='form-control'
                    value={value}
                    onChange={setValue}
                    error={
                      value
                        ? isValidPhoneNumber(value)
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
            </form>
          </div>
          <div className='border mt-3 add-transport'>
            <h4>Add to your stay</h4>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='checkbox'
                value=''
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
                <input type='time' id='inputMDEx1' class='form-control' />
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
                class='form-control rounded-0'
                id='exampleFormControlTextarea1'
                rows='5'
              ></textarea>
            </div>
          </div>
          <div className='border  mt-3'>
            <h4>Review House Rules</h4>

            <div className='p-2'>
              <p>
                Your host would like you to agree to the following house rules:
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
              <button className='reserve-button '>
                Next : Almost done! <span>{'>'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingCusDetails
