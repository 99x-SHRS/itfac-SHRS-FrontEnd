import React, { useEffect } from 'react'
import Header from '../../Layouts/Header/header.js'
import TopDestination from '../../Layouts/TopDestination/topDestination.js'
import Browsetype from '../../Components/Carousel/browsetype.js'
import RecommondedHotels from '../../Layouts/RecommondedHotels/recommondedHotels.js'
import Footer from '../../Layouts/Footer/footer.js'

import getAllHotels from '../../Services/Api/Utilities/index.js'

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    pageOnLoad()
  }, [])

  const pageOnLoad = async () => {
    const recommondedData = await getAllHotels()
    console.log(recommondedData)
  }

  return (
    <div>
      <Header />
      <RecommondedHotels />
      <TopDestination />
      <RecommondedHotels />
      <Browsetype />
      <RecommondedHotels />
      <Footer />
    </div>
  )
}

export default Dashboard
