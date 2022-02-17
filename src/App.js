import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

import Dashboard from "./Pages/Home/dashboard";
import Hotels from "./Pages/Hotels/hotels";
import HotelPage from "./Pages/Booking/hotelPage";
import AccountSettings from "./Pages/AccountSettings/accountSettings";
import Personalsettings from "./Pages/PersonalSettings/personalSettings";
import Securitysettings from './Pages/SecuritySettings/securitySettings';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/hotels" element={<Hotels />}></Route>
          <Route exact path="/booking/:id" element={<HotelPage />}></Route>
          <Route
            exact
            path="/account/settings"
            element={<AccountSettings />}
          ></Route>
          <Route
            exact
            path="/account/settings/personal-settings"
            element={<Personalsettings />}
          ></Route>
          <Route
            exact
            path="/account/settings/security-settings"
            element={<Securitysettings />}
          ></Route>
        </Routes>
        {/* {loading ? (
          <div className='Loader'>
            <PropagateLoader
              loading={loading}
              size={25}
              margin={2}
              color='#00AD5F'
            />
          </div>
        ) : (
          <Routes>
            <Route exact path='/' element={<Dashboard />}></Route>
          </Routes>
        )} */}
      </div>
    </Router>
  );
}

export default App;
