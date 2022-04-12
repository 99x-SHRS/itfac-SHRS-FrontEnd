import React from 'react'
import { MDBDataTable, MDBIcon } from 'mdbreact'
import { Link, useSearchParams } from 'react-router-dom'
import { subscribeVAS } from '../../Services/Api/Utilities'
const NewTable = ({ vas }) => {
  const [searchedParams, setSearchedparams] = useSearchParams()
  const data = {
    columns: [
      {
        label: 'No',
        field: 'index',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Description',
        field: 'name',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Rate',
        field: 'rate',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Add',
        field: 'add',
        // sort: 'asc',
        width: 100,
      },
    ],
    rows: vas,
  }

  const addVAS = async (vasid) => {
    const datModel = {
      bookingId: searchedParams.get('booking') || '',
      vasId: vasid,
    }
    console.log(datModel)
    await subscribeVAS(datModel)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  data.rows = data.rows.map((obj, i) => ({
    ...obj,
    index: i + 1,
    add: (
      <button
      // type='button'
      // class='btn btn-primary'
      // style={{
      //   fontSize: 'xx-small',
      //   height: '2rem',
      // }}
      // onclick={subscribeVAS(1)}
      >
        <a
          onClick={() => {
            addVAS(obj.vasId)
          }}
        >
          {' '}
          <MDBIcon icon='cart-arrow-down' /> Choose
        </a>
      </button>
    ),
  }))

  return <MDBDataTable striped bordered small data={data} />
}

export default NewTable
