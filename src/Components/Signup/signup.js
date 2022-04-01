import React, { Component } from 'react'
import '../../Assets/styles/css/Components/login.css'

const Signup = (props) => {
  return (
    <div className='modal-body signup-container'>
      <form className='contact-form form-validate4' novalidate='novalidate'>
        <div className='form-group'>
          <form class='login'>
            <h2>Signup</h2>
            <input type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <input type='password' placeholder='Re enter Password' />
            <button type='submit'>Signup</button>
          </form>
        </div>
      </form>
    </div>
  )
}

export default Signup
