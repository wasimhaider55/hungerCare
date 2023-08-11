import React from "react";

const SmallCard = ({ image, title, description }) => {
  return (
    <div className=" lg:mx-16 md:mx-10 sm:mx-10 rounded-md shadow-lg shadow-slate-900">
      <div className=" bg-gradient-to-l from-black to-blue-700 text-white  rounded-md cursor-pointer">
        <img src={image} alt="deily lunch distribution" className="p-1" />
        <h1 className=" px-4 text-md pt-4 text-center">{title}</h1>
        <p className=" px-4 text-sm my-3 font-light pb-4 text-center ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SmallCard;
