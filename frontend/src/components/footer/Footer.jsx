import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import BottomToTop from "../BottomToTop"

const Footer = () => {
  return (
    <footer className="  left-0 right-0 w-full bg-gradient-to-t from-blue-900 bg-black   pt-10 ">
      <div className="container mx-auto">
        <div className="grid grid-col-1 md:grid-cols-4 gap-8 content-center ">
          {/* Column 1 */}
          <div className="text-white">
            <h1 className="font-bold text-lg">HungerCare</h1>
            <div>
              <p className="p-10 text-gray-500">
                HungerCare Foundation is a registered non-governmental,
                non-political and non-profit charity organization of KPK
                Province of Pakistan, working since 2015 to support the poorest
                communities of Peshawar and connected areas.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="text-white">
            <h1 className="font-bold text-lg">Useful Links</h1>
            <ul className="  p-10  justify-center text-gray-500 ">
              <li
                activeclass="active"
                spy={"true"}
                smooth={"true"}
                duration={400}
                className="py-1 cursor-pointer capitalize 
                hover:scale-101  duration-200 hover:text-white"
              >
                <Link to="/">Home</Link>
              </li>
              <li
                activeclass="active"
                spy={"true"}
                smooth={"true"}
                duration={400}
                className=" py-1 cursor-pointer capitalize 
                hover:scale-101  duration-200  hover:text-white"
              >
                <Link to="AboutUs">About Us</Link>
              </li>
              <li
                activeclass="active"
                spy={"true"}
                smooth={"true"}
                duration={400}
                className="py-1 cursor-pointer capitalize 
                hover:scale-101  duration-200  hover:text-white"
              >
                <Link to="./causes">
                  <div className="flex gap-2">
                    Our Causes
                  </div>
                </Link>
              </li>
              <li
                activeclass="active"
                spy={"true"}
                smooth={"true"}
                duration={400}
                className="py-1 cursor-pointer capitalize 
                hover:scale-101  duration-200  hover:text-white"
              >
                <Link to="./gallery">Gallery</Link>
              </li>
              <li
                activeclass="active"
                spy={"true"}
                smooth={"true"}
                duration={400}
                className="py-1 cursor-pointer capitalize 
                hover:scale-101  duration-200  hover:text-white"
              >
                <Link to="/ContactUs">Contact Us</Link>
              </li>
              <li
                activeclass="active"
                spy={"true"}
                smooth={"true"}
                duration={400}
                className="py-1 cursor-pointer capitalize 
                hover:scale-101  duration-200  hover:text-white"
              >
                <Link to="/DonateNow">Donate Now</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}

          <div className="text-white">
            <h1 className="font-bold text-lg">Our Social Media Links</h1>
            <ul className="flex gap-4 text-2xl text-blue-500 p-10 ">
              <li className="cursor-pointer border border-blue-300  hover:border-blue-500 p-2">
                <i>
                  <FaFacebookSquare />
                </i>
              </li>
              <li className="cursor-pointer border border-blue-300  hover:border-blue-500 p-2">
                <i>
                  <FaTwitterSquare />
                </i>
              </li>
              <li className="cursor-pointer border border-blue-300 hover:border-blue-500 p-2">
                <i>
                  <FaYoutubeSquare />
                </i>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="text-white">
            <h1 className="font-bold text-lg">Contact Info</h1>
            <div className="mt-[2rem]">
              <ul className="text-gray-500">
                <li className="flex gap-3 my-[.5rem]">
                  <i className="text-blue-500">
                    <FaMapMarkerAlt />
                  </i>
                  <span>
                    Office # 1, First Floor, STH Plaza,
                    <br /> Forest Bazar, Peshawar,
                    <br /> PAKISTAN
                  </span>
                </li>
                <li className="flex gap-3 my-[.5rem]">
                  <i className="text-blue-500">
                    <FaPhone />
                  </i>
                  <span>00923322178822</span>
                </li>
                <li className="flex gap-3 my-[.5rem]">
                  <i className="text-blue-500">
                    <MdEmail />
                  </i>
                  <span>hungercare11@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end bg-blue-900 p-6 ">
        <p className="text-white xl:pr-96 lg:pr-72 md:pr-48 sm:pr-16 pr-2  opacity-50">
         Copyright ©2015 All Rights Reserved by spogmai Foundation pakistan
        </p>
        {/* Bottom To Top components render */}
        <BottomToTop />
      </div>
      
    </footer>
  );
};
export default Footer;
