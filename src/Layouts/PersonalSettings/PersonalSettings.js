import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  getUserbyId,
  updateUserById,
} from "../../Services/Api/Utilities/index.js";

function Personalsettings() {
  const [position, setPosition] = useState(true);

  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    contactNo: "",
    email: "",
    street: "",
    houseNo: "",
    district: "",
    province: "",
  });

  const [imgFile, setImgFile] = useState();
  const [edit, setEdit] = useState(false);
  const [items, setItems] = useState([]);

  const getuserDetails = async () => {
    const data = {
      id: localStorage.getItem("user"),
    };
    await getUserbyId(data)
      .then((response) => {
        const data = response.data;
        console.log(response.data);
        setItems(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getuserDetails();
  }, []);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  function handleFile(event) {
    setImgFile(event.target.files[0]);
  }

  function handlePosition() {
    setPosition(false);
  }
  // const updateUserDetails = async () => {
  //   const data = {
  //     id: localStorage.getItem("user"),
  //     values,
  //   };
  //   await updateUserById(data)
  //     .then((response) => {
  //       const data = response.data;
  //       console.log(response.data);
  //       setEdit(false);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  async function updateUserDetails() {
    const data = {
      id: localStorage.getItem("user"),
      values,
    };
    await updateUserById(data)
      .then((response) => {
        const data = response.data;
        console.log(response.data);
        setEdit(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const handleSubmit = () => {
    // event.preventDefault()
    handlePosition();
    if (edit) {
      updateUserDetails();
      console.log("called");
    } else {
      setEdit(true);
    }
  };

  return (
    <div className="container">
      <main>
        <div className="row g-3">
          <div className="col-md-5 col-lg-4 my-auto">
            <ul className="list-group mb-3">
              <li className="list-group-item active d-flex justify-content-center lh-base border-0">
                <Link to="/personal-settings">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      class="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <h6 className="d-inline text-dark">Personal Details</h6>
                  </div>
                </Link>
              </li>
              <li className="list-group-item d-flex justify-content-center lh-base border-0">
                <Link to="/security-settings">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      class="bi bi-gear"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                    </svg>
                    <h6 className="d-inline-flex m-2 text-dark">Security</h6>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-7 col-lg-8">
            <div className="py-5">
              <div className="d-flex mx-auto mb-4 justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="75"
                  fill="currentColor"
                  class="bi bi-person-lines-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                </svg>
              </div>
              <div className="text-center">
                <h2>Personal Details</h2>
                <p className="lead">
                  You can edit your personal informations here....
                </p>
              </div>
            </div>

            <form className="row g-3">
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  <h6>First Name:</h6>
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder={items.firstName}
                  required
                  readOnly={position}
                  onChange={handleChange("firstName")}
                />
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  <h6>Last Name:</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder={items.lastName}
                  required
                  readOnly={position}
                  onChange={handleChange("lastName")}
                />
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  <h6>Email:</h6>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder={items.email}
                  required
                  readOnly={position}
                  onChange={handleChange("email")}
                />
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  <h6>No:</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder={items.street1}
                  required
                  readOnly={position}
                  onChange={handleChange("houseNo")}
                />
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  <h6>Street:</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder={items.street2}
                  required
                  readOnly={position}
                  onChange={handleChange("street")}
                />
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  <h6>Province:</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="province"
                  placeholder={items.province}
                  required
                  readOnly={position}
                  onChange={handleChange("province")}
                />
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  <h6>District:</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="district"
                  placeholder={items.district}
                  readOnly={position}
                  onChange={handleChange("district")}
                />
              </div>
              <div className="col-md-6">
                <label for="inputZip" className="form-label">
                  <h6>Contact No:</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNo"
                  placeholder={items.contactNo}
                  readOnly={position}
                  onChange={handleChange("contactNo")}
                />
              </div>

              <div className="col-md-6">
                <label for="inputFile" className="form-label">
                  <h6>Enter Your Photo:</h6>
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="exampleFormControlFile1"
                  placeholder={items.image}
                  readOnly={position}
                  onChange={handleFile}
                />
              </div>

              <div className="col-md-12">
                <h6 className="text-left">Last Edited At: {items.updatedAt}</h6>
              </div>

              <div className="col-12 d-flex justify-content-center">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleSubmit}
                >
                  {edit ? (
                    <>
                      <h5>Update</h5>
                    </>
                  ) : (
                    <>
                      <h5>Edit</h5>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Personalsettings;
