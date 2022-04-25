import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import {
  createRoom,
  getRoomById,
  updateRoomById,
} from '../../Services/Api/Utilities'
import { toast } from 'react-toastify'
import DarkOverlaybackGround from '../../Components/DarkOverlaybackGround/DarkOverlaybackGround'
const RoomDetials = ({ roomType, setRoomType }) => {
  const navigate = useNavigate()
  const params = useParams()
  const [searchedParams, setSearchedparams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [roomDetails, setRoomDetails] = useState([])

  const [description, setDescription] = useState('')
  const [room_rate, setRoom_rate] = useState('')
  const [no_guest, setNo_guest] = useState('')
  const [no_rooms, setNo_rooms] = useState('')
  const mode = searchedParams.get('edit') || ''
  useEffect(() => {
    toast.configure()
    getRoomDetails()
  }, [])

  const notifyError = (message) => {
    toast.error(message)
  }
  const notifySuccess = (message) => {
    toast.success(message)
  }
  const getRoomDetails = async () => {
    const dataModel = {
      id: searchedParams.get('room') || '',
    }
    await getRoomById(dataModel)
      .then((res) => {
        setRoomDetails(res.data)
        setDescription(res.data[0].description)
        setRoom_rate(res.data[0].rate)
        setNo_guest(res.data[0].persons)
        setNo_rooms(res.data[0].qty)
        setRoomType(res.data[0].roomtypeRoomTypeId)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)

    if (!mode) {
      const dataModel = {
        description: description,
        rate: room_rate,
        hotelId: params.hotelId,
        persons: no_guest,
        roomTypeId: roomType,
        qty: no_rooms,
      }
      await createRoom(dataModel)
        .then((res) => {
          console.log(res)
          if (res.status == 200) {
            notifySuccess('You have successfully created room')
            navigate(
              `/seller/${params.hotelId}/room/upload-image?id=${
                searchedParams.get('room') || ''
              }`
            )
          }
        })
        .catch((err) => {
          console.log(err)
          notifyError('Some thing went wrong')
        })
    } else {
      const dataModel = {
        description: description,
        rate: room_rate,
        hotelId: params.hotelId,
        persons: no_guest,
        roomtypeRoomTypeId: roomType,
        qty: no_rooms,
      }

      const id = searchedParams.get('room') || ''
      await updateRoomById(id, dataModel)
        .then((res) => {
          if (res.status == 200) {
            notifySuccess('You have successfully created room')
            navigate(
              `/seller/${params.hotelId}/room/upload-image?id=${
                searchedParams.get('room') || ''
              }`
            )
          }
        })
        .catch((err) => {
          console.log(err)
          notifyError('Some thing went wrong')
        })
    }

    setLoading(false)
  }
  return (
    <div className='ml-1'>
      <h5>No of beds</h5>
      <form onSubmit={handleSubmit}>
        <div className='row '>
          <div class='form-group col-lg-6 '>
            <label for='First Name'>
              How many beds available in this room ? *
            </label>
            <input
              type='number'
              class='form-control '
              placeholder='0'
              name='no_rooms'
              required
              value={no_rooms}
              onChange={(e) => setNo_rooms(e.target.value)}
            />
          </div>
        </div>
        <h5>Room details</h5>
        <div className='row'>
          <div class='form-group col-lg-6 '>
            <label for='First Name'>
              How many guests can stay in this room ? *
            </label>
            <input
              type='number'
              class='form-control'
              placeholder='0'
              name='no_guest'
              required
              value={no_guest}
              onChange={(e) => setNo_guest(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div class='form-group col-lg-3 '>
            <input
              type='number'
              class='form-control '
              placeholder='0'
              name='room_area'
              required
            />
          </div>
          <div className='col-sm-3'>
            <select class='form-select' aria-label='Default select example'>
              <option selected>Squere meters</option>
            </select>
          </div>
        </div>
        rates
        <div className='row'>
          <div class='form-group col-lg-3 '>
            <input
              type='number'
              class='form-control '
              placeholder='0'
              name='room_rate'
              required
              value={room_rate}
              onChange={(e) => setRoom_rate(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <label for='floatingTextarea2'>Description </label>
          <div class='form-floating col-lg-6'>
            <textarea
              class='form-control'
              placeholder='Leave a comment here'
              id='floatingTextarea2'
              style={{ height: '100px' }}
              name='description'
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className='next-container'>
          <button
            className='previous-button btn btn-primary'
            onClick={() => {
              navigate(-1)
            }}
          >
            {'<'} Previous!
          </button>

          <button type='submit' className='next-button btn btn-primary'>
            {!mode ? <>Next! </> : <>Update</>} {'>'}
          </button>
        </div>
      </form>
      <DarkOverlaybackGround loading={loading} content={'Creating your room'} />
    </div>
  )
}

export default RoomDetials
