import React, { Component, useEffect } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import Profile from '../../Assets/images/profile/loggedIn-user.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Dashboard from '../../Pages/Home/dashboard'

import { toast } from 'react-toastify'
import '../../Assets/styles/css/Components/navbar.css'

const Navbars = () => {
  // const [LoggedIn, setLoggedIn] = useState(true)
  // const toggleChecked = () => setLoggedIn((LoggedIn) => !LoggedIn)
  useEffect(() => {
    window.scrollTo(0, 0)
    toast.configure()
  }, [])
  const [currency, setCurrency] = useState('USD')

  function notify(message) {
    toast.success(message)
  }
  var prevScrollpos = window.pageYOffset

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0'
    } else {
      document.getElementById('navbar').style.top = '-100px'
    }
    console.log(prevScrollpos)
    prevScrollpos = currentScrollPos
  }
  const homepage = () => {
    window.location.href = '/'
  }

  return (
    <>
      <div className='nav-bar-container' id='navbar'>
        <img
          src={'/images/LOGO/short-logo.png'}
          className='short-logo'
          alt='short logo'
          onClick={homepage}
        />
        <div className='right-align'>
          <div className='nav-items'>
            <select
              className='currency-selector'
              onChange={(e) => {
                setCurrency(e.target.value)

                notify('You changed currency to ' + e.target.value)
              }}
            >
              <option selected value={'USD'}>
                USD
              </option>
              <option value={'EUR'}>EUR</option>
              <option value={'GBP'}>GBP</option>
              <option value={'JPY'}>JPY</option>
              <option value={'CAD'}>CAD</option>
              <option value={'AUD'}>AUD</option>
            </select>
          </div>
          <div className='nav-items'>
            <div class='icons'>
              <div class='notification'>
                <a href='#'>
                  <div class='notBtn' href='#'>
                    <div class='number'>2</div>
                    <i class='fas fa-bell'></i>

                    <div class='box '>
                      <div class='display'>
                        <div class='nothing'>
                          <i class='fas fa-child stick'></i>
                          <div class='cent'>Looks Like your all caught up!</div>
                        </div>
                        <div class='cont'>
                          <div class='view-all-container'>
                            <div class=';'>
                              <button className='view-all'>View All</button>
                            </div>
                          </div>
                          <div class='sec'>
                            <div class='profCont'></div>
                            <div class=';'>
                              James liked your post: "Pure css notification box"
                            </div>
                            <div class='txt sub'> 2:30 pm</div>
                          </div>

                          <div class='sec'>
                            <div class='profCont'></div>
                            <div class=';'>
                              James liked your post: "Pure css notification box"
                            </div>
                            <div class='txt sub'> 2:30 pm</div>
                          </div>
                          <div class='sec'>
                            <div class='profCont'></div>
                            <div class=';'>
                              James liked your post: "Pure css notification box"
                            </div>
                            <div class='txt sub'> 2:30 pm</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='nav-items'>
            <div className='wrapper'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbars
