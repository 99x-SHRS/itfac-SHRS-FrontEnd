import React, { useEffect, useState } from 'react'
import { getAvailableRoomQtyByRoomId } from '../../Services/Api/Utilities'
import DatepickerModal from '../DatePicker/DatepickerModal'
import '../../Assets/styles/css/components/datePickerModal.css'
import { useNavigate } from 'react-router-dom'

const SearchDatePicker = ({ hotelName }) => {
  let [rooms, setRooms] = useState(1)
  let [adults, setAdults] = useState(1)
  let [children, setChildren] = useState(0)
  const navigate = useNavigate()
  var today = new Date().toISOString().slice(0, 10)

  const [dateRange, setDateRange] = useState([today, today])

  const increase = (status) => {
    if (status == 1) {
      setAdults((adults += 1))
    } else if (status == 2) {
      setRooms((rooms += 1))
    } else {
      setChildren((children += 1))
    }
  }
  const decrease = (status) => {
    if (status == 1) {
      if (adults >= 0) {
        setAdults(adults--)
      }
    } else if (status == 2) {
      if (rooms >= 0) {
        setRooms(rooms--)
      }
    } else {
      if (rooms >= 0) {
        setChildren(children--)
      }
    }
  }

  const submitHandle = () => {
    const URL = `/hotels?location=${hotelName}&checkin-date=${dateRange[0]
      .toISOString()
      .slice(0, 10)}&checkout-date=${dateRange[1]
      .toISOString()
      .slice(0, 10)}&adults=${adults}&children=${children}&rooms=${rooms}`
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
            value={adults + ' adults and ' + rooms + ' rooms'}
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
              placeholder='No adults'
              required
              value={adults > 0 ? adults + ' adults' : 'No adults'}
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
                decrease(3)
              }}
            >
              -
            </button>
            <input
              type='text'
              class='form-control search-room-details'
              placeholder='No children'
              required
              value={children > 0 ? children + ' children' : 'No children'}
            />
            <button
              type='button'
              class='btn btn-primary'
              onClick={() => {
                increase(3)
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
                decrease(2)
              }}
            >
              -
            </button>
            <input
              type='text'
              class='form-control search-room-details'
              placeholder='No rooms'
              required
              value={rooms > 0 ? rooms + ' rooms' : 'No rooms'}
            />
            <button
              type='button'
              class='btn btn-primary'
              onClick={() => {
                increase(2)
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
