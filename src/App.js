import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import PropagateLoader from 'react-spinners/PropagateLoader'
import React, { useState, useEffect } from 'react'
import './App.css'

import Dashboard from './Pages/Home/dashboard'
import Hotels from './Pages/Hotels/hotels'

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
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Dashboard />}></Route>
          <Route exact path='/hotels' element={<Hotels />}></Route>
        </Routes>
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
          <Routes>
            <Route exact path='/' element={<Dashboard />}></Route>
          </Routes>
        )} */}
      </div>
    </Router>
  )
}

export default App
