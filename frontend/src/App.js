import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

import ContactUs from "./components/contact/ContactUs";
import SignUp from "./screens/signUp/SignUp";

import Navbar from "./components/navbar/Navbar";
import AboutUs from "./components/about/AboutUs";
import Causes from "./components/home/Causes";
import DisabledPeopleSupport from "./components/navbar/pages/disabledpeoplesupport/DisabledPeopleSupport";
import FreeFoodDis from "./components/navbar/pages/freefooddist/FreeFoodDis";
import OrphanFamilySupport from "./components/navbar/pages/orphanfamilysupport/OrphanFamilySupport";
import PoorFamilySupport from "./components/navbar/pages/poorfamilysupport/PoorFamilySupport";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/AboutUs" exact element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ourcauses" exact element={<Causes />} />
        <Route
          path="/ourcauses/orphanfamilysupport"
          exact
          element={<OrphanFamilySupport />}
        />
        <Route
          path="/ourcauses/freefooddistribution"
          exact
          element={<FreeFoodDis />}
        />
        <Route
          path="/ourcauses/poorfamilysupport"
          exact
          element={<PoorFamilySupport />}
        />
        <Route
          path="/ourcauses/disablepeoplesupport"
          exact
          element={<DisabledPeopleSupport />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
