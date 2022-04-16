import React, { Component, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useSearchParams } from 'react-router-dom'
import HashLoader from 'react-spinners/HashLoader'
import { searchHotels } from '../../Services/Api/Utilities/index.js'
import PriceRange from '../leftSideBar/priceRange'
import StartFilter from '../leftSideBar/startFilter'
import HotelCard from '../../Components/SearchedHotelCard/hotelCard'

import Hotel_1 from '../../Assets/images/hotels/hotel1.jpg'
import Hotel_2 from '../../Assets/images/hotels/hotel2.jpg'
import Hotel_3 from '../../Assets/images/hotels/hotel3.jpg'
import Hotel_4 from '../../Assets/images/hotels/hotel4.jpg'

import '../../Assets/styles/css/Layouts/searchedHotels.css'

const SearchedHotels = (props) => {
  const [loading, setLoading] = useState(false)
  let [color, setColor] = useState('#ffffff')
  const [searchedParams, setSearchedparams] = useSearchParams()
  let [hotels, setHotels] = useState([])
  const [items, setItems] = useState([])
  const [pageCount, setpageCount] = useState(0)
  const [URLparams, setURLparams] = useState({})
  let limit = 10

  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)
  }, [])
  useEffect(() => {
    fetchData(0)
  }, [limit])
  useEffect(() => {
    if (hotels.length != 0) {
      setLoading(false)
      console.log(hotels)
    }
  }, [hotels.length])

  useEffect(() => {
    if (loading) {
      document.getElementById('pagination-div').style.display = 'none'
    } else {
      document.getElementById('pagination-div').style.display = 'block'
    }
  }, [loading])

  const fetchData = async (page) => {
    const dataModel = {
      location: searchedParams.get('location') || '',
      checkInDate: searchedParams.get('checkin-date') || '',
      checkOutDate: searchedParams.get('checkout-date') || '',
      adult: searchedParams.get('adults') || '',
      children: searchedParams.get('children') || '',
      rooms: searchedParams.get('rooms') || '',
      page: page,
    }
    setURLparams(dataModel)
    await searchHotels(dataModel).then((data) => {
      setHotels(data.data.rows)
      console.log(data)
      let totalRows = data.data.count
      if (data.status == 200) {
        setLoading(false)
      }
      setpageCount(Math.ceil(totalRows / limit))
    })
  }
  const handlePageClick = async (data) => {
    let currentPage = data.selected
    fetchData(currentPage)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <div className='searched-hotel-container hotels pt-2 rounded b-1'>
        <div className='row'>
          <div className='col-lg-3 left-side-bar'>
            <div class='card p-3 left-container'>
              <div className='mb-3'>
                <b>Filter By</b>
              </div>
              <div className='mb-3'>
                <PriceRange />
              </div>
              <div>
                <StartFilter />
              </div>
            </div>
          </div>
          <div className=' col-md-9 searched-hotel '>
            {loading ? (
              <div className='hotel-loader'>
                <HashLoader
                  loading={loading}
                  size={25}
                  margin={2}
                  color='#00AD5F'
                />
              </div>
            ) : (
              hotels.map((hotel, index) => {
                return <HotelCard hotelData={hotel} URLparams={URLparams} />
              })
            )}
            <div className='mt-3 pagination-container' id='pagination-div'>
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchedHotels
