import React, { useState } from "react";
import { imageItems, videoItems } from "./NavMenu";
import { Link } from "react-router-dom";

export function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={`'click' ${
          click ? "clicked" : ""
        } bg-black  w-200 absolute  list-none text-start`}
      >
        {imageItems.map((item) => {
          return (
            <Link to={item.path}>
              <li
                key={item.id}
                className=" py-2 px-4 text-sm  bg-[#004d73] cursor-pointer hover:bg-blue-700"
              >
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
export function Drop() {
  const [click1, setClick1] = useState(false);

  const handleClick1 = () => setClick1(!click1);

  return (
    <>
      <ul
        onClick={handleClick1}
        className={`'click' ${
          click1 ? "clicked" : ""
        } bg-black  w-200 absolute  list-none text-start`}
      >
        {videoItems.map((item) => {
          return (
            <Link to={item.path}>
              {" "}
              <li
                key={item.id}
                className=" py-2 px-4 text-sm  bg-[#004d73] cursor-pointer hover:bg-blue-700"
              >
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
