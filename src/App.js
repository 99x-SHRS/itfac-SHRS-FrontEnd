import { BrowserRouter as Router, Routes } from 'react-router-dom'
import PropagateLoader from 'react-spinners/PropagateLoader'
import React, { useState, useEffect } from 'react'
import History from './Components/History/History'
import UserRoutes from './Routes/UserRouter'
import SellerRoutes from './Routes/SellerRouter'
import exceptionsRouters from './Routes/ExceptionsRouters'
import ChatBot from './Services/ChatBot/ChatBot.js'
import ShareButton from './Components/ShareButton/ShareButton'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  let [color, setColor] = useState('#ffffff')
  const [share, setShare] = useState(false)
  const [session, setSession] = useState(true)

  useEffect(() => {
    setSession(localStorage.getItem('session'))
    setLoading(true)
  }, [])

  useEffect(() => {
    if (session == true) {
      setTimeout(() => {
        setShare(localStorage.getItem('session'))
      }, 0)
    } else {
      setShare(false)
    }

    if (session == false || session == null) {
      setShare(false)
    }
  }, [session])

  return (
    <Router history={History}>
      <div className='App'>
        <Routes>{UserRoutes}</Routes>
        <Routes>{SellerRoutes}</Routes>
        <Routes>{exceptionsRouters}</Routes>
        {share ? (
          <>
            {' '}
            <ShareButton />
          </>
        ) : (
          <></>
        )}

        <ChatBot />
        {/* {loading ? (
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
            <Routes>{UserRoutes}</Routes>
            <ChatBot />
          </>
        )} */}
      </div>
    </Router>
  )
}

export default App
