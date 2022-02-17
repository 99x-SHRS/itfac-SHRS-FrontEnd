import React from "react";

import Personalsettingsmodel from "../../Layouts/PersonalSettingsmodel/personalSettingsmodel";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Layouts/Footer/footer";

import "../../Assets/styles/css/pages/personalSettings.css";

function Personalsettings() {
  return (
    <div>
      <Navbar />
      <div className="per-container">
        <Personalsettingsmodel />
      </div>
      <Footer />
    </div>
  );
}
export default Personalsettings;
