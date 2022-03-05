import React, { Component } from 'react'

class SelectPayment extends Component {
  render() {
    return (
      <div className='select-payment-method ml-4'>
        <div class='form-check'>
          <div className='payment-methods'>
            <input
              class='form-check-input'
              type='radio'
              name='flexRadioDefault'
              id='flexRadioDefault2'
              checked
            />

            <label class='form-check-label' for='flexRadioDefault2'>
              At the property
            </label>
          </div>
        </div>
        <div class='form-check'>
          <div className='payment-methods'>
            <input
              class='form-check-input'
              type='radio'
              name='flexRadioDefault'
              id='flexRadioDefault2'
            />
            <img src={'/images/PaymentGateway/paypal.jpg'} alt='paypal' />
            <label class='form-check-label' for='flexRadioDefault2'>
              PayPal
            </label>
          </div>
        </div>
        <div class='form-check'>
          <div className='payment-methods'>
            <input
              class='form-check-input'
              type='radio'
              name='flexRadioDefault'
              id='flexRadioDefault2'
            />
            <img src={'/images/PaymentGateway/payHere.png'} alt='payHere' />
            <label class='form-check-label' for='flexRadioDefault2'>
              PayHere
            </label>
          </div>
        </div>
        <div class='form-check'>
          <div className='payment-methods'>
            <input
              class='form-check-input'
              type='radio'
              name='flexRadioDefault'
              id='flexRadioDefault2'
            />
            <img src={'/images/PaymentGateway/gPay.png'} alt='payHere' />
            <label class='form-check-label' for='flexRadioDefault2'>
              G Pay
            </label>
          </div>
        </div>
        <button className='reserve-button'>
          Checkout! <span>{'>'}</span>
        </button>
      </div>
    )
  }
}

export default SelectPayment
