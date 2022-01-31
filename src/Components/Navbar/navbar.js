import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import '../../Assets/styles/css/navbar.css'
import Profile from '../../Assets/images/profile/loggedIn-user.jpg'
import { useState } from 'react'
const Navbars = () => {
  var prevScrollpos = window.pageYOffset
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0'
    } else {
      document.getElementById('navbar').style.top = '-100px'
    }
    prevScrollpos = currentScrollPos
  }

  const [LoggedIn, setLoggedIn] = useState(true)
  const toggleChecked = () => setLoggedIn((LoggedIn) => !LoggedIn)

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
                <Nav.Item className='m-2'>
                  <Button variant='outline-success ' className='signupbtn'>
                    Sign Up
                  </Button>
                </Nav.Item>
              )}

              {LoggedIn ? null : (
                <Nav.Item className='m-2'>
                  <Button
                    variant='outline-success'
                    className='loginbtn'
                    onClick={toggleChecked}
                  >
                    Login
                  </Button>
                </Nav.Item>
              )}
              {LoggedIn ? (
                <Nav.Item className='m-2'>
                  <h4>Bookings</h4>
                </Nav.Item>
              ) : null}
              {LoggedIn ? (
                <Nav.Item className='m-2'>
                  <h4>Bookings</h4>
                </Nav.Item>
              ) : null}
              {LoggedIn ? (
                <Nav.Item className='m-2'>
                  <h4>Bookings</h4>
                </Nav.Item>
              ) : null}
              {LoggedIn ? (
                <Nav.Item className='m-2' onClick={toggleChecked}>
                  <h4>Log out</h4>
                </Nav.Item>
              ) : null}
              {LoggedIn ? (
                <div class='wrapper'>
                  <img
                    src={Profile}
                    alt='profile picture'
                    class='image--cover'
                  />
                </div>
              ) : (
                <div class='wrapper'>
                  <img
                    src={'/images/defaults/default-profile.png'}
                    alt='profile picture'
                    class='image--cover'
                  />
                </div>
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
