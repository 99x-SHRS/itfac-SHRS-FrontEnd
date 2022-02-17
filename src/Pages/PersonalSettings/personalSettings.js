import React from "react";

import Personalsettingsmodel from "../../Layouts/PersonalSettingsmodel/personalSettingsmodel";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Layouts/Footer/footer";

function Personalsettings() {
    return(
        <div>
            <Navbar/>
            <Personalsettingsmodel/>
            <Footer/>
        </div>
    );
}
export default Personalsettings;