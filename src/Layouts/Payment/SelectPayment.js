import React, { Component, useState } from 'react'
import PaymentOptions from '../../Layouts/Payment/PaymentOptions.js'
import '../../Assets/styles/css/Layouts/payment.css'
const SelectPayment = () => {
  const [paymentMethod, setPaymentMethod] = useState('')
  return (
    <div className='payment-gateway-interface'>
      <div className='select-payment-method ml-5 pl-5'>
        <div class='form-check'>
          <div className='payment-methods'>
            <input
              class='form-check-input'
              type='radio'
              name='flexRadioDefault'
              id='flexRadioDefault2'
              onClick={() => {
                setPaymentMethod('default')
              }}
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
              onClick={() => {
                setPaymentMethod('paypal')
              }}
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
              onClick={() => {
                setPaymentMethod('payhere')
              }}
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
              onClick={() => {
                setPaymentMethod('g pay')
              }}
            />
            <img src={'/images/PaymentGateway/gPay.png'} alt='payHere' />
            <label class='form-check-label' for='flexRadioDefault2'>
              G Pay
            </label>
          </div>
        </div>
      </div>
      <PaymentOptions method={paymentMethod} />
    </div>
  )
}

export default SelectPayment
