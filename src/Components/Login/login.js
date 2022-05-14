import React, { Component, useEffect, useState } from 'react'
import { userLogin, updateUserById } from '../../Services/Api/Utilities'
import DarkOverlaybackGround from '../DarkOverlaybackGround/DarkOverlaybackGround'
import '../../Assets/styles/css/Components/login.css'

const Login = ({ setLogin }) => {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const updateRefreshToken = async () => {
    const uId = localStorage.getItem('uId')
    const dataModal = {
      refreshToken: localStorage.getItem('rtoken'),
    }
    await updateUserById(uId, dataModal)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const loginHandle = async () => {
    setContent('sign in to your account')
    setLoading(true)
    const dataModel = {
      email: document.getElementById('loginEmail2').value,
      password: document.getElementById('loginPassword2').value,
    }
    await userLogin(dataModel)
      .then((res) => {
        if (res.data.status === 'success') {
          localStorage.setItem('atoken', res.data.accessToken)
          localStorage.setItem('rtoken', res.data.refreshToken)
          localStorage.setItem('uId', 1)
        }

        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    setLoading(false)
    setLogin(false)
  }
  return (
    <div className='modal-body login-container'>
      <form className='contact-form form-validate4'>
        <div className='form-group'>
          <form class='login'>
            <h2>Login</h2>
            <input
              type='text'
              placeholder='Username'
              id='loginEmail2'
              required
            />
            <input
              type='password'
              placeholder='Password'
              id='loginPassword2'
              required
            />
            <button type='submit' onClick={loginHandle}>
              Login
            </button>
          </form>
        </div>
      </form>
      <DarkOverlaybackGround loading={loading} content={content} />
    </div>
  )
}

export default Login
