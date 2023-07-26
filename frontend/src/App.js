import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

import ContactUs from "./components/contact/ContactUs";
import SignUp from "./pages/signUp/SignUp";

import Navbar from "./components/navbar/Navbar";
import AboutUs from "./components/about/AboutUs";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/AboutUs" exact element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
