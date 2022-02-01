import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import '../../Assets/styles/css/Layouts/hotelLeftSide.css'
class PriceRange extends Component {
  render() {
    return (
      <div>
        <div class='card-header'>Budget</div>
        <div class='card-body'>
          <Form>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='radio'
                name='flexRadioDefault'
                id='flexRadioDefault1'
              />
              <label class='form-check-label' for='flexRadioDefault1'>
                LKR. 0 - LKR. 10000
              </label>
            </div>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='radio'
                name='flexRadioDefault'
                id='flexRadioDefault2'
              />
              <label class='form-check-label' for='flexRadioDefault2'>
                LKR. 10000 - LKR. 20000
              </label>
            </div>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='radio'
                name='flexRadioDefault'
                id='flexRadioDefault1'
              />
              <label class='form-check-label' for='flexRadioDefault1'>
                LKR. 20000 - LKR. 30000
              </label>
            </div>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='radio'
                name='flexRadioDefault'
                id='flexRadioDefault1'
              />
              <label class='form-check-label' for='flexRadioDefault1'>
                LKR. 20000 +
              </label>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default PriceRange
