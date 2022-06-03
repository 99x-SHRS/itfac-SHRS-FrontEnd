import React, { useEffect, useState } from 'react'
import { getMessagesByRecieverId } from '../../Services/Api/Utilities'
const Notifications = () => {
  const [messages, setMessage] = useState(null)
  useEffect(() => {
    getMessages()
  }, [])
  const getMessages = async () => {
    const dataModal = {
      id: localStorage.getItem('user'), //user id
    }
    await getMessagesByRecieverId(dataModal)
      .then((res) => {
        setMessage(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      {messages != null ? (
        messages.map((message, index) => {
          return (
            <div class='sec'>
              <div class='profCont'></div>
              <div class=';'>{message.notification}</div>
              <div class='txt sub'> {message.createdAt}</div>
            </div>
          )
        })
      ) : (
        <></>
      )}
    </div>
  )
}

export default Notifications
