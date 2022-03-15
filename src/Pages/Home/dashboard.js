import React, { useEffect } from 'react'
import Header from '../../Layouts/Header/header.js'
import TopDestination from '../../Layouts/TopDestination/topDestination.js'
import Browsetype from '../../Components/Carousel/browsetype.js'
import RecommondedHotels from '../../Layouts/RecommondedHotels/recommondedHotels.js'
import Footer from '../../Layouts/Footer/footer.js'
import axios from 'axios'
const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    const getpendingDetails = async () => {
      await axios
        .post(`http://localhost:8000/api/hotel/getHotelsByStatus`, {
          status: 'pending',
          page: 0,
        })
        .then((response) => {
          console.log(response)
          // const data = res.data;
          // console.log(data);
          // setItems2(data);
        })
        .catch((err) => {
          console.log(err)
        })
      // const total = res.headers.get("x-total-count");
      // setpageCount(Math.ceil(total / 10));
      // //console.log(total);
    }
    getpendingDetails()
  }, [])
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
