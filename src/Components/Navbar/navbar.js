import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Nav, Container, Button } from 'react-bootstrap'
import Modal from 'react-responsive-modal'
import { toast } from 'react-toastify'
import Login from '../Login/login'
import Signup from '../Signup/signup'
import Dashboard from '../../Pages/Home/dashboard'
import SignupAndLogin from '../SignupAndLogin/signupAndLogin'
import LoginSignup from '../../Layouts/LoginSignup/loginSignup'
import Profile from '../../Assets/images/profile/loggedIn-user.jpg'
import '../../Assets/styles/css/Components/navbar.css'
import 'react-responsive-modal/styles.css'

const Navbars = () => {
  const [sideBox, setSideBox] = useState(false)
  const [currency, setCurrency] = useState('USD')
  const [login, setLogin] = useState(false)
  const [sign, setSign] = useState(false)
  const [loggedin, setLoggedin] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    toast.configure()
  }, [])

  const loginMount = () => {
    return LoginSignup
  }
  const onOpenModal = () => {
    setSign(true)
  }
  const onOpenModalLogin = () => {
    setLogin(true)
  }
  const onCloseModal = () => {
    setSign(false)
  }
  const onCloseModalclose = () => {
    setLogin(false)
  }

  const notify = (message) => {
    toast.success(message)
  }

  const homepage = () => {
    window.location.href = '/'
  }
  const loginForm = () => {}
  var prevScrollpos = window.pageYOffset

  window.onscroll = () => {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0'
    } else {
      document.getElementById('navbar').style.top = '-100px'
    }

    prevScrollpos = currentScrollPos
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
          {/* <div className='nav-items'>
            <i class='fa-solid fa-comment'></i>
          </div> */}
          <div className='nav-items'>
            <div class='icons'>
              <div class='notification'>
                <a href='#'>
                  <div class='notBtn' href='#'>
                    <div class='number'>2</div>
                    <i class='fas fa-bell '></i>

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
                            <div class=';'>Welcome to the booknow.lk.</div>
                            <div class='txt sub'> 2:30 pm</div>
                          </div>

                          <div class='sec'>
                            <div class='profCont'></div>
                            <div class=';'>
                              You can create account through cliking signup .
                            </div>
                            <div class='txt sub'> 2:30 pm</div>
                          </div>
                          <div class='sec'>
                            <div class='profCont'></div>
                            <div class=';'>Yah...Succesfully login!</div>
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

          {/* <div id='sideDropMenu'>
              <div>Bookings</div>
              <div>Saved Hotels</div>
              <div>Loyalty</div>
            </div> */}
          {loggedin ? (
            <div className='nav-items menu-dropdown'>
              <Dropdown>
                <Dropdown.Toggle
                  className='wrapper right-dropdown'
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
                  <Dropdown.Item>Messeges</Dropdown.Item>
                  <Dropdown.Item as={Link} to={'/seller/dashboard'}>
                    My Account
                  </Dropdown.Item>
                  <Dropdown.Item
                    href='#/action-3'
                    onClick={() => {
                      setLoggedin(false)
                    }}
                  >
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <>
              {' '}
              <div className='nav-items'>
                <span className='login-btn ' onClick={onOpenModal}>
                  Signup{' '}
                </span>
              </div>
              <div className='nav-items'>
                <span className='login-btn' onClick={onOpenModalLogin}>
                  login{' '}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      <div>
        <Modal open={sign} onClose={onCloseModal}>
          <SignupAndLogin />
          <Signup />
        </Modal>
        <Modal open={login} onClose={onCloseModalclose}>
          <SignupAndLogin />
          <Login />
        </Modal>
      </div>
    </>
  )
}

export default Navbars
