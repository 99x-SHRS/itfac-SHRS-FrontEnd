import React from 'react';

import Navbars from '../../Components/Navbar/navbar.js';
import SecuritySettings from "../../Layouts/SecuritySettings/securitySettings";
import Footer from '../../Layouts/Footer/footer.js';

import '../../Assets/styles/css/Pages/securitySettings.css';

function Securitysettings() {
  return (
    <div>
      <Navbars/>
      <div className='sec-container'><SecuritySettings /></div>
      <Footer/>
    </div>
  );
}
export default Securitysettings;