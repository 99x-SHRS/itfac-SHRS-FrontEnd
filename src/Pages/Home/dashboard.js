import Header from '../../Layouts/Header/header.js'
import TopDestination from '../../Layouts/TopDestination/topDestination.js'
import Browsetype from '../../Components/Carousel/browsetype.js'
const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className='container mt-5'>
        <h1>Top Destinations in Sri Lanka</h1>
        <TopDestination />
        {/* <Browsetype /> */}
      </div>
    </div>
  )
}

export default Dashboard
