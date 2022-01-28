import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import '../../Assets/styles/css/navbar.css'

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
  return (
    <>
      <Navbar bg='light' expand='md' id='navbar'>
        <Container fluid>
          <Navbar.Brand href='#'>
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
              <Nav.Link href='#action1'>
                <Button variant='outline-success ' className='signupbtn'>
                  Sign Up
                </Button>
              </Nav.Link>

              <Nav.Link href='#action1'>
                <Button variant='outline-success' className='loginbtn'>
                  Login
                </Button>
              </Nav.Link>
              <Nav.Link href='#action1'>
                <div class='wrapper'>
                  <img
                    src='https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg'
                    alt=''
                    class='image--cover'
                  />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbars
