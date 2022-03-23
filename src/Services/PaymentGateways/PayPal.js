import React, { useRef, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
export default function Paypal() {
  const paypal = useRef()
  let navigate = useNavigate()
  useEffect(() => {
    toast.configure()
  }, [])
  function notify(message) {
    toast.success(message)
    navigate('../booking-history', { replace: true })
  }
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Cool looking table',
                amount: {
                  currency_code: 'USD',
                  value: 1.0,
                },
              },
            ],
          })
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture()
          if ((order.status = 'COMPLETED')) {
            console.log('COMPLETED')
            notify('Payment was successfully finished!')
          }
        },
        onError: (err) => {
          console.log(err)
          notify('Payment was not successfull')
        },
      })
      .render(paypal.current)
  }, [])

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  )
}
