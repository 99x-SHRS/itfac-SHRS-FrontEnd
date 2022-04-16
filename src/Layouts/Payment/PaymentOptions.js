import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import Paypal from '../../Services/PaymentGateways/PayPal'
import Gpay from '../../Services/PaymentGateways/Gpay'
import PayHere from '../../Services/PaymentGateways/PayHere'

import { pay } from '../../Services/Api/Utilities/index.js'
const PaymentOptions = (payment) => {
  let navigate = useNavigate()
  const [searchedParams, setSearchedparams] = useSearchParams()
  useEffect(() => {
    toast.configure()
  }, [])

  function notify(message) {
    toast.success(message)
    // history.push('/booking-history')
    navigate('../booking-history', { replace: true })
  }
  const payBooking = async () => {
    console.log('called')
    const dataModel = {
      paymenttypeId: 16,
      bookingId: searchedParams.get('booking') || '',
      payment: payment.payment,
    }
    await pay(dataModel)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className='payment-gateway-interface'>
      <div>
        {payment.method === 'default' ? (
          <div>
            <button
              className='reserve-button final-payment-btn'
              onClick={() => {
                payBooking()
                notify('Your booking is placed !')
              }}
            >
              Finish !
            </button>
          </div>
        ) : (
          <></>
        )}
        {payment.method === 'paypal' ? (
          <div className='paypal-btn'>
            <Paypal amount={payment.payment} />
          </div>
        ) : (
          <></>
        )}
        {payment.method === 'gpay' ? (
          <div className='gpay-btn'>
            <Gpay payment={payment.payment} />
          </div>
        ) : (
          <></>
        )}
        {payment.method === 'payhere' ? (
          <div className='payhere-btn'>
            <PayHere
              // Use a unique value for the orderId
              orderId={45896588}
              name='Just For You Mom Ribbon Cake'
              amount={payment.payment}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
export default PaymentOptions
