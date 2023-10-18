import React from "react";
import {
  AiFillHeart,
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { MdOutgoingMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="  md:flex justify-around items-center w-full h-10  bg-[#89e9f9]">
      <div className="hidden md:flex">
        <p className=" flex px-2 pr-14">
          <MdOutgoingMail size={20} className=" pt-1" />
          wasimhaider2022@gmail.com
        </p>
        <p className="flex px-2 pr-14">
          <IoCall size={20} className="pt-1" />
          +923135653685
        </p>
        <ul className="flex">
          <li> Follow Us : </li>
          <Link to="https://www.facebook.com/spogmaifoundation">
            <li className=" px-1 pt-[1.75px]">
              <AiFillFacebook size={20} className=" hover:scale-110" />
            </li>
          </Link>
          <Link to="https://www.youtube.com/@tahirfidaofficial1497">
            <li className=" px-1 pt-[1.75px]">
              <AiFillYoutube size={22} className=" hover:scale-110" />
            </li>
          </Link>
          <li className=" px-1 pt-[1.75px]">
            <AiFillTwitterSquare size={20} className=" hover:scale-110" />
          </li>
        </ul>
      </div>
      <Link to="/DonateNow">
        <div className=" flex justify-center items-center md:pt-0 pt-2">
          <button className="flex bg-pink-600 hover:bg-pink-700 text-white  px-2 py-[2px] rounded-full">
            <span className="pt-1 pr-1">

              <AiFillHeart />
            </span>
            Donate Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Header;
