import React, { useRef, useEffect } from 'react'
import { toast } from 'react-toastify'
export default function Paypal() {
  const paypal = useRef()
  useEffect(() => {
    toast.configure()
  }, [])
  function notify(message) {
    toast.success(message)
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
            notify('Your booking is placed !')
            window.location.href = '/'
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
