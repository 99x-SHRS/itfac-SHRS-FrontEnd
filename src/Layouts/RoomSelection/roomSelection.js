import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

import HashLoader from 'react-spinners/HashLoader'
import TableBody from './roomTableBody'
import {
  getRoomTypesByHotelId,
  getAvailbleRooms,
  getRoomByHotelId,
} from '../../Services/Api/Utilities/index.js'
import '../../Assets/styles/css/Layouts/roomSelection.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const souvenirs1 = [
  {
    path: '/images/property-types/kabana.jpg',
  },
  {
    path: '/images/property-types/villa.jpg',
  },
  {
    path: '/images/property-types/villa.jpg',
  },
  {
    path: '/images/property-types/bangalow.jpg',
  },
  {
    path: '/images/property-types/guest-houses.jpg',
  },
  {
    path: '/images/property-types/guest-houses.jpg',
  },
  {
    path: '/images/property-types/guest-houses.jpg',
  },
]
const souvenirs2 = [
  {
    path: '/images/property-types/kabana.jpg',
  },
  {
    path: '/images/property-types/kabana.jpg',
  },
  {
    path: '/images/property-types/villa.jpg',
  },
  {
    path: '/images/property-types/bangalow.jpg',
  },
  {
    path: '/images/property-types/guest-houses.jpg',
  },
  {
    path: '/images/property-types/guest-houses.jpg',
  },
  {
    path: '/images/property-types/guest-houses.jpg',
  },
]
const hotelData = [
  {
    name: 'Avenra',
    sleeps: 1,
    price: 1000,
    noRooms: 3,
    disount: 0.1,
    attributes: [
      'Pool',
      'Pub',
      'DJ',
      'Air conditioning',
      'Private Bathroom',
      'Flat-screen',
      'Refrigerator',
      'Fan',
    ],
  },
  {
    name: 'Hareesha',
    sleeps: 2,
    price: 1200,
    noRooms: 2,
    disount: 0.4,
    attributes: [
      'Pool',
      'Pub',
      'DJ',
      'Air conditioning',
      'Private Bathroom',
      'Flat-screen',
      'Refrigerator',
      'Fan',
    ],
  },
  {
    name: 'Jetwings',
    sleeps: 3,
    price: 1300,
    noRooms: 1,
    disount: 0.2,
    attributes: [
      'Pool',
      'Pub',
      'DJ',
      'Air conditioning',
      'Private Bathroom',
      'Flat-screen',
      'Refrigerator',
      'Fan',
    ],
  },
  {
    name: 'SunQueen',
    sleeps: 2,
    price: 1500,
    noRooms: 3,
    disount: 0.0,
    attributes: [
      'Pool',
      'Pub',
      'DJ',
      'Air conditioning',
      'Private Bathroom',
      'Flat-screen',
      'Refrigerator',
      'Fan',
    ],
  },
]

function calculatePrice(e, price) {
  // alert(e.target.value)
  // alert(price)
}

const RoomSelection = ({ roomTypeId }) => {
  const [loading, setLoading] = useState(false)

  const [searchedParams, setSearchedparams] = useSearchParams()

  const [rooms, setRooms] = useState({})
  const [pageCount, setpageCount] = useState(0)
  const limit = 10

  useEffect(() => {
    window.scrollTo(0, 0)
    console.log('changed to :' + roomTypeId)
    fetchRoomData(0)
    setLoading(true)
  }, [limit])

  useEffect(() => {
    fetchRoomData(0)
  }, [roomTypeId])

  const fetchRoomData = async (page) => {
    const dataModel = {
      location: searchedParams.get('location') || '',
      checkInDate: searchedParams.get('checkin-date') || '',
      checkOutDate: searchedParams.get('checkout-date') || '',
      adult: searchedParams.get('adults') || '',
      children: searchedParams.get('children') || '',
      rooms: searchedParams.get('rooms') || '',
      hotelId: searchedParams.get('hotel') || '',
      roomTypeId: roomTypeId,
      page: page,
    }
    console.log(dataModel)

    await getAvailbleRooms(dataModel)
      .then((res) => {
        setRooms(res.data.rows)

        let totalRows = res.data.count
        if (res.status == 200) {
          setLoading(false)
        }
        setpageCount(Math.ceil(totalRows / limit))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handlePageClick = async (data) => {
    let currentPage = data.selected
    console.log(currentPage)
    fetchRoomData(currentPage)
    window.scrollTo(0, 1100)
  }

  return (
    <div className='room-selection'>
      <div class='room-selection-container'>
        <ul class='responsive-table'>
          <li class='table-header bg-primary text-white'>
            <div class='col-sm-12 col-md-4'>Room</div>
            <div class='col-sm-12 col-md-1'>Sleeps</div>
            <div class='col-sm-12 col-md-2'>Price per night</div>
            <div class='col-sm-12 col-md-1'>Rooms</div>
            <div class='col-sm-12 col-md-4'>Benefits</div>
          </li>
          {loading || rooms == null || rooms == undefined ? (
            <div className='hotel-loader'>
              <HashLoader
                loading={loading}
                size={25}
                margin={2}
                color='#00AD5F'
              />
            </div>
          ) : (
            <>
              <TableBody rooms={rooms} souvenirs1={souvenirs1} />
            </>
          )}

          <div className='mt-3 pagination-container' id='pagination-div'>
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={'pagination justify-content-center'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
              breakClassName={'page-item'}
              breakLinkClassName={'page-link'}
              activeClassName={'active'}
            />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default RoomSelection
