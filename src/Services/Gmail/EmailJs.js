import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const SendEmail = (inputform) => {
  // e.preventDefault()
  console.log('send email')
  const data = {
    from_name: 'Navod',
    to_name: 'Dilshan',
    message: 'Hello Dilshan',
    subject: 'Test',
    reply_to: 'navoddilshan9@gmail.com',
  }
  emailjs
    .sendForm(
      'service_yrdr13l',
      'template_o5gugxk',
      inputform,
      'Y5637fVCCb5CKjEhv'
    )
    .then(
      (result) => {
        console.log(result)
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
}

const SendSignUpEmail = (inputform) => {
  // e.preventDefault()
  console.log('send email')
  const data = {
    from_name: 'Navod',
    to_name: 'Dilshan',
    message: 'Hello Dilshan',
    subject: 'Test',
    reply_to: 'navoddilshan9@gmail.com',
  }
  emailjs
    .sendForm(
      'service_yrdr13l',
      'template_96s2zip',
      inputform,
      'Y5637fVCCb5CKjEhv'
    )
    .then(
      (result) => {
        console.log(result)
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
}
export { SendEmail, SendSignUpEmail }
