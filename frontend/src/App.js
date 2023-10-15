import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";

import ContactUs from "./components/contact/ContactUs";

import Navbar from "./components/navbar/Navbar";
import AboutUs from "./components/about/AboutUs";

// OurCauses import
import OurActivities from "./components/activities/OurActivities";
import DisabledPeopleSupport from "./components/navbar/pages/disabledpeoplesupport/DisabledPeopleSupport";
import FreeRationDis from "./components/navbar/pages/freefooddist/FreeRationDis";
import OrphanFamilySupport from "./components/navbar/pages/orphanfamilysupport/OrphanFamilySupport";
import PoorFamilySupport from "./components/navbar/pages/poorfamilysupport/PoorFamilySupport";
import Education from "./components/navbar/pages/education/Education";
// OurCauses import End

// Gallery Import
import Gallery from "./components/gallery/Gallery";
import PictureGallery from "./components/gallery/pictureGallery/PictureGallery";
import VideoGallery from "./components/gallery/videoGallery/VideoGallery";
import FRDAlbum from "./components/gallery/pictureGallery/frdAlbum/FRDAlbum";
import OFSAlbum from "./components/gallery/pictureGallery/ofsAlbum/OFSAlbum";
import PFSAlbum from "./components/gallery/pictureGallery/pfsAlbum/PFSAlbum";
import DPSAlbum from "./components/gallery/pictureGallery/dpsAlbum/DPSAlbum";
import ESAlbum from "./components/gallery/pictureGallery/esAlbum/ESAlbum";
// End
// Footer import
import Footer from "./components/footer/Footer";

// ScrollToTop import
import ScrollToTop from "./components/ScrollToTop";

//  Donate Now
import DonateNow from "./components/donate/DonateNow";
import DonateFood from "./components/donate/DonateFood";
import DonateMoney from "./components/donate/donateMoney/DonateMoney";
import SignIn from "./screens/signIn/SignIn";
import SignUp from "./screens/signUp/SignUp";
import AccountPopUp from "./components/navbar/AccountPopUp";
//  Donate Now End

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/pop" exatc element={<AccountPopUp />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/signup" exact element={<SignUp />} />

        <Route path="/" exact element={<Home />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/OurActivities" exact element={<OurActivities />} />
        <Route
          path="/ourcauses/orphanfamilysupport"
          exact
          element={<OrphanFamilySupport />}
        />
        <Route
          path="/ourcauses/freerationdistribution"
          exact
          element={<FreeRationDis />}
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
        <Route
          path="/ourcauses/educationsupport"
          exact
          element={<Education />}
        />
        {/* Gallery Components Routing */}
        <Route path="/gallery" exact element={<Gallery />} />
        <Route
          path="/gallery/picturegallery"
          exact
          element={<PictureGallery />}
        />
        <Route path="/gallery/videogallery" exact element={<VideoGallery />} />
        <Route
          path="/gallery/freerationdistribution"
          exact
          element={<FRDAlbum />}
        />
        <Route
          path="/gallery/orphanfamilysupport"
          exact
          element={<OFSAlbum />}
        />
        <Route path="/gallery/poorfamilysupport" exact element={<PFSAlbum />} />
        <Route
          path="/gallery/disablepeopleusupport"
          exact
          element={<DPSAlbum />}
        />
        <Route path="/gallery/educationsupport" exact element={<ESAlbum />} />
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
