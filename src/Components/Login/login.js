import React, { Component } from 'react'
import '../../Assets/styles/css/Components/login.css'
class Login extends Component {
  render() {
    return (
      <div className='modal-body login-container'>
        <form className='contact-form form-validate4' novalidate='novalidate'>
          <div className='form-group'>
            <form class='login'>
              <h2>Login</h2>
              <input type='text' placeholder='Username' />
              <input type='password' placeholder='Password' />
              <button>Login</button>
            </form>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
