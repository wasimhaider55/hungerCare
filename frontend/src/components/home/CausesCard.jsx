import React from "react";
import { Link } from "react-router-dom";

const CausesCard = ({ image, title, description }) => {
  return (
    <div className=" lg:mx-10 md:mx-12 sm:mx-10 mx-5 rounded-xl shadow-lg shadow-slate-900">
      <div className=" bg-gray-100 rounded-xl cursor-pointer grid place-items-center">
        <Link to="/donatenow" className="h-56 w-full">
          <div className="relative group rounded-t-xl h-full w-full">
            <img
              src={image}
              alt={title}
              className=" rounded-t-xl h-full w-full"
            />
            <div className=" absolute inset-0 hover:bg-gray-900 rounded-t-xl group-hover:opacity-40"></div>
            <button className=" h-10  m-auto  w-32 opacity-0 absolute inset-0  justify-center   transition duration-300 bg-gray-100 border border-gray-500 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full md:group-hover:opacity-100">
              Donate Now
            </button>
          </div>
        </Link>
        <h1 className=" px-4 text-md pt-8">{title}</h1>
        <p className=" px-4 text-sm leading-7 my-5 font-light pb-4 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CausesCard;
