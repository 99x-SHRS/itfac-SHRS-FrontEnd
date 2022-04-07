import React, { useState, useEffect } from 'react'
import RoomImages from '../../Components/RoomTypeSelector/roomImages'
import HorizontalLine from '../../Components/HorizontalLine/horizontalLine'
const TableBody = ({ rooms, souvenirs1 }) => {
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

export default TableBody
