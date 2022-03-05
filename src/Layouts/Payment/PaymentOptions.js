import { useEffect } from 'react'
import { toast } from 'react-toastify'

import Paypal from '../../Services/PaymentGateways/PayPal'
import Gpay from '../../Services/PaymentGateways/Gpay'
import PayHere from '../../Services/PaymentGateways/PayHere'
const PaymentOptions = (paymentMethod) => {
  // useEffect(() => {}, [paymentMethod])

  useEffect(() => {
    toast.configure()
  }, [])
  function notify(message) {
    toast.success(message)
    window.location.href = '/'
  }
  return (
    <div className='payment-gateway-interface'>
      <div>
        {paymentMethod.method === 'default' ? (
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
        {paymentMethod.method === 'paypal' ? (
          <div className='paypal-btn'>
            <Paypal />
          </div>
        ) : (
          <></>
        )}
        {paymentMethod.method === 'gpay' ? (
          <div className='gpay-btn'>
            <Gpay />
          </div>
        ) : (
          <></>
        )}
        {paymentMethod.method === 'payhere' ? (
          <div className='payhere-btn'>
            <PayHere
              // Use a unique value for the orderId
              orderId={45896588}
              name='Just For You Mom Ribbon Cake'
              amount='4500'
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
