import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import Paypal from '../../Services/PaymentGateways/PayPal'
import Gpay from '../../Services/PaymentGateways/Gpay'
import PayHere from '../../Services/PaymentGateways/PayHere'
const PaymentOptions = (payment) => {
  // useEffect(() => {}, [paymentMethod])
  let navigate = useNavigate()

  useEffect(() => {
    toast.configure()
    console.log(payment.payment)
  }, [payment])
  function notify(message) {
    toast.success(message)
    // history.push('/booking-history')
    navigate('../booking-history', { replace: true })
  }
  return (
    <div className='payment-gateway-interface'>
      <div>
        {payment.method === 'default' ? (
          <div>
            <button
              className='reserve-button final-payment-btn'
              onClick={() => {
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
