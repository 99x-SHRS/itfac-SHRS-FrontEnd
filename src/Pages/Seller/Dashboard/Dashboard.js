import React from 'react'
import Navbar from '../../../Components/Navbar/navbar.js'
import SellerDashboard from '../../../Layouts/SellerDashboard/SellerDashboard.js'
import CardLineChart from '../../../Components/Charts/CardLineChart.js'
import CardBarChart from '../../../Components/Charts/CardBarChart.js'
import '../../../Assets/styles/css/Seller/Pages/dashboard.css'
const Dashboard = () => {
  return (
    <div className='relative'>
      <Navbar />
      <div className='seller-dashboard'>
        <SellerDashboard />
        <div className='px-4 md:px-10 mx-auto w-full -m-24 chart-container  bg-blueGray-100'>
          <div className='flex flex-wrap'>
            <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'>
              <CardLineChart />
            </div>
            <div className='w-full xl:w-4/12 px-4'>
              <CardBarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
