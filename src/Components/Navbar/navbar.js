import React, { Component, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Dropdown, Nav, Container, Button } from 'react-bootstrap'
import Modal from 'react-responsive-modal'
import { toast } from 'react-toastify'
import Login from '../Login/login'
import Signup from '../Signup/signup'
import SignupAndLogin from '../SignupAndLogin/signupAndLogin'
import LoginSignup from '../../Layouts/LoginSignup/loginSignup'
import { updateUserById } from '../../Services/Api/Utilities'
import '../../Assets/styles/css/Components/navbar.css'
import 'react-responsive-modal/styles.css'

const Navbars = () => {
  const [sideBox, setSideBox] = useState(false)
  const [currency, setCurrency] = useState('LKR')
  const [login, setLogin] = useState(false)
  const [sign, setSign] = useState(false)
  const [loggedin, setLoggedin] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
    toast.configure()
    let session = localStorage.getItem('session')
    let currency = localStorage.getItem('currency')
    console.log(session)
    if (session) {
      setLoggedin(true)
    } else {
      setLoggedin(false)
    }
    if (currency != null || currency != undefined) {
      setCurrency(currency)
    }
  }, [])
  useEffect(() => {
    document.getElementById('currency-selector').hidden = !loggedin
  }, [loggedin])

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

  const notifyError = (message) => {
    toast.error(message)
  }
  const notifySuccess = (message) => {
    toast.success(message)
  }

  const homepage = () => {
    navigate('/')
  }
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
  const logOut = async () => {
    const id = localStorage.getItem('user')
    const dataModal = {
      refreshToken: null,
    }
    await updateUserById(id, dataModal)
      .then((res) => {
        console.log(res)
        if (res.status == 200) {
          localStorage.clear()
        }
      })
      .catch((err) => {
        console.log(err)
      })
    navigate('/')
  }

  const changeCurrency = async (data) => {
    const id = localStorage.getItem('user')
    const dataModel = {
      currency: data,
    }
    await updateUserById(id, dataModel)
      .then((res) => {
        console.log(res)
        if (res.status == 200) {
          localStorage.setItem('currency', data)
          notifySuccess('You changed currency to ' + data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
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
              id='currency-selector'
              onChange={(e) => {
                setCurrency(e.target.value)
                changeCurrency(e.target.value)
              }}
            >
              <option selected value={currency}>
                {currency}
              </option>
              <option value={'LKR'}>LKR</option>
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
                    onClick={() => {
                      setLoggedin(false)
                      logOut()
                      homepage()
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
          <SignupAndLogin setSign={setSign} setLoggedin={setLoggedin} />
          <Signup setSign={setSign} setLoggedin={setLoggedin} />
        </Modal>
        <Modal open={login} onClose={onCloseModalclose}>
          <SignupAndLogin setLogin={setLogin} setLoggedin={setLoggedin} />
          <Login setLogin={setLogin} setLoggedin={setLoggedin} />
        </Modal>
      </div>
    </>
  )
}

export default Navbars
