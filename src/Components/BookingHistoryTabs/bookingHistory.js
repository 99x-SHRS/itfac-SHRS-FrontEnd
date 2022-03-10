import React, { Component, useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap'
import BookingDetaill from '../../Layouts/BookingHistroy/bookingDetails.js'
const AllBookings = () => {
  const [items, setItems] = useState([])

  const [pageCount, setpageCount] = useState(0)

  let limit = 5
  const NewsCard = (props) => {
    return (
      <div style={{ padding: '20' }}>
        <a href={props.url}>
          {props.title} by {props.author}
        </a>
      </div>
    )
  }
  const data = [
    {
      id: 'B-001',
      hotelName: 'Hareesha',
      checking: '2022-05-25',
      checkout: '2022-05-26',
      status: 'payment',
    },
    {
      id: 'B-002',
      hotelName: 'Hareesha',
      checking: '2022-05-25',
      checkout: '2022-05-26',
      status: 'payment',
    },
    {
      id: 'B-003',
      hotelName: 'Hareesha',
      checking: '2022-05-25',
      checkout: '2022-05-26',
      status: 'payment',
    },
    {
      id: 'B-004',
      hotelName: 'Hareesha',
      checking: '2022-05-25',
      checkout: '2022-05-26',
      status: 'payment',
    },
    {
      id: 'B-005',
      hotelName: 'Hareesha',
      checking: '2022-05-25',
      checkout: '2022-05-26',
      status: 'payment',
    },
  ]

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        // `http://localhost:3004/comments?_page=1&_limit=${limit}`
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      )
      const data = await res.json()
      const total = res.headers.get('x-total-count')
      setpageCount(Math.ceil(total / limit))
      // console.log(Math.ceil(total/12));
      setItems(data)
    }

    getComments()
  }, [limit])

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      //   `http://localhost:3004/comments?_page=${currentPage}&_limit=${limit}`
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    )
    const data = await res.json()
    return data
  }

  const handlePageClick = async (data) => {
    // console.log(data.selected)

    let currentPage = data.selected + 1

    const commentsFormServer = await fetchComments(currentPage)

    setItems(commentsFormServer)
    // scroll to the top
    //window.scrollTo(0, 0)
  }

  const renderTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      Click here to view more details
    </Tooltip>
  )
  const getBookingDetails = () => {
    return <BookingDetaill />
  }
  return (
    <div>
      <div>
        {/* {items.map((item) => {
          return (
            <div key={item.id} className='col-sm-6 col-md-12 v my-2'>
              <div className='card shadow-sm w-100' style={{ minHeight: 150 }}>
                <div className='card-body'>
                  <h5 className='card-title text-center h2'>Id :{item.id} </h5>
                  <h6 className='card-subtitle mb-2 text-muted text-center'>
                    {item.email}
                  </h6>
                  <p className='card-text'>{item.body}</p>
                </div>
              </div>
            </div>
          )
        })} */}
        <div className='mt-2'>
          <div className='table-web'>
            <table class='table'>
              <thead class='thead-dark'>
                <tr>
                  <th scope='col'>Booking ID</th>
                  <th scope='col'>Hotel Name</th>
                  <th scope='col'>To be checking</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Info</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr>
                      <th scope='row'>{item.id}</th>
                      <td>{item.hotelName}</td>
                      <td>
                        {item.checking} to {item.checkout}{' '}
                      </td>
                      <td>{item.status}</td>
                      <td>
                        {/* <i
                          class='fa fa-info-circle'
                          style={{ fontSize: '1.5rem' }}
                          aria-hidden='true'
                        ></i> */}
                        <OverlayTrigger
                          placement='right'
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <Link to={'/booking-history/details'}>
                            <i
                              class='fa fa-info-circle'
                              style={{ fontSize: '1.5rem' }}
                              aria-hidden='true'
                            ></i>
                          </Link>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className='table-mob'>
            <table class='table'>
              <thead class='thead-dark'>
                <tr>
                  <th scope='col'>Booking ID</th>
                  <th scope='col'>Hotel Name</th>

                  <th scope='col'>Info</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr>
                      <th scope='row'>{item.id}</th>
                      <td>{item.hotelName}</td>

                      <td>
                        <OverlayTrigger
                          placement='left'
                          delay={{ show: 250, hide: 250 }}
                          overlay={renderTooltip}
                        >
                          <Link to={'/booking-history/details'}>
                            <i
                              class='fa fa-info-circle'
                              style={{ fontSize: '1.5rem' }}
                              aria-hidden='true'
                              href={'/booking-history/details'}
                            ></i>
                          </Link>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  )
}

export default AllBookings
