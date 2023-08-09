import React from "react";
import RRPD from "../../../../assets/freeFoodDis/RRPD.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link to="/gallery/picturegallery">
      <div className=" lg:mx-16 md:mx-10 sm:mx-10 rounded-md shadow-lg shadow-slate-900">
        <div className=" bg-blue-700  rounded-md cursor-pointer text-white">
          <img src={RRPD} alt="deily lunch distribution" className="p-1" />
          <h1 className=" px-4 text-md pt-4 text-center">Picture Gallery</h1>
          <p className=" px-4 text-sm my-3 font-light pb-4 text-center ">
            Education Support
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
