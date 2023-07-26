import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { Button } from "./Button";
import logo from "../../assets/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown("true");
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center fixed top-0 px-4 w-full h-20 text-white bg-gradient-to-t from-blue-900 bg-black  z-10 fixed">
        <div>
          <img src={logo} alt="LogoImage" className="h-[4rem] md:ml-5 z-50" />
        </div>

        <ul className="hidden  md:flex  justify-center  ">
          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            offset={-80}
            className="px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            offset={-80}
            className=" px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
          >
            <Link to="AboutUs">About Us</Link>
          </li>
          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            offset={-80}
            className="px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="./services">
              <div className="flex gap-2">
                {" "}
                Our Causes <AiOutlineDown className="h-7" />
              </div>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            offset={-80}
            className="px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
          >
            <Link to="./gallery">Gallery</Link>
          </li>
          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            offset={-80}
            className="px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
          >
            <Link to="/ContactUs">Contact Us</Link>
          </li>
        </ul>
        <Button />

        {/* For Mobile */}

        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : "flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300 "
          }
        >
          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            offset={-80}
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            offset={-80}
            className=" px-4 cursor-pointer capitalize py-6 text-4xl"
          >
            <Link to="AboutUs">About Us</Link>
          </li>
          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            offset={-80}
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="./services">
              <div className="flex gap-2">
                {" "}
                Our Causes <AiOutlineDown className="h-7" />
              </div>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            offset={-80}
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
          >
            <Link to="./gallery">Gallery</Link>
          </li>
          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            offset={-80}
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
          >
            <Link to="/ContactUs">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
