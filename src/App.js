import Dashboard from './Pages/Home/dashboard'
import React, { useState, useEffect } from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'
import { css } from '@emotion/react'
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
