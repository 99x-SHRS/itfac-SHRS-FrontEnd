import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createRoom } from '../../Services/Api/Utilities'
import { toast } from 'react-toastify'
import DarkOverlaybackGround from '../../Components/DarkOverlaybackGround/DarkOverlaybackGround'
const RoomDetials = ({ roomType, setRoomType }) => {
  const navigate = useNavigate()
  const params = useParams()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    toast.configure()
  }, [])
  const notifyError = (message) => {
    toast.error(message)
  }
  const notifySuccess = (message) => {
    toast.success(message)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    const dataModel = {
      description: document.getElementsByName('description')[0].value,
      rate: document.getElementsByName('room_rate')[0].value,
      hotelId: params.hotelId,
      persons: document.getElementsByName('no_guest')[0].value,
      roomTypeId: roomType,
      qty: document.getElementsByName('no_rooms')[0].value,
    }
    await createRoom(dataModel)
      .then((res) => {
        console.log(res)
        if (res.status == 200) {
          document.getElementsByName('description')[0].value = ''
          document.getElementsByName('room_rate')[0].value = ''
          document.getElementsByName('no_guest')[0].value = ''
          document.getElementsByName('no_rooms')[0].value = ''
          document.getElementsByName('room_area')[0].value = ''
          setRoomType(null)
          notifySuccess('You have successfully created room')
          navigate(`/seller/hotel/${params.hotelId}/rooms`)
        }
      })
      .catch((err) => {
        console.log(err)
        notifyError('Some thing went wrong')
      })
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
            />
          </div>
        </div>
        <div className='row'>
          <label for='floatingTextarea2'>Description </label>
          <div class='form-floating'>
            <textarea
              class='form-control'
              placeholder='Leave a comment here'
              id='floatingTextarea2'
              style={{ height: '100px' }}
              name='description'
              required
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
            Create Room! {'>'}
          </button>
        </div>
      </form>
      <DarkOverlaybackGround loading={loading} content={'Creating your room'} />
    </div>
  )
}

export default RoomDetials
