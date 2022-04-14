import { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link, useSearchParams } from 'react-router-dom'
const DialogModal = () => {
  const [show, setShow] = useState(true)
  const [vasStatus, setVASStatus] = useState(false)
  const [searchedParams, setSearchedparams] = useSearchParams()
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  useEffect(() => {
    if (!vasStatus && !show) {
      window.location.href = `/booking/details?booking=${
        searchedParams.get('booking') || ''
      }`
    }
  }, [show])
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        aria-labelledby='example-modal-sizes-title-sm'
        style={{
          width: '400px',
          left: '40%',

          overflow: 'hidden',
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Value added services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to add services to you reservation ?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={() => {
              window.location.href = `/booking/details?booking=${
                searchedParams.get('booking') || ''
              }`
              handleClose()
            }}
          >
            Skip.
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              setVASStatus(true)
              handleClose()
            }}
          >
            Yes I want.
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DialogModal
