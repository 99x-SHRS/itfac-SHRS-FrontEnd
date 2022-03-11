import React, { Component, useEffect } from 'react'
import { Dropdown, Nav, Container, Button } from 'react-bootstrap'
import Profile from '../../Assets/images/profile/loggedIn-user.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Dashboard from '../../Pages/Home/dashboard'

import { toast } from 'react-toastify'
import '../../Assets/styles/css/Components/navbar.css'

const Navbars = () => {
  // const [LoggedIn, setLoggedIn] = useState(true)
  // const toggleChecked = () => setLoggedIn((LoggedIn) => !LoggedIn)
  const [sideBox, setSideBox] = useState(false)
  const [currency, setCurrency] = useState('USD')

  useEffect(() => {
    window.scrollTo(0, 0)
    toast.configure()
  }, [])

  // useEffect(() => {
  //   var x = document.getElementById('sideDropMenu')
  //   if (sideBox) {
  //     x.style.display = 'block'
  //   } else {
  //     x.style.display = 'none'
  //   }
  // }, [sideBox])

  // const concernedElement = document.querySelector('.wrapper')

  // document.addEventListener('click', (event) => {
  //   if (concernedElement.contains(event.target)) {
  //     setSideBox(!sideBox)
  //     console.log('Clicked Inside')
  //   } else {
  //     setSideBox(false)
  //     console.log('Clicked out')
  //   }
  // })

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
              <option selected value={'LKR'}>
                LKR
              </option>
              <option value={'EUR'}>EUR</option>
              <option value={'EUR'}>EUR</option>
              <option value={'GBP'}>GBP</option>
              <option value={'JPY'}>JPY</option>
              <option value={'CAD'}>CAD</option>
              <option value={'AUD'}>AUD</option>
            </select>
          </div>
          <div className='nav-items'>
            <i class='fa-solid fa-comment'></i>
          </div>
          <div className='nav-items'>
            <div class='icons'>
              <div class='notification'>
                <a href='#'>
                  <div class='notBtn' href='#'>
                    <div class='number'>2</div>
                    <i class='fas fa-bell'></i>

                    <div class='box'>
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
            {/* <div id='sideDropMenu'>
              <div>Bookings</div>
              <div>Saved Hotels</div>
              <div>Loyalty</div>
            </div> */}
            <Dropdown>
              <Dropdown.Toggle
                className='wrapper'
                id='dropdown-basic'
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to={'/booking-history'}>
                  Bookings
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={'/saved-hotel'}>
                  Saved
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={'/loyalty-program'}>
                  Loyalty
                </Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Messeges</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>My Account</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbars
