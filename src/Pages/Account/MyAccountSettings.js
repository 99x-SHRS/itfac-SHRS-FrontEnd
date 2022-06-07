import React from "react";

import Navbar from "../../Components/Navbar/navbar";
import Accountsettingsmodel from "../../Layouts/AccountSettings/AccountSettings";
import Footer from "../../Layouts/Footer/footer";

import "../../Assets/styles/css/Pages/accountSettings.css";

const Accountsettings = () => {
  return (
    <div>
      <Navbar />
      <div className="acc-container">
        <Accountsettingsmodel />
      </div>
      <div className="acc-footer">
        <Footer />
      </div>
    </div>
  );
};
export default Accountsettings;
