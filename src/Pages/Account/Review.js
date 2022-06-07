import React, { useEffect, useState } from "react";
import ReviewModel from "../../Components/ReviewModel/ReviewModel.js";

import "../../Assets/styles/css/Pages/reviewPage.css";

const Review = () => {
  const [items, setItems] = useState();

  // const getReviewDetails = async () => {
  //   const id = localStorage.getItem("user");
  //   await getReviewDetailsbyUserId(id)
  //     .then((response) => {
  //       const data = response.data;
  //       setItems(data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     })
  // };

  // useEffect (() => {
  //   getReviewDetails();
  // },[]);

  return (
    <div className="container">
      <div className="row g-3">
        <div className="col-12 shadow-lg rounded-3 border border-secondary ml-2">
          <div className="mt-3 ml-2">
            <h3>Your Reviews.....</h3>
          </div>
          <div className="pl-5 pr-5 pb-2">
            <ReviewModel
              rating={"7"}
              hname={"hill - top"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec neque metus. Nullam maximus nisl a elit ullamcorper vehicula. In hac habitasse platea dictumst."
              }
              location ={"Mount-Lavinia"}
              image ={"https://www.berjayahotel.com/sites/default/files/Berjaya%20Colombo%20Hotel%20Garden%20Bar_0.jpg"}
            />
            <ReviewModel 
            rating={"5"}
            hname={"beach "}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec neque metus. Nullam maximus nisl a elit ullamcorper vehicula. In hac habitasse platea dictumst."
            }
            location ={"Mount-Lavinia"}
            image ={"https://www.berjayahotel.com/sites/default/files/Berjaya%20Colombo%20Hotel%20Garden%20Bar_0.jpg"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
