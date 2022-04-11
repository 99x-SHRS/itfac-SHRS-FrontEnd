import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SideSummary from '../Payment/SideSummary'
import DialogModal from '../../Components/VasModal/VasModal.js'
import { getVasByHotelId } from '../../Services/Api/Utilities/index.js'
import '../../Assets/styles/css/Layouts/bookingVAS.css'
const BookingVAS = () => {
  const [searchedParams, setSearchedparams] = useSearchParams()
  const [vas, setVAS] = useState([])
  useEffect(() => {
    let hotelId = searchedParams.get('hotel') || ''
    console.log(hotelId)
    if (hotelId != 0) {
      getAllVAS(hotelId)
    } else {
      alert('went wrong')
    }
  }, [vas.length])

  const getAllVAS = async (hotelId) => {
    const dataModel = {
      id: hotelId,
    }
    await getVasByHotelId(dataModel)
      .then((res) => {
        setVAS(res.data)
        console.log(vas)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <div className='container'>
        <div className='row user-details '>
          <div className='col-md-4 col-lg-3 '>
            <SideSummary />
          </div>
          <div className='col-md-7 col-lg-8  '>
            {/* <h4>Do you expect other services from us?</h4>  */}
            <DialogModal />
            <h4>
              We offer many value added services for you convenience.If you need
              , you can select one or more sevices.{' '}
              <small>Charges can be vary.</small>
            </h4>
            <div className='row'>
              <div className='vas-searchbox'>
                <input
                  type='search'
                  id='form1'
                  class='form-control'
                  placeholder='Ex: BBQ party'
                  aria-label='Search'
                  aria-describedby='search-addon'
                />
                <button type='button' class='btn btn-primary'>
                  <i class='fas fa-search'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingVAS
