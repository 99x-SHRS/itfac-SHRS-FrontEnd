import React, { useEffect, useState } from "react";
import ReviewModel from "../../Components/ReviewModel/ReviewModel.js";

import "../../Assets/styles/css/Pages/reviewPage.css";

import { getReviewByCustomerId } from "../../Services/Api/Utilities/index.js";

const Review = () => {
  const [items, setItems] = useState([]);

  const getReviewDetails = async () => {
    const data = {
      id: localStorage.getItem("user"),
    };
    await getReviewByCustomerId(data)
      .then((response) => {
        const data = response.data;
        setItems(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getReviewDetails();
  }, []);

  return (
    <div className="container">
      <div className="row g-3">
        <div className="col-12 shadow-lg rounded-3 border border-secondary ml-2">
          <div className="mt-3 ml-2">
            <h3>Your Reviews.....</h3>
          </div>
          <div className="pl-5 pr-5 pb-2">
            {items.map((item) => {
              return (<ReviewModel
                rating={"5"}
                id={item.reviewId}
                hname={item.hotelId}
                description={item.review}
                location={item.reviewId}
                image={item.hotelId}
              />);
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
