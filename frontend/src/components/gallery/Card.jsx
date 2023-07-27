import React from "react";

const Card = (props) => {
  const { title, image } = props;
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg ">
      <div className="bg-gray-200 p-2 border-2 border-gray-500 ">
        <img src={image} alt="title" />
        <p className="py-5">{title}</p>
      </div>
    </div>
  );
};

export default Card;
