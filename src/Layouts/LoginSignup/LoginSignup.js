import React, { Component } from 'react'
import $ from 'jquery'
import '../../Assets/styles/css/Layouts/loginSignup.css'

class LoginSignup extends Component {
  componentDidMount() {
    $('#modal_trigger').leanModal({
      top: 100,
      overlay: 0.6,
      closeButton: '.modal_close',
    })

    $(function () {
      // Calling Login Form
      $('#login_form').click(function () {
        $('.social_login').hide()
        $('.user_login').show()
        return false
      })

      // Calling Register Form
      $('#register_form').click(function () {
        $('.social_login').hide()
        $('.user_register').show()
        $('.header_title').text('Register')
        return false
      })

      // Going back to Social Forms
      $('.back_btn').click(function () {
        $('.user_login').hide()
        $('.user_register').hide()
        $('.social_login').show()
        $('.header_title').text('Login')
        return false
      })
    })
  }
  render() {
    return (
      <div>
        <div class='container'>
          {/* <h1>Popup Login & Signup with jQuery</h1>
          <a id='modal_trigger' href='#modal' class='btn'>
            Click here to Login or register
          </a> */}

          <div id='modal' class='popupContainer' style='display:none;'>
            <header class='popupHeader'>
              <span class='header_title'>Login</span>
              <span class='modal_close'>
                <i class='fa fa-times'></i>
              </span>
            </header>

            <section class='popupBody'>
              <div class='social_login'>
                <div class=''>
                  <a href='#' class='social_box fb'>
                    <span class='icon'>
                      <i class='fa fa-facebook'></i>
                    </span>
                    <span class='icon_title'>Connect with Facebook</span>
                  </a>

                  <a href='#' class='social_box google'>
                    <span class='icon'>
                      <i class='fa fa-google-plus'></i>
                    </span>
                    <span class='icon_title'>Connect with Google</span>
                  </a>
                </div>

                <div class='centeredText'>
                  <span>Or use your Email address</span>
                </div>

                <div class='action_btns'>
                  <div class='one_half'>
                    <a href='#' id='login_form' class='btn'>
                      Login
                    </a>
                  </div>
                  <div class='one_half last'>
                    <a href='#' id='register_form' class='btn'>
                      Sign up
                    </a>
                  </div>
                </div>
              </div>

              <div class='user_login'>
                <form>
                  <label>Email / Username</label>
                  <input type='text' />
                  <br />

                  <label>Password</label>
                  <input type='password' />
                  <br />

                  <div class='checkbox'>
                    <input id='remember' type='checkbox' />
                    <label for='remember'>Remember me on this computer</label>
                  </div>

                  <div class='action_btns'>
                    <div class='one_half'>
                      <a href='#' class='btn back_btn'>
                        <i class='fa fa-angle-double-left'></i> Back
                      </a>
                    </div>
                    <div class='one_half last'>
                      <a href='#' class='btn btn_red'>
                        Login
                      </a>
                    </div>
                  </div>
                </form>

                <a href='#' class='forgot_password'>
                  Forgot password?
                </a>
              </div>

              <div class='user_register'>
                <form>
                  <label>Full Name</label>
                  <input type='text' />
                  <br />

                  <label>Email Address</label>
                  <input type='email' />
                  <br />

                  <label>Password</label>
                  <input type='password' />
                  <br />

                  <div class='checkbox'>
                    <input id='send_updates' type='checkbox' />
                    <label for='send_updates'>
                      Send me occasional email updates
                    </label>
                  </div>

                  <div class='action_btns'>
                    <div class='one_half'>
                      <a href='#' class='btn back_btn'>
                        <i class='fa fa-angle-double-left'></i> Back
                      </a>
                    </div>
                    <div class='one_half last'>
                      <a href='#' class='btn btn_red'>
                        Register
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginSignup
