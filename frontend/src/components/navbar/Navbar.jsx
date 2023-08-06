import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./Button";
import { Dropdown, Drop } from "./Dropdown";
import logo from "../../assets/logo.png";

const Navbar = () => {
  // React Hooks
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [drop, setDrop] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const onMouseEnter = () => {
    setDropdown("true");
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };
  const onMouseEnter1 = () => {
    setDrop("true");
  };

  const onMouseLeave1 = () => {
    setDrop(false);
  };

  const click = () => {
    setDropdown(false);
  };
  const click1 = () => {
    setDrop(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center fixed top-0 px-4 w-full h-20 text-white bg-gradient-to-t from-blue-900 bg-black z-10">
        {/* navBar barand or logo */}
        <div>
          <img src={logo} alt="LogoImage" className="h-[4rem] md:ml-5" />
        </div>

        {/* navBar Links started */}
        <ul className="hidden md:flex justify-center text-gray-300">
          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            className="px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white underline" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            className=" px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
          >
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? "text-white underline" : ""
              }
            >
              About Us
            </NavLink>
          </li>

          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            className="px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={click}
          >
            <NavLink
              to="/OurActivities"
              className={({ isActive }) =>
                isActive ? "text-white underline" : ""
              }
            >
              <div className="flex gap-2">
                {" "}
                Our Causes <AiOutlineDown className="h-7" />
              </div>
            </NavLink>
            {dropdown && <Dropdown />}
          </li>

          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
            onClick={click1}
            className="px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
          >
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "text-white underline" : ""
              }
            >
              <div className="flex gap-2">
                {" "}
                Gallery <AiOutlineDown className="h-7" />
              </div>
            </NavLink>
            {drop && <Drop />}
          </li>

          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            className="px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
          >
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive ? "text-white underline" : ""
              }
            >
              Contact Us
            </NavLink>
          </li>

          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            className="px-4 cursor-pointer capitalize 
            hover:scale-101  duration-200 hover:underline"
          >
            <NavLink
              to="/DonateNow"
              className={({ isActive }) =>
                isActive ? "text-white underline" : ""
              }
            >
              Donate Now
            </NavLink>
          </li>
        </ul>
        {/* navBar Links ended */}

        {/* button components is render here */}
        <Button />

        {/* For Mobile screen  navBar */}

        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "md:hidden   justify-center items-start absolute ml-[7rem] w-[90rem]  mt-[26rem] bg-gradient-to-b from-black to-blue-900 text-gray-300"
          }
        >
          <li
            onClick={() => {
              setNav(!nav);
            }}
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            className=" px-4 cursor-pointer capitalize py-6 text-xl font-bold"
          >
            <Link to="/">Home</Link>
          </li>

          <li
            onClick={() => {
              setNav(!nav);
            }}
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            className=" px-4 cursor-pointer capitalize py-6 text-xl font-bold"
          >
            <Link to="/aboutus">About Us</Link>
          </li>

          <li
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            className="px-4 cursor-pointer capitalize py-6 text-xl font-bold"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={click}
          >
            <div className="flex gap-1">
              Our Causes <AiOutlineDown className="h-5 mt-4" />
            </div>

            {dropdown && <Dropdown />}
          </li>

          <li
            onClick={() => {
              setNav(!nav);
            }}
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            className="px-4 cursor-pointer capitalize py-6 text-xl font-bold"
          >
            <Link to="/gallery">Gallery</Link>
          </li>

          <li
            onClick={() => {
              setNav(!nav);
            }}
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            className="px-4 cursor-pointer capitalize py-6 text-xl font-bold"
          >
            <Link to="/contactus">Contact Us</Link>
          </li>

          <li
            onClick={() => {
              setNav(!nav);
            }}
            activeclass="active"
            spy={"true"}
            smooth={"true"}
            duration={400}
            className="px-4 cursor-pointer capitalize py-6 text-xl font-bold"
          >
            <Link to="/DonateNow">Donate Now</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
