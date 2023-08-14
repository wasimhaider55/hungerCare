import React from "react";
import { FaPhone } from "react-icons/fa6";
import {
  FaMapMarkerAlt,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Getintouch = () => {
  return (
    <div>
      <h1 className="text-2xl font-mdium text-gray-700">
        Get in touch with us
      </h1>
      <p className="text-gray-500 mt-[.5rem]">
        We'd love to hear from you. Feel free to get in touch with us on one of
        the following methods:
      </p>
      <div className="mt-[2rem]">
        <ul className="text-gray-500">
          <li className="flex gap-3 my-[.5rem]">
            <i className="text-blue-500">
              <FaMapMarkerAlt />
            </i>
            <span>
              Office # 1, First Floor,STH Plaza,
              <br /> Kacha Pakha, Hangu,
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
      <div className="mt-[3rem]">
        <h1 className="text-2xl font-mdium text-gray-700">
          Our Social Media Links
        </h1>
        <ul className="flex gap-4 text-2xl text-blue-500 my-[1rem] ">
          <li className="border border-blue-300 hover:border-blue-500 p-2">
            <i>
              <FaFacebookSquare />
            </i>
          </li>
          <li className="border border-blue-300 hover:border-blue-500 p-2">
            <i>
              <FaTwitterSquare />
            </i>
          </li>
          <li className="border border-blue-300 hover:border-blue-500 p-2">
            <i>
              <FaYoutubeSquare />
            </i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Getintouch;
