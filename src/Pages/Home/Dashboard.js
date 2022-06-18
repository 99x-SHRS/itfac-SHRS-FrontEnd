import React, { useEffect, useState } from 'react'
import Header from '../../Layouts/Header/Header.js'
import TopDestination from '../../Layouts/TopDestination/TopDestination.js'
import Browsetype from '../../Components/Carousel/Browsetype.js'
import RecommondedHotels from '../../Layouts/RecommondedHotels/RecommondedHotels.js'
import Footer from '../../Layouts/Footer/Footer.js'
import { sortHotelsByBookingCount } from '../../Services/Api/Utilities/Index.js'
const Dashboard = () => {
  const [recommondedHotel, setRecommondedHotel] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0)
    pageOnLoad()
  }, [])

  const pageOnLoad = async () => {
    const dataModel = {
      id: localStorage.getItem('user'), //user id
    }
    await sortHotelsByBookingCount(dataModel)
      .then((res) => {
        console.log(res.data)
        setRecommondedHotel(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <Header />
      <RecommondedHotels hotels={recommondedHotel} />
      <TopDestination />
      <RecommondedHotels hotels={recommondedHotel} />
      <Browsetype />
      <RecommondedHotels hotels={recommondedHotel} />
      <Footer />
    </div>
  )
}

export default Dashboard
