import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { title, image, link } = props;
  return (
    <div className="w-full text-black rounded-lg overflow-hidden  transition transform hover:-translate-y-1 shadow-md shadow-slate-900">
      <Link to={link}>
        <div className="bg-gray-100  border-2 border-gray-500 ">
          <div className="relative group">
            <img
              src={image}
              alt="title"
              className="w-full h-60 object-cover "
            />
            <div className=" absolute inset-0 hover:bg-gray-900 rounded-t-xl group-hover:opacity-40"></div>
            <button className=" h-12 w-32 m-auto opacity-0 absolute inset-0 flex justify-center items-center  transition duration-300 bg-white border-2 border-gray-500 text-gray-500 text-md font-semibold py-2 px-4 rounded-full md:group-hover:opacity-100">
              ViewMore
            </button>
          </div>
          <p className="py-2 text-2xl font-bold  text-center">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
