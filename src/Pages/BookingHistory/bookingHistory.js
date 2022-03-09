import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/navbar'
import BookingHistroyTable from '../../Layouts/BookingHistroy/bookingHistroyTable'
class BookingHistory extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='conatainer booking-history-container'>
          <BookingHistroyTable />
        </div>
      </div>
    )
  }
}

export default BookingHistory
