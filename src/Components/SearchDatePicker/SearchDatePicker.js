import React, { useEffect, useState } from 'react'
import { getAvailableRoomQtyByRoomId } from '../../Services/Api/Utilities'
import DatepickerModal from '../DatePicker/DatepickerModal'
import '../../Assets/styles/css/Components/datePickerModal.css'
import { useNavigate } from 'react-router-dom'

const SearchDatePicker = ({ hotelId, hotelName }) => {
  let [rooms, setRooms] = useState(1)
  let [persons, setPersons] = useState(1)
  const navigate = useNavigate()
  var today = new Date().toISOString().slice(0, 10)

  const [dateRange, setDateRange] = useState([today, today])

  const increase = (status) => {
    if (status == 1) {
      setPersons((persons += 1))
    } else {
      setRooms((rooms += 1))
    }
  }
  const decrease = (status) => {
    if (status == 1) {
      if (persons >= 0) {
        setPersons(persons--)
      }
    } else {
      if (rooms >= 0) {
        setRooms(rooms--)
      }
    }
    console.log(persons)
    console.log(rooms)
  }
  const submitHandle = () => {
    const URL = `/hotels?location=${hotelName}&checkin-date=${dateRange[0]}&checkout-date=${dateRange[1]}&adults=${persons}&children=0&rooms=${rooms}`
    // window.location.href = `/hotels?${URL}`
    navigate(URL)
  }

  return (
    <form onSubmit={submitHandle}>
      <div className='row'>
        <div className='search-modal-container'>
          <DatepickerModal setDateRange={setDateRange} />
          <input
            type='text'
            class='form-control mt-2 text-center'
            name='street_01'
            value={persons + ' persons and ' + rooms + ' rooms'}
            disabled
          />

          <div className='modal-input-container mt-2'>
            <button
              type='button'
              class='btn btn-primary'
              onClick={() => {
                decrease(1)
              }}
            >
              -
            </button>
            <input
              type='text'
              class='form-control  search-room-details'
              placeholder='No persons'
              name='street_01'
              required
              value={persons > 0 ? persons + ' rooms' : 'No persons'}
            />
            <button
              type='button'
              class='btn btn-primary'
              onClick={() => {
                increase(1)
              }}
            >
              +
            </button>
          </div>
          <div className='modal-input-container '>
            <button
              type='button'
              class='btn btn-primary'
              onClick={() => {
                decrease(0)
              }}
            >
              -
            </button>
            <input
              type='text'
              class='form-control search-room-details'
              placeholder='No rooms'
              name='street_01'
              required
              value={rooms > 0 ? rooms + ' rooms' : 'No rooms'}
            />
            <button
              type='button'
              class='btn btn-primary'
              onClick={() => {
                increase(0)
              }}
            >
              +
            </button>
          </div>
          <button class='btn btn-primary search-modal-btn' type='submit'>
            <p>Check availability</p>
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchDatePicker
