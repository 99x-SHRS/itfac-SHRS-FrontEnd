import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Dashboard from './Pages/Home/dashboard'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import PropagateLoader from 'react-spinners/PropagateLoader'
import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  let [color, setColor] = useState('#ffffff')
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <div className='App'>
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
        <Dashboard />
      )}
    </div>
  )
}

export default App
