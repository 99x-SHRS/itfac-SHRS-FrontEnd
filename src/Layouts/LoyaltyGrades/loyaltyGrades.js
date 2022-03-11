import React, { Component } from 'react'
import '../../Assets/styles/css/Layouts/loyaltyGrades.css'
class LoyaltyGrades extends Component {
  render() {
    return (
      <div>
        <div class='pricing-area'>
          <div>
            <div class='row'>
              <div class='col-md-4 col-sm-6 details-col'>
                <div class='single-price current-tier-container'>
                  <div class='price-header'>
                    <div className='current-tier-header'>
                      <b>Current tier</b>
                    </div>
                    <h3 class='title'>Insider</h3>
                  </div>
                  <div class='price-value'>
                    <div class='value current-tier'></div>
                  </div>
                  <ul class='deals'>
                    <p>
                      Enjoy <b>free lifetime access</b> to discounts at
                      participating properties worldwide.
                    </p>
                    <li>
                      <div className='feature-container'>
                        <div className='icon'>
                          <i class='fa-solid fa-check-circle'></i>
                        </div>
                        <div className='features'>
                          <b>10% discount</b>
                          <p>
                            You get a 10% discount on the price of your stay
                            before taxes and charges are applied
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-md-4 col-sm-6'>
                <div class='single-price '>
                  <div class='price-header'>
                    <h3 class='title'>Loyalist</h3>
                  </div>
                  <div class='price-value'>
                    <div class='value'></div>
                  </div>
                  <ul class='deals'>
                    <p>
                      Complete 5 stays in 2 years to unlock
                      <b> free lifetime access</b>
                      to travel rewards at participating properties.
                    </p>
                    <li>
                      <div className='feature-container'>
                        <div className='icon'>
                          <i class='fa-solid fa-check-circle'></i>
                        </div>
                        <div className='features'>
                          <b>10%–15% discounts</b>
                          <p>
                            This is a 10% or 15% discount applied to the price
                            before taxes and fees
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='feature-container'>
                        <div className='icon'>
                          <i class='fa-solid fa-check-circle'></i>
                        </div>
                        <div className='features'>
                          <b>Free breakfast</b>
                          <p>
                            Enjoy complimentary breakfast on select options with
                            your Genius stay
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='feature-container'>
                        <div className='icon'>
                          <i class='fa-solid fa-check-circle'></i>
                        </div>
                        <div className='features'>
                          <b>Free room upgrade</b>
                          <p>
                            Make the most of your stay with free upgrades on
                            select options
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-md-4 col-sm-6'>
                <div class='single-price'>
                  <div class='price-header'>
                    <h3 class='title'>VIP</h3>
                  </div>
                  <div class='price-value'>
                    <div class='value'></div>
                  </div>
                  <ul class='deals'>
                    <p>
                      Complete 15 stays in 2 years to unlock
                      <b>free lifetime acces</b> s to Genius Level 3 travel
                      rewards at participating properties.
                    </p>
                    <li>
                      <div className='feature-container'>
                        <div className='icon'>
                          <i class='fa-solid fa-check-circle'></i>
                        </div>
                        <div className='features'>
                          <b>10%–15% discounts</b>
                          <p>
                            This is a 10% or 15% discount applied to the price
                            before taxes and fees
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='feature-container'>
                        <div className='icon'>
                          <i class='fa-solid fa-check-circle'></i>
                        </div>
                        <div className='features'>
                          <b>Free breakfast</b>
                          <p>
                            Enjoy complimentary breakfast on select options with
                            your Genius stay
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='feature-container'>
                        <div className='icon'>
                          <i class='fa-solid fa-check-circle'></i>
                        </div>
                        <div className='features'>
                          <b>Free room upgrade</b>
                          <p>
                            Make the most of your stay with free upgrades on
                            select options
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='feature-container'>
                        <div className='icon'>
                          <i class='fa-solid fa-check-circle'></i>
                        </div>
                        <div className='features'>
                          <b>Free room upgrade</b>
                          <p>
                            Make the most of your stay with free upgrades on
                            select options
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoyaltyGrades
