import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/navbar'
import LoyaltyGrades from '../../Layouts/LoyaltyGrades/loyaltyGrades'
import Footer from '../../Layouts/Footer/footer.js'

import '../../Assets/styles/css/Pages/loyaltyDescription.css'

class LoyaltyDescription extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container loyalty-description'>
          <LoyaltyGrades />
        </div>
        <Footer />
      </div>
    )
  }
}

export default LoyaltyDescription
