import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getReviewByHotelId } from '../../Services/Api/Utilities/Index'
import '../../Assets/styles/css/Layouts/review.css'

const Review = () => {
  const [reviews, setReview] = useState(null)
  const [searchedParams, setSearchedparams] = useSearchParams()
  useEffect(() => {
    getReviews()
  }, [])
  const getReviews = async () => {
    const dataModel = {
      id: searchedParams.get('hotel') || '',
    }
    await getReviewByHotelId(dataModel)
      .then((res) => {
        console.log(res)
        setReview(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const getStars = (params) => {
    let content = []
    for (let i = 0; i < params; i++) {
      content.push(<i class='fa fa-star' aria-hidden='true'></i>)
    }
    return content
  }
  return (
    <div className='mt-4 pt-4 review-container' id='hotel-review'>
      <div>
        <div>
          {' '}
          <section class='review '>
            <h3>What people say about us</h3>

            <div class='cards row '>
              {reviews != null ? (
                reviews.slice(0, 3).map((review, index) => {
                  return (
                    <div class='card col-lg-3 '>
                      <div class='card__shap'>
                        <img
                          src={'/images/defaults/default-profile.png'}
                          alt='person 1'
                          class='card__img'
                        />
                        <figcaption class='card__caption'>Jhon Doe</figcaption>
                      </div>

                      <div class='card__text'>
                        <div class='flex'>
                          {() => {
                            getStars(2)
                          }}
                        </div>
                        <p>{review.review}</p>
                      </div>
                    </div>
                  )
                })
              ) : (
                <>
                  <div class='alert alert-primary' role='alert'>
                    Nothing to display.
                  </div>
                </>
              )}
            </div>
          </section>
          <div>
            <button className='button-23 mt-5 mb-2' role='button'>
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
