import React, { Component } from 'react'

class SideSummary extends Component {
  render() {
    return (
      <div>
        <div className='border'>
          <h4 className='mb-3'>Booking Details</h4>
          <div className='time-container'>
            <div className='border-end '>
              <h5>
                <i class='fa fa-sign-in mr-1' aria-hidden='true'></i>
                Check-in date
              </h5>
              <p>Sun, Mar 20, 2022</p>
            </div>
            <div>
              <h5>
                <i class='fa fa-sign-out  mr-1' aria-hidden='true'></i>
                Check-out date
              </h5>
              <p>Tue, Mar 22, 2022</p>
            </div>
          </div>
          <div>
            <p>Total length of stay: 3 nights</p>
          </div>
          <div>
            <a href=''>Do you want to change the dates?</a>
          </div>
          <hr />
          <div>
            <p>You selected Deluxe room</p>
          </div>
          <div>
            <a href=''>Do you want to change the room type?</a>
          </div>
        </div>
        <div className='border mt-3'>
          <h4>Payment summary</h4>
          <div className='payment-summary'>
            <div>Deluxe Double Room</div>
            <div>LKR 20,098.38</div>
          </div>
        </div>
        <div className='border mt-3'>
          <div>
            <h4>How much will it cost to cancel?</h4>
            <p>
              Free cancellation until 11:59 PM on Mar 12 From 12:00 AM on Mar 13
              LKR 10,934
            </p>
          </div>
        </div>
        <div className='border mt-3'>
          <div>
            <h4>Your loyalty benefits included in the price:</h4>
            <p>14% discount</p>
            <p>Applied to the price before taxes and fees</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SideSummary
