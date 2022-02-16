import React, { Component } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import Profile from '../../Assets/images/profile/loggedIn-user.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import '../../Assets/styles/css/navbar.css'

const Navbars = () => {
  const [LoggedIn, setLoggedIn] = useState(true)
  const toggleChecked = () => setLoggedIn((LoggedIn) => !LoggedIn)

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
      <Navbar bg='light' expand='md' id='navbar'>
        <Container fluid>
          <Navbar.Brand>
            <h2>
              <b>BOOKNOW.COM</b>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='ms-auto my-2 my-lg-0'
              style={{ maxHeight: '3000px' }}
              navbarScroll
            >
              {LoggedIn ? null : (
                <Link to='/' className='nav-link'>
                  <Nav.Item>
                    <Button variant='outline-success ' className='signupbtn'>
                      Sign Up
                    </Button>
                  </Nav.Item>
                </Link>
              )}

              {LoggedIn ? null : (
                <Link to='/' className='nav-link'>
                  <Nav.Item>
                    <Button
                      variant='outline-success'
                      className='loginbtn'
                      onClick={toggleChecked}
                    >
                      Login
                    </Button>
                  </Nav.Item>
                </Link>
              )}
              {LoggedIn ? (
                <Link to='/' className='nav-link'>
                  <Nav.Item className='m-2'>
                    <h4>Home</h4>
                  </Nav.Item>
                </Link>
              ) : null}
              {LoggedIn ? (
                <Link to='/' className='nav-link'>
                  <Nav.Item className='m-2'>
                    <h4>Bookings</h4>
                  </Nav.Item>
                </Link>
              ) : null}
              {LoggedIn ? (
                <Link to='/' className='nav-link'>
                  <Nav.Item className='m-2'>
                    <h4>Saved</h4>
                  </Nav.Item>
                </Link>
              ) : null}
              {LoggedIn ? (
                <Link to='/' className='nav-link'>
                  <Nav.Item className='m-2' onClick={toggleChecked}>
                    <h4>Log out</h4>
                  </Nav.Item>
                </Link>
              ) : null}
              {LoggedIn ? (
                <Link to='/' className='nav-link'>
                  <div class='wrapper'>
                    <img
                      src={Profile}
                      alt='profile picture'
                      class='image--cover1'
                    />
                  </div>
                </Link>
              ) : (
                <Link to='/' className='nav-link'>
                  <div class='wrapper'>
                    <img
                      src={'/images/defaults/default-profile.png'}
                      alt='profile picture'
                      class='image--cover2'
                    />
                  </div>
                </Link>
              )}
              <Nav.Item></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbars
