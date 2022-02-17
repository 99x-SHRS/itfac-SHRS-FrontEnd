import React from 'react';

import Navbars from '../../Components/Navbar/navbar.js';
import SecuritySettingsmodel from "../../Layouts/SecuritySettingsmodel/securitySettingsmodel.js";
import Footer from '../../Layouts/Footer/footer.js';

import '../../Assets/styles/css/pages/securitySettings.css';

function Securitysettings() {
  return (
    <div>
      <Navbars/>
      <div className='sec-container'><SecuritySettingsmodel /></div>
      <Footer/>
    </div>
  );
}
export default Securitysettings;
