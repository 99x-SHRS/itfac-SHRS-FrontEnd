import React, { Component, useEffect, useState } from 'react'
import { userLogin, registerHotel } from '../../Services/Api/Utilities'
import DarkOverlaybackGround from '../DarkOverlaybackGround/DarkOverlaybackGround'
import '../../Assets/styles/css/Components/signupAndLogin.css'

const SignupAndLogin = ({ setLogin }) => {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const signUpButton = document.getElementById('signUp')
    const signInButton = document.getElementById('signIn')
    const container = document.getElementById('container')

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active')
    })

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active')
    })
  }, [])

  const loginHandle = async () => {
    setContent('sign in to you account')
    setLoading(true)
    const dataModel = {
      email: document.getElementById('loginEmail').value,
      password: document.getElementById('loginPassword').value,
    }

    await userLogin(dataModel)
      .then((res) => {
        if (res.data.status === 'success') {
          localStorage.setItem('atoken', res.data.accessToken)
          localStorage.setItem('rtoken', res.data.refreshToken)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    setLoading(false)
    setLogin(false)
  }
  return (
    <div className='login-model'>
      <div class='container' id='container'>
        <div class='form-container sign-up-container'>
          <form action='#'>
            <h1>Create Account</h1>
            <div class='social-container'>
              <a href='#' class='social'>
                <i class='fab fa-facebook-f'></i>
              </a>
              <a href='#' class='social'>
                <i class='fab fa-google-plus-g'></i>
              </a>
              <a href='#' class='social'>
                <i class='fab fa-linkedin-in'></i>
              </a>
            </div>
            <span>or use your email for registration</span>

            <input type='email' placeholder='Email' required />
            <input type='password' placeholder='Password' required />
            <input type='password' placeholder='re-password' required />
            <button>Sign Up</button>
          </form>
        </div>
        <div class='form-container sign-in-container'>
          <form onSubmit={loginHandle}>
            <h1>Sign in</h1>
            <div class='social-container'>
              <a href='#' class='social'>
                <i class='fab fa-facebook-f'></i>
              </a>
              <a href='#' class='social'>
                <i class='fab fa-google-plus-g'></i>
              </a>
              <a href='#' class='social'>
                <i class='fab fa-linkedin-in'></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type='email' placeholder='Email' id='loginEmail' required />
            <input
              type='password'
              placeholder='Password'
              id='loginPassword'
              required
            />
            <a href='#'>Forgot your password?</a>
            <button type='submit'>Sign In</button>
          </form>
        </div>
        <div class='overlay-container'>
          <div class='overlay'>
            <div class='overlay-panel overlay-left'>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class='ghost' id='signIn'>
                Sign In
              </button>
            </div>
            <div class='overlay-panel overlay-right'>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class='ghost' id='signUp'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <DarkOverlaybackGround loading={loading} content={content} />
    </div>
  )
}

export default SignupAndLogin
