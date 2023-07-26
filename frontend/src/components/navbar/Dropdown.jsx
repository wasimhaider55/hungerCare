import React, { useState } from "react";
import { MenuItems } from "./Menu";
import { Link } from "react-router-dom";

function Dropdown() {
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
        {MenuItems.map((item, index) => {
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

export default Dropdown;
