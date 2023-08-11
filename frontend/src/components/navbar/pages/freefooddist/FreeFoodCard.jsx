import React from "react";

const FreeFoodCard = ({ image, text }) => {
  return (
    <div className="lg:mx-3 md:mx-12 sm:mx-10 mx-5 ">
      <div className=" bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer">
        <img src={image} alt="free food distribution" className="p-1" />
        <p className=" px-4 text-md pt-10  my-10 font-light  pb-4 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing aspernatur vitae,
          officia deserunt facilis suscipit
        </p>
      </div>
    </div>
  );
};

export default FreeFoodCard;
