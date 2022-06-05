import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/navbar'
import LoyaltyGrades from '../../Layouts/LoyaltyGrades/loyaltyGrades'
import Footer from '../../Layouts/Footer/footer.js'
import RedeemLoyalty from '../../Layouts/LoyaltyGrades/redeemLoyalty'
import '../../Assets/styles/css/Pages/loyaltyDescription.css'

class LoyaltyDescription extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container loyalty-description'>
          <LoyaltyGrades />
          {/* <RedeemLoyalty /> */}
        </div>
        <Footer />
      </div>
    )
  }
}

export default LoyaltyDescription
