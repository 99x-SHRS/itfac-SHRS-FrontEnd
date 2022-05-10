import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import DatepickerModal from '../DatePicker/DatepickerModal'
import NumericInput from 'react-numeric-input'
import '../../Assets/styles/css/Components/datePickerModal.css'
const SearchDatePicker = () => {
  const [rooms, setRooms] = useState(0)
  const [persons, setPersons] = useState(0)
  const increase = () => {
    alert('ad')
  }
  return (
    <div>
      <div className='row'>
        <div className='col-md-12'>
          <div class='input-group'>
            {/* <i class='zmdi zmdi-calendar-alt input-group-symbol'></i> */}
            <DatepickerModal />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <div className='modal-input-container'>
            <button type='button' class='btn btn-primary'>
              -
            </button>
            <input
              type='text'
              class='form-control '
              placeholder='No rooms'
              name='street_01'
              required
              value={rooms}
              disabled
            />
            <button type='button' class='btn btn-primary'>
              +
            </button>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='modal-input-container'>
            <button type='button' class='btn btn-primary'>
              -
            </button>
            <input
              type='text'
              class='form-control '
              placeholder='No persons'
              name='street_01'
              required
              disabled
              value={persons}
            />
            <button type='button' class='btn btn-primary' onclick={increase}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchDatePicker
