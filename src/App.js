import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PropagateLoader from 'react-spinners/PropagateLoader'
import React, { useState, useEffect } from 'react'

import UserRoutes from './Routes/userRouter'
import ChatBot from './Services/ChatBot/chatBot.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  let [color, setColor] = useState('#ffffff')
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <Router>
      <div className='App'>
        {/* <ChatBot />
        <Routes>{UserRoutes}</Routes> */}
        {loading ? (
          <div className='Loader'>
            <PropagateLoader
              loading={loading}
              size={25}
              margin={2}
              color='#00AD5F'
            />
          </div>
        ) : (
          <>
            <ChatBot />
            <Routes>{UserRoutes}</Routes>
          </>
        )}
      </div>
    </Router>
  )
}

export default App
