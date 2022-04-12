import { useEffect, useState } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'

import SideSummary from '../Payment/SideSummary'
import DialogModal from '../../Components/VasModal/VasModal.js'
import { getVasByHotelId } from '../../Services/Api/Utilities/index.js'
import NewTable from '../../Components/Table/SearchPaginationTable'
import '../../Assets/styles/css/Layouts/bookingVAS.css'
const BookingVAS = () => {
  const [searchedParams, setSearchedparams] = useSearchParams()
  const [vas, setVAS] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    let hotelId = searchedParams.get('hotel') || ''
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
            <NewTable vas={vas} />
            <div className='next-container'>
              <button
                className='previous-button btn btn-primary'
                onClick={() => {
                  navigate(-1)
                }}
              >
                {'<'} Previous!
              </button>

              <Link to={'/booking/details'} className='next-link'>
                <button className='next-button btn btn-primary'>
                  Almost done! {'>'}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingVAS
