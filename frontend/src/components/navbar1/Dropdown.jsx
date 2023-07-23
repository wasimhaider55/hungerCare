import React, { useState } from "react";
import { MenuItems } from "./Menu";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={`dropdown-menu ${
          click ? "clicked" : ""
        } bg-red-500 w-200 absolute  list-none text-start`}
      >
        {MenuItems.map((item, index) => {
          return (
            <li
              key={index}
              className="bg-gradient-to-t from-blue-900 to-bg-black cursor-pointer hover:bg-blue-700"
            >
              <a
                className={`block h-full w-full no-underline text-white p-4 ${item.cName}`}
                href={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
