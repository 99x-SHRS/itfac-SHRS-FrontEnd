import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/navbar'
import BookingHistroyTable from '../../Layouts/BookingHistroy/bookingHistroyTable'
import Footer from '../../Layouts/Footer/footer'
const BookingHistory = () => {
  return (
    <div>
      <Navbar />
      <div className='conatainer booking-history-container'>
        <BookingHistroyTable />
      </div>
      <Footer />
    </div>
  )
}

export default BookingHistory
