import React, { useEffect, useState } from "react";

import ReviewModel from "../../Components/ReviewModel/ReviewModel.js";

import "../../Assets/styles/css/Pages/reviewPage.css";

import { getReviewByCustomerId } from "../../Services/Api/Utilities/index.js";

const Review = () => {
  const [items, setItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [showBack, setShowBack] = useState(true);

  const viewBack = (itemOffset) => {
    if (itemOffset === 0) {
      setShowBack(false);
    } else {
      setShowBack(true);
    }
  };
  const getReviewDetails = async (page) => {
    var pages;
    if (page == null) {
      pages = itemOffset;
    } else {
      pages = page;
    }
    const data = {
      id: localStorage.getItem("user"),
      page: pages,
    };
    await getReviewByCustomerId(data)
      .then((response) => {
        const data = response.data;
        setItems(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getReviewDetails(itemOffset);
    //viewBack(itemOffset);
  }, []);

  const handlependingNextPageClick = async (event) => {
    const newOffset = itemOffset + 1;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
    getReviewDetails(newOffset);
  };

  const handlependingBackPageClick = async (event) => {
    const newOffset = itemOffset - 1;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
    getReviewDetails(newOffset);
  };

  return (
    <div className="container">
      <div className="row g-3">
        <div className="col-12 shadow-lg rounded-3 border border-secondary ml-2">
          <div className="mt-3 ml-2">
            <h3>Your Reviews.....</h3>
          </div>
          <div className="pl-5 pr-5 pb-2">
            {items.map((item) => {
              return (
                <ReviewModel
                  rating={"5"}
                  id={item.reviewId}
                  description={item.review}
                  hotelId={item.hotelId}
                  onFresh={getReviewDetails}
                />
              );
            })}
          </div>
          <div className="d-flex justify-content-center mb-2">
            {showBack ? (
              <button
                className="pending-req-button mx-5"
                onClick={() => {handlependingBackPageClick();
                  //viewBack(itemOffset);
                }}
              >
                Back
              </button>
            ) : (<></>)}
            <button
              className="pending-req-button mx-5"
              onClick={() => {handlependingNextPageClick();
                //viewBack(itemOffset);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
