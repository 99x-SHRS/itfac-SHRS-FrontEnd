import React, { Component, useEffect } from 'react'

import HotelHeader from '../../Layouts/HotelHeader/hotelHeader.js'
import SelectPayment from '../../Layouts/Payment/SelectPayment.js'
import SideSummary from '../../Layouts/Payment/SideSummary.js'
import InfoToolTip from '../../Components/ToolTip/InfoToolTip.js'
import Footer from '../../Layouts/Footer/footer.js'

import '../../Assets/styles/css/Pages/payment.css'
import { red } from '@material-ui/core/colors'
const Payament = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <HotelHeader />
      <div class='container-fluid step-indicator'>
        <br />
        <br />
        <ul class='list-unstyled multi-steps'>
          <li>Select your room</li>
          <li>Add services</li>
          <li>Enter your details</li>
          <li class='is-active'>Finalize your payament</li>
        </ul>
      </div>
      <div className='user-details'>
        <div className='container'>
          <div className='row user-details '>
            <div className='col-md-7 col-lg-8 mt-1 '>
              <div className='container payment-summary border'>
                <table class='table table-borderless'>
                  <thead className='border-bottom border-dark'>
                    <tr>
                      <th scope='col'>Description</th>
                      <th scope='col'>Unit price</th>
                      <th scope='col'> Qty</th>
                      <th scope='col' className='text-center'>
                        Total
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td scope='row'>Deluxe Double</td>
                      <td>Rs. 6,900.38</td>
                      <td>2</td>
                      <td className='text-right'> Rs.15,800</td>
                    </tr>
                    <tr>
                      <td scope='row'>Singale Double</td>
                      <td>Rs. 5,400.38</td>
                      <td>3</td>
                      <td className='text-right'> Rs.24,800</td>
                    </tr>
                    <tr>
                      <td scope='row'>Deluxe Double</td>
                      <td>Rs. 5,400.38</td>
                      <td>2</td>
                      <td className='text-right'> Rs.24,800</td>
                    </tr>
                    <tr>
                      <td scope='row'>Large BBQ party</td>
                      <td>Rs. 5,400.38</td>
                      <td>1</td>
                      <td className='text-right'> Rs.24,800</td>
                    </tr>

                    <tr>
                      <td colspan='3'>
                        <b>Subtotal</b>
                      </td>
                      <td className='text-right'> Rs.24,800</td>
                    </tr>
                    <tr style={{ color: 'gray' }}>
                      <td colspan='3'>Service charge</td>
                      <td className='text-right'>Rs.2,000</td>
                    </tr>
                    <tr>
                      <td colspan='4'>
                        <div className='voucher-input-box'>
                          <form>
                            <div className='row'>
                              <div className='col-lg-8 col-sm-12'>
                                <div class='form-group mb-2'>
                                  <label for='inputPassword2' class='sr-only'>
                                    Enter voucher code
                                  </label>
                                  <input
                                    type='text'
                                    class='form-control'
                                    id='inputPassword2'
                                    placeholder=' Enter voucher code'
                                  />
                                </div>
                              </div>
                              <div className='col-lg-3 col-sm-12'>
                                <button
                                  type='submit'
                                  class='btn btn-primary mb-2'
                                >
                                  Reedem
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan='3'>
                        <b>Voucher offer</b>
                      </td>
                      <td className='text-right'>
                        <b>(Rs.3,800)</b>
                      </td>
                    </tr>
                    <tr>
                      <td colspan='3'>
                        <b>loyaly reward</b>
                      </td>
                      <td className='text-right'>
                        <b>(Rs.4,800)</b>
                      </td>
                    </tr>
                    <tr className='total-amount'>
                      <td colspan='3'>
                        <b>Total payment</b>
                      </td>
                      <td
                        className='text-right'
                        style={{ color: 'red', fontWeight: 'bolder' }}
                      >
                        <b>Rs.64,800</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='col-md-4 col-lg-4 '>
              <div className='border mt-1'>
                <h4>How do you wish to pay ?</h4>
                <SelectPayment />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Payament
