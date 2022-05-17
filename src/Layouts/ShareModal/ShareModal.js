import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
const ShareModal = () => {
  const [refferal, setRefferal] = useState(
    'https://booknowlk.netlify.app/share?token=3HeuUse#12'
  )
  useEffect(() => {
    toast.configure()
  }, [])

  const copyText = () => {
    let copiedText = document.getElementById('copiedText').value
    navigator.clipboard.writeText(copiedText)
    notifySuccess('Copied sharerable link to the clipboard')
  }
  const notifySuccess = (message) => {
    toast.success(message)
  }
  return (
    <div className='shareModal'>
      <h5>Share this link and get extra discounts</h5>
      <div className='row'>
        <div className='col-10'>
          <input
            type='text'
            class='form-control mt-2 shareModal-inputbox'
            value={refferal}
            disabled
            id='copiedText'
            onClick={() => {
              copyText()
            }}
          />
        </div>
        <div className='col-2'>
          <i
            class='fas fa-clipboard'
            onClick={() => {
              copyText()
            }}
          ></i>
        </div>
      </div>
    </div>
  )
}

export default ShareModal
