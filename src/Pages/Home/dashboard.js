import React, { useEffect, useState } from 'react'
import Header from '../../Layouts/Header/header.js'
import TopDestination from '../../Layouts/TopDestination/topDestination.js'
import Browsetype from '../../Components/Carousel/browsetype.js'
import RecommondedHotels from '../../Layouts/RecommondedHotels/recommondedHotels.js'
import Footer from '../../Layouts/Footer/footer.js'

const Dashboard = () => {
  return (
    <div>
      <Header />
      {/* <RecommondedHotels /> */}
      <TopDestination />
      {/* <RecommondedHotels /> */}
      <Browsetype />
      {/* <RecommondedHotels /> */}
      <Footer />
    </div>
  )
}

export default Dashboard
