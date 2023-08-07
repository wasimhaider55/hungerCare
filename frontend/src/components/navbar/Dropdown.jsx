import React, { useState } from "react";
import { imageItems, videoItems } from "./Menu";
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
        {imageItems.map((item, index) => {
          return (
            <li
              key={index}
              className=" p-2 text-sm  bg-gradient-to-t from-blue-900 to-bg-black cursor-pointer hover:bg-blue-700"
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
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
        {videoItems.map((item, index) => {
          return (
            <li
              key={index}
              className=" p-2 text-sm  bg-gradient-to-t from-blue-900 to-bg-black cursor-pointer hover:bg-blue-700"
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
