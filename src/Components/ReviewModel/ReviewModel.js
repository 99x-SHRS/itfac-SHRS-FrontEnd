import React, { useEffect, useState } from "react";

const ReviewModel = ({id, hname, location, description, image, rating}) => {
    const deleteReview = () => {
        console.log("reviewDelete");
    };
  return (
    <div className="rounded-3 shadow border border-info row g-1 align-middle mb-3 mt-3">
      <div className="col-md-3 d-flex justify-content-center my-auto">
        <img src={image} width="150px" height="110px" alt="This is an image" />
      </div>
      <div className="col-md-7 d-flex justify-content-center my-auto">
        <div className="row">
          <div className="mt-1 d-inline-flex">
            <h5 className="">Rating : {rating} </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </div>
          <p className="mb-1 mt-1">Hotel Name: {hname}</p>
          <p className="mb-1">
            {description}
          </p>
          <p className="mb-1">Location : {location} </p>
        </div>
      </div>
      <div className="col-md-2 justify-content-center my-auto mx-auto">
        <button type="button" className="btn btn-outline-info rounded">
          Update
        </button>
        <button type="button" className="btn btn-outline-danger rounded" onClick={deleteReview}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewModel;
