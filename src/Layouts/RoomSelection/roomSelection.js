import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import RoomImages from '../../Components/RoomTypeSelector/roomImages'
import HorizontalLine from '../../Components/HorizontalLine/horizontalLine'
import HashLoader from 'react-spinners/HashLoader'
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
          {loading || rooms == null ? (
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
              <TableBody rooms={rooms} />
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

const TableBody = ({ rooms }) => {
  const [room, setRoom] = useState(-1)
  const [roomsData, setRoomsData] = useState([])
  const [roomQty, setRoomQty] = useState(0)
  useEffect(() => {
    console.log('data')
    setRoomsData(rooms)
    console.log(rooms)
  }, [rooms])
  return (
    <>
      {roomsData.map((hotel, hotelId) => {
        return (
          <li class='table-row border border-dark'>
            <div class='col-sm-12 col-md-4  mb-3 '>
              <img src={souvenirs1[0].path} alt='' />
              <RoomImages roomId={hotel.roomId} />
            </div>
            <div class='col-sm-12 col-1  mb-3 bed-icon'>
              <div className='verticle-center'>
                {/* {[...Array(hotel.persons)].map((elementInArray, index) => (
                  <i key={index} class='fas fa-bed m-1'></i>
                ))} */}
              </div>
            </div>

            <div class='col-sm-12 col-md-2 mb-3'>
              {/* <div className='prices-container'>
                {hotel.disount != 0 ? (
                  <div className='save-today'>
                    Save {hotel.disount * 100} % Today
                  </div>
                ) : (
                  ''
                )}
                {hotel.disount != 0 ? (
                  <del>
                    <div class='or-amount'>Rs.{hotel.rate}</div>
                  </del>
                ) : (
                  ''
                )}

                <div className='room-price'>
                  Rs.{hotel.price * (1 - hotel.disount)}
                </div>
              </div> */}
            </div>
            <div class='col-sm-12 col-md-1  mb-3' data-label='Payment Status'>
              <div className='verticle-center no-rooms'>
                {/* <select
                  class='mdb-select '
                  searchable='Search here..'
                  onChange={(e) => {
                    // calculatePrice(e, hotel.price)
                    setRoom(hotelId)
                    setRoomQty(e.target.value)
                  }}
                >
                  {[...Array(hotel.noRooms)].map((elementInArray, index) =>
                    room == hotelId || room == -1 || roomQty == 0 ? (
                      <option key={index} value={index}>
                        {index}
                      </option>
                    ) : (
                      <option key={index} value={index} disabled>
                        {index}
                      </option>
                    )
                  )}
                </select> */}
              </div>
            </div>
            <div class='col-sm-12 col-md-4  mb-3' data-label='Payment Status'>
              Your price includes:
              <div className='services'>
                {/* {hotel.attributes.map((service, index) => {
                  return (
                    <div className='sleep-container'>
                      <i class='fa-solid fa-check mr-3'>
                        <div className='service-name'>{service}</div>
                      </i>
                    </div>
                  )
                })} */}
                <HorizontalLine />
              </div>
              {/* {roomQty != 0 && hotelId == room ? (
                <div>
                  <div className='tot-price'>
                    You can reserve this property today Rs.
                    {hotel.price * (1 - hotel.disount) * roomQty}
                  </div>
                  <HorizontalLine />
                  <br />
                </div>
              ) : (
                ''
              )} */}
              <div>
                {/* {hotelId == room && roomQty != 0 ? (
                  <button className='reserve-button'>
                    <Link to='/booking/5789/details'>
                      <a href='#second-page'>Reserve</a>
                    </Link>
                  </button>
                ) : (
                  <button className='reserve-button' disabled>
                    Reserve
                  </button>
                )} */}
              </div>
            </div>
          </li>
        )
      })}
    </>
  )
}
