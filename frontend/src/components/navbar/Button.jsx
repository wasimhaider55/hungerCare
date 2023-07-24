import React from "react";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link to="/signup">
      <button className=" lg:flex hidden bg-blue-600 text-white  px-6 py-2 rounded-full">
        Sign Up
      </button>
    </Link>
  );
}
