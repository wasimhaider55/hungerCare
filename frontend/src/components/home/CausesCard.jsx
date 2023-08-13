import React from "react";

const CausesCard = ({ image, title, description }) => {
  return (
    <div className=" lg:mx-10 md:mx-12 sm:mx-10 mx-5 rounded-xl shadow-lg shadow-slate-900">
      <div className=" bg-gray-100 rounded-xl cursor-pointer grid place-items-center">
        <img src={image} alt={title} className="p-1 rounded-xl" />
        <h1 className=" px-4 text-md pt-8">{title}</h1>
        <p className=" px-4 text-sm leading-7 my-10 font-light pb-4 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CausesCard;
