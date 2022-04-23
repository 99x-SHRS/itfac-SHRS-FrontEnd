import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createRoomtype } from '../../Services/Api/Utilities/index.js'
import Navbars from '../../Components/Navbar/navbar'
import DarkOverlaybackGround from '../../Components/DarkOverlaybackGround/DarkOverlaybackGround.js'
import '../../Assets/styles/css/Seller/Layouts/listingRoomType.css'
const ListingRoomType = () => {
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
      type: document.getElementsByName('type_name')[0].value,
      description: document.getElementsByName('remark')[0].value,
      beds: document.getElementsByName('type_beds')[0].value,
      area: document.getElementsByName('type_area')[0].value,
      hotelId: params.hotelId,
    }
    console.log(dataModel)
    await createRoomtype(dataModel)
      .then((res) => {
        console.log(res)
        if (res.status == 200) {
          document.getElementsByName('type_name')[0].value = ''
          document.getElementsByName('remark')[0].value = ''
          document.getElementsByName('type_beds')[0].value = ''
          document.getElementsByName('type_area')[0].value = ''
        }
        notifySuccess('You have successfully added room type')
      })
      .catch((err) => {
        console.log(err)
        notifyError('Some thing went wrong')
      })
    setLoading(false)
  }
  return (
    <div>
      <Navbars />
      <div className='room-adding-container container room-type-container'>
        <h4>add room type</h4>
        <form onSubmit={handleSubmit}>
          <div className='row  mt-4'>
            <div class='form-group col-lg-3'>
              <label for='First Name'>Room type *</label>
              <input
                type='text'
                class='form-control '
                placeholder='Enter room type'
                name='type_name'
                required
              />
            </div>

            <div class='form-group col-lg-2'>
              <label for='last Name'>No beds *</label>
              <input
                type='number'
                class='form-control '
                placeholder='Enter no beds'
                name='type_beds'
                required
              />
            </div>
            <div class='form-group col-lg-2'>
              <label for='last Name'>Area*</label>
              <input
                type='text'
                class='form-control '
                placeholder='Enter area'
                name='type_area'
                required
              />
            </div>
            <div class='form-group col-lg-4'>
              <label for='last Name'>Remark</label>
              <input
                type='text'
                class='form-control '
                placeholder='remark'
                name='remark'
                required
              />
            </div>
            <div class='form-group col-lg-1 room-type-adding-icon'>
              <button type='submit'>
                <i class='fa fa-plus-circle' aria-hidden='true'></i>
              </button>
              <button type='button' class='btn btn-primary mob-room-type'>
                Add a new room type
              </button>
            </div>
          </div>
        </form>
      </div>
      <DarkOverlaybackGround loading={loading} content={'Adding room type.'} />
    </div>
  )
}

export default ListingRoomType
