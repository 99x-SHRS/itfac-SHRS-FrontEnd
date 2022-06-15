import React from "react";
import axios from "axios";
import "../../Assets/styles/css/Components/pendingRequest.css";

import {updateHotelById} from "../../Services/Api/Utilities/index"

function Pendingrequest({id, hname, oname,location,status,onfresh}) {
  const updaterejectedDetails = async () => {
    const data = {
      status: "rejected",
    };
    await updateHotelById(id,data)
      .then((res) => {
        console.log("updated");
        onfresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getrejectedDetails();
  const updateacceptedDetails = async() => {
    const data = {
      status: "accepted",
    };
    await updateHotelById(id,data)
      .then((res) => {
        console.log("updated");
        onfresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getrejectedDetails();
  return (
    <div className="rounded-3 shadow border border-info row g-1 align-middle mb-2">
      <div className="col-sm-3 d-flex justify-content-center my-auto">
        <p>{hname}</p>
      </div>
      <div className="col-sm-3 d-flex justify-content-center my-auto">
        <p>{oname}</p>
      </div>
      <div className="col-sm-2 d-flex justify-content-center my-auto">
        <p>{location}</p>
      </div>
      <div className="col-sm-2 d-flex justify-content-center my-auto">
        <p>{status}</p>
      </div>
      <div className="col-sm-2 d-flex justify-content-center">
        <button
          className="pending-req-button mx-1"
          onClick={updateacceptedDetails}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="green"
            className="bi bi-check2 mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
          </svg>
        </button>
        <button
          className="pending-req-button mx-1"
          onClick={updaterejectedDetails}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="red"
            className="bi bi-trash3-fill mx-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1H6v-1Zm5 0v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5ZM4.5 5.029a.5.5 0 1 1 .998-.06l.5 8.5a.5.5 0 0 1-.998.06l-.5-8.5Zm6.53-.528a.5.5 0 0 1 .47.528l-.5 8.5a.5.5 0 1 1-.998-.058l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Pendingrequest;
