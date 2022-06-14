import React from "react";

import Navbars from "../../Components/Navbar/navbar";
import Requestmanagemodel from "../../Layouts/Requestmanagemodel/requestmanagemodel";
import Footer from "../../Layouts/Footer/footer";

import '../../Assets/styles/css/Pages/requestManage.css'
function Requestmanage() {
  return (
    <>
      <Navbars />
      <div className="req-container">
        <Requestmanagemodel />
      </div>
      <Footer />
    </>
  );
}
export default Requestmanage;
