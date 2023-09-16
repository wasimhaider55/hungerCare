import React from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

export function Button() {
  return (
    <Link to="/DonateNow">
      <button className=" lg:flex hidden bg-pink-600 hover:bg-pink-700 text-white  px-4 py-2 rounded-full">
        <span className="my-auto pr-1">
          <AiFillHeart />
        </span>
        DonateNow
      </button>
    </Link>
  );
}
