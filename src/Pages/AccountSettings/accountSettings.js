import React from "react";

import Navbar from "../../Components/Navbar/navbar";
import Accountsettingsmodel from "../../Layouts/AccountSettingsmodel/accountSettingsmodel";
import Footer from "../../Layouts/Footer/footer";

import "../../Assets/styles/css/pages/accountSettings.css";

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
