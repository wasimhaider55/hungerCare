import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, path, icon }) => {
  return (
    <Link to={path}>
      <div className="bg-gradient-to-b from-blue-400 via-[#d8f6e7] h-64 md:h-72 lg:h-56  hover:bg-gradient-to-t hover:from-blue-400 hover:to-blue-400 text-black hover:text-white p-8 rounded-xl mix-blend-luminosity cursor-pointer shadow-md shadow-slate-900 hover:scale-105">
        <span className="grid grid-cols-1 place-items-center">{icon}</span>
        <h1 className=" capitalize text-xl font-bold text-center">{title}</h1>
        <p className=" text-sm leading-7 my-3 font-light">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
