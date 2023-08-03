import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

import ContactUs from "./components/contact/ContactUs";
import SignUp from "./screens/signUp/SignUp";

import Navbar from "./components/navbar/Navbar";
import AboutUs from "./components/about/AboutUs";

// OurCauses import
import Causes from "./components/home/Causes";
import DisabledPeopleSupport from "./components/navbar/pages/disabledpeoplesupport/DisabledPeopleSupport";
import FreeFoodDis from "./components/navbar/pages/freefooddist/FreeFoodDis";
import OrphanFamilySupport from "./components/navbar/pages/orphanfamilysupport/OrphanFamilySupport";
import PoorFamilySupport from "./components/navbar/pages/poorfamilysupport/PoorFamilySupport";
// OurCauses import End

// Gallery Import
import Gallery from "./components/gallery/Gallery";
import ImageAlbum from "./components/gallery/imageAlbum/ImageAlbum";
// End
// Footer import
import Footer from "./components/footer/Footer";

// ScrollToTop import
import ScrollToTop from "./components/ScrollToTop";

//  Donate Now
import DonateNow from "./components/donate/DonateNow";
import DonateFood from "./components/donate/DonateFood";
import DonateMoney from "./components/donate/donateMoney/DonateMoney";
//  Donate Now End

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
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
        {/* Gallery Components Routing */}
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="/gallery/imagealbum" exact element={<ImageAlbum />} />
        {/* Gallery components Rounting end */}

        {/* Donate Now  */}
        <Route path="/DonateNow" exact element={<DonateNow />} />
        <Route path="/DonateFood" exact element={<DonateFood />} />
        <Route path="/DonateMoney" exact element={<DonateMoney />} />
        {/* Donate Now End */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
