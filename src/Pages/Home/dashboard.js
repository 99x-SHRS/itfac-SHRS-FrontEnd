import Header from '../../Layouts/Header/header.js'
import TopDestination from '../../Layouts/TopDestination/topDestination.js'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className='container mt-5'>
        <h1>Top Destinations is Sri Lanka</h1>
        <TopDestination />
      </div>
    </div>
  )
}

export default Dashboard
