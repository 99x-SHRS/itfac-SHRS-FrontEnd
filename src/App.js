import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Dashboard from './Pages/Home/dashboard'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import PropagateLoader from 'react-spinners/PropagateLoader'

import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <ul>
            <Link to='/'>Home</Link>
          </ul>
          <Routes>
            <Route exact path='/' element={<Dashboard />}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
