import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { title, image, link } = props;
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-2xl cursor-pointer ">
      <Link to={link}>
        <div className="bg-gray-200 p-2 border-2 border-gray-500 ">
          <img src={image} alt="title" className="hover:scale-105" />
          <p className="py-5">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
