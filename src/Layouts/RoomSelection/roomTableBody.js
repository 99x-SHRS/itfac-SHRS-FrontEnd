import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import RoomImages from '../../Components/RoomTypeSelector/roomImages'
import HorizontalLine from '../../Components/HorizontalLine/horizontalLine'
import NumberInputBox from '../../Components/NumberInputBox/inputBoxNumber'
import {
  getDiscountByHotelId,
  placeBooking,
  getAvailableRoomQtyByRoomId,
} from '../../Services/Api/Utilities/index.js'
import NumericInput from 'react-numeric-input'

const TableBody = ({ rooms, souvenirs1 }) => {
  const [searchedParams, setSearchedparams] = useSearchParams()
  const [roomsData, setRoomsData] = useState([])
  const [params, setParams] = useState({})
  const [roomQty, setRoomQty] = useState(0)
  const [setedRoom, setRoom] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [avQty, setAvQty] = useState(null)

  useEffect(() => {
    console.log('data')
    setRoomsData(rooms)
    setRoomQty(0)
    console.log(rooms)
    setAvQty(searchedParams.get('rooms') || '')
  }, [rooms])
  useEffect(() => {
    const dataModel = {
      location: searchedParams.get('location') || '',
      checkInDate: searchedParams.get('checkin-date') || '',
      checkOutDate: searchedParams.get('checkout-date') || '',
      adult: searchedParams.get('adults') || '',
      children: searchedParams.get('children') || '',
      rooms: searchedParams.get('rooms') || '',
      hotelId: searchedParams.get('hotel') || '',
    }
    setParams(dataModel)
  }, [])
  const bookRoom = async (setedRoom) => {
    const dataModal = {
      checkInDate: searchedParams.get('checkin-date') || '',
      checkOutDate: searchedParams.get('checkout-date') || '',
      specialRequest: null,
      arrivalTime: null,
      guestName: null,
      rentCar: null,
      location: searchedParams.get('location') || '',
      customerId: 1,
      roomId: setedRoom,
      vasId: null,
      noRooms: searchedParams.get('rooms') || '',
    }
    await placeBooking(dataModal)
      .then((res) => {
        try {
          const bookingId = res.data.bookingId
          console.log(res)
          window.location.href = `/booking/vas?location=${params.location}&checkin-date=${params.checkInDate}&checkout-date=${params.checkOutDate}&adults=${params.adult}&children=${params.children}&hotel=${params.hotelId}&rooms=${roomQty}&roomno=${setedRoom}&booking=${bookingId}`
        } catch (error) {
          console.log(error)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const getRoomDiscount = async (hotelId, roomId) => {
    const dataModel = {
      id: 1,
    }
    await getDiscountByHotelId(dataModel)
      .then((res) => {
        setDiscount(res.data.discount)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // const getAvailableRoomQty = async (room) => {
  //   const dataModel = {
  //     roomId: room,
  //     checkInDate: searchedParams.get('checkin-date') || '',
  //     checkOutDate: searchedParams.get('checkout-date') || '',
  //   }
  //   // console.log(dataModel)
  //   await getAvailableRoomQtyByRoomId(dataModel)
  //     .then((res) => {
  //       setAvQty(res.data.available)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setAvQty(0)
  //     })
  // }
  return (
    <>
      {roomsData.map((room) => {
        let hotelId = searchedParams.get('hotel') || ''
        getRoomDiscount(hotelId, room.roomId)

        return (
          <li class='table-row border border-dark'>
            <div class='col-sm-12 col-md-4  mb-3 '>
              <img src={souvenirs1[0].path} alt='' />
              {/* <RoomImages roomId={room.roomId} /> */}
            </div>
            <div class='col-sm-12 col-1  mb-3 bed-icon'>
              <div className='verticle-center'>
                {[...Array(room.persons)].map((elementInArray, index) => (
                  <i key={index} class='fas fa-bed m-1'></i>
                ))}
              </div>
            </div>

            <div class='col-sm-12 col-md-2 mb-3'>
              <div className='prices-container'>
                {discount != 0 ? (
                  <div className='save-today'>Save {discount} % Today</div>
                ) : (
                  ''
                )}
                {discount != 0 ? (
                  <del>
                    <div class='or-amount'>Rs.{room.rate}</div>
                  </del>
                ) : (
                  ''
                )}

                <div className='room-price'>
                  {/* Rs.{room.rate * (1 - discount / 100)} */}
                </div>
              </div>
            </div>
            <div class='col-sm-12 col-md-1  mb-3'>
              <div>
                {roomQty == 0 ? (
                  <NumericInput
                    min={0}
                    max={avQty}
                    value={0}
                    onChange={(value) => {
                      setRoomQty(value)
                      setRoom(room.roomId)
                    }}
                  />
                ) : setedRoom == room.roomId ? (
                  <NumericInput
                    min={0}
                    max={avQty}
                    onChange={(value) => {
                      setRoomQty(value)
                      setRoom(room.roomId)
                    }}
                  />
                ) : (
                  <NumericInput min={0} max={0} value={0} disabled />
                )}
              </div>
            </div>
            <div class='col-sm-12 col-md-4  mb-3' data-label='Payment Status'>
              Your price includes:
              <div className='services'>
                {/* {room.attributes.map((service, index) => {
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
              {roomQty != 0 && setedRoom == room.roomId ? (
                <div>
                  <div className='tot-price'>
                    You can reserve this property today Rs.
                    {room.price * (1 - room.disount) * roomQty}
                  </div>
                  <HorizontalLine />
                  <br />
                </div>
              ) : (
                ''
              )}
              <div>
                {roomQty != 0 && setedRoom == room.roomId ? (
                  <button
                    className='reserve-button'
                    onClick={() => {
                      bookRoom(setedRoom)
                    }}
                  >
                    Reserve
                  </button>
                ) : (
                  <button className='reserve-button' disabled>
                    Reserve
                  </button>
                )}
              </div>
            </div>
          </li>
        )
      })}
    </>
  )
}

export default TableBody
