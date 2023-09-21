import React from "react";
import { Link } from "react-router-dom";

const SmallCard = ({ image, title, description, link }) => {
  return (
    <div className=" lg:mx-16 md:mx-10 sm:mx-10 rounded-md shadow-md shadow-slate-900">
      <Link to={link}>
        <div className=" bg-gray-100  rounded-md cursor-pointer text-black">
          <div className="relative group">
            <img
              src={image}
              alt="deily lunch distribution"
              className=" h-48 w-full rounded-t-md"
            />
            <div className=" absolute inset-0 hover:bg-gray-900 rounded-t-md group-hover:opacity-40"></div>
            <button className=" h-10 w-28 m-auto opacity-0 absolute inset-0 flex justify-center items-center transition duration-300 bg-white border-2 border-gray-500 text-gray-500 text-md font-semibold py-2 px-4 rounded-full md:group-hover:opacity-100">
              ViewMore
            </button>
          </div>
          <h1 className=" px-4 text-md pt-4 text-center">{title}</h1>
          <p className=" px-4 text-sm my-3 font-light pb-4 text-center ">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SmallCard;
