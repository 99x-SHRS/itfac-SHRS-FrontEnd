import React, { useEffect, useState } from 'react'
import Navbars from '../../../Components/Navbar/navbar'
import InfomationCard from '../../../Components/Cards/InfomationCard'
import CardMyHotel from '../../../Components/Cards/CardMyHotel'
import Footer from '../../../Layouts/Footer/footer'
import { getHotelByUserId } from '../../../Services/Api/Utilities'
import '../../../Assets/styles/css/Seller/Pages/listedHotel.css'

const ListedHotels = () => {
  const [hotels, setHotels] = useState(null)
  useEffect(() => {
    getHotels()
  }, [])
  const getHotels = async () => {
    const dataModel = {
      id: 1, // user id
    }
    await getHotelByUserId(dataModel)
      .then((res) => {
        setHotels(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <Navbars />
      <div className='hotel-listing-container '>
        <InfomationCard />
        <div className='hotel-heading mt-3'>
          <i class='fa-solid fa-hotel'></i>
          <h3>Your hotels</h3>
        </div>
        <div className='row mt-5 mb-5 '>
          {hotels != null ? (
            hotels.map((hotel) => {
              return (
                <div class=' col-lg-3 col-sm-12 col-md-6 mt-2 '>
                  <CardMyHotel hotel={hotel} />
                </div>
              )
            })
          ) : (
            <>
              {' '}
              <div
                class='alert alert-primary'
                role='alert'
                style={{
                  height: '20rem',
                  textAlign: 'center',
                }}
              >
                Nothing to display.
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ListedHotels