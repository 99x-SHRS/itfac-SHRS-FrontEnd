import React, { Component } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import Profile from '../../Assets/images/profile/loggedIn-user.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import '../../Assets/styles/css/Components/navbar.css'

const Navbars = () => {
  // const [LoggedIn, setLoggedIn] = useState(true)
  // const toggleChecked = () => setLoggedIn((LoggedIn) => !LoggedIn)

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

  return (
    <>
      <div className='nav-bar-container' id='navbar'>
        <img
          src={'/images/LOGO/short-logo.png'}
          className='short-logo'
          alt=''
        />
        <div className='notification-container'>
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
        <div>
          <div className='wrapper'></div>
        </div>
      </div>
    </>
  )
}

export default Navbars
