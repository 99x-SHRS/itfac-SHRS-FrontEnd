import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import ReviewModel from "../../Components/ReviewModel/ReviewModel.js";

import "../../Assets/styles/css/Pages/reviewPage.css";

import { getReviewByCustomerId } from "../../Services/Api/Utilities/index.js";

const Review = () => {
  let limit = 3;
  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  const getReviewDetails = async (currentPage) => {
    const data = {
      id: localStorage.getItem("user"),
      page: currentPage,
    };
    await getReviewByCustomerId(data)
      .then((response) => {
        const data = response.data;
        setItems(data);
        setpageCount(Math.ceil(data.count / limit));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getReviewDetails(0);
  }, []);

  const handlePageClick = async (data) => {
    console.log(data.selected);
    let currentPage = data.selected;
    getReviewDetails(currentPage);
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
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
