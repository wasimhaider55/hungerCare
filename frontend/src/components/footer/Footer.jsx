import { Link } from "react-router-dom";
import { FooterMenu, FooterIcon } from "./Menu";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import BottomToTop from "../BottomToTop";

const Footer = () => {
  return (
    <footer className=" left-0 right-0 w-full bg-[#004d73] pl-2   pt-10 ">
      <div className="container mx-auto">
        <div className="grid grid-col-1 md:grid-cols-4 gap-8  content-center ">
          {/* Column 1 */}
          <div className="text-white">
            <h1 className="font-bold text-lg">HungerCare</h1>
            <div>
              <p className="p-5 text-gray-300">
                Spogmai Foundation is a registered non-governmental,
                non-political and non-profit charity organization of KPK
                Province of Pakistan, working since 2015 to support the poorest
                communities of Hangu and connected areas.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          {/* Start of Menu  */}
          <div className="text-white">
            <h1 className="font-bold text-lg">Useful Links</h1>
            <ul className="  p-5  justify-center text-gray-300 ">
              {FooterMenu.map((menu, index) => {
                return (
                  <Link key={index} to={menu.path}>
                    {" "}
                    <li
                      activeclass="active"
                      spy={"true"}
                      smooth={"true"}
                      duration={400}
                      className="py-1 cursor-pointer capitalize 
                      hover:scale-101  duration-200 hover:text-white"
                    >
                      {menu.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          {/* End of Menu  */}
          {/* Column 3 */}

          <div className="text-white">
            <h1 className="font-bold text-lg">Our Social Media Links</h1>
            <ul className="flex gap-4 text-2xl text-gray-300 p-5 ">
              {FooterIcon.map((icon, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer border border-gray-300  hover:border-blue-500 p-2"
                  >
                    <i>{icon.icon}</i>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="text-white">
            <h1 className="font-bold text-lg">Contact Info</h1>
            <div className="p-5">
              <ul className="text-gray-300">
                <li className="flex gap-3 my-[.5rem]">
                  <i className="text-gray-300">
                    <FaMapMarkerAlt />
                  </i>
                  <span>
                    Office , First Floor, STH Plaza,
                    <br /> Kacha Pakha, Hangu,
                    <br /> PAKISTAN
                  </span>
                </li>
                <li className="flex gap-3 my-[.5rem]">
                  <i className="text-gray-300">
                    <FaPhone />
                  </i>
                  <span>00923322178822</span>
                </li>
                <li className="flex gap-3 my-[.5rem]">
                  <i className="text-gray-300">
                    <MdEmail />
                  </i>
                  <span>spogmai11@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-1  border-gray-600" />
      <div className="flex justify-end items-end bg-[#004d73] p-6 ">
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
