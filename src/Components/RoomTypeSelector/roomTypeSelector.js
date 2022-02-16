import React, { Component } from 'react'
import DropDownList from '../../Components/DropDownList/dropDownList'
import RoomSelection from '../../Layouts/RoomSelection/roomSelection'
import HorizontalLine from '../HorizontalLine/horizontalLine'

import '../../Assets/styles/css/Layouts/roomTypeSelector.css'
const roomTypes = [
  {
    name: 'Single Room',
  },
  {
    name: 'Double Room',
  },
  {
    name: 'Triple Room',
  },
  {
    name: 'Singale duluxe Room',
  },
]
// const selectRoomType = function (event) {
//   event.preventDefault()
//   document.getElementById('room-type').innerHTML = event.target.value
//   console.log(event.target.value)
// }
class RoomTypeSelector extends Component {
  render() {
    return (
      <div>
        <div className='mt-4 pt-4' id='room-Type-Selector'>
          <HorizontalLine />
          <h3> Select Room Type</h3>
        </div>
        <div className='p-2 mb-5'>
          <form>
            <div className='room-type-selector row '>
              <DropDownList roomTypes={roomTypes} />
            </div>
          </form>
          <div className='mt-4'>
            <HorizontalLine />
          </div>
        </div>
        <RoomSelection />
      </div>
    )
  }
}

export default RoomTypeSelector
