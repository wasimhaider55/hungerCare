import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

import ContactUs from "./components/contact/ContactUs";
import SignUp from "./pages/signUp/SignUp";

import Navbar from "./components/navbar/Navbar";
import AboutUs from "./components/about/AboutUs";
import Causes from "./components/home/Causes";
import DisabledPeopleSupport from "./components/navbar/pages/DisabledPeopleSupport";
import FreeFoodDis from "./components/navbar/pages/FreeFoodDis";
import OrphanFamilySupport from "./components/navbar/pages/OrphanFamilySupport";
import PoorFamilySupport from "./components/navbar/pages/PoorFamilySupport";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
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
