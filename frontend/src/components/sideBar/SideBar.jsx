import React, { useState } from "react";
import { PiBowlFoodBold } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";


const SideBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    };
    return (
        <>
            <div onClick={handleClick} className="hidden sm:block z-10">
                {!nav ? <FaBars size={30} /> : <ul
                    className={
                        nav && "hidden sm:block absolute left-0 w-[24rem] h-96  top-0  bg-[#004d73] rounded-br-3xl text-gray-300 py-5"
                    }
                >
                    <h1 className="px-4 cursor-pointer capitalize py-4 text-xl font-semibold">
                        Sopgmai Foundation
                    </h1>
                    <FaTimes size={30} className=" absolute top-10 right-10" />

                    <Link to="/foodMessages" className="flex">
                        <PiBowlFoodBold size={30} className="ml-5" />
                        <li
                            onClick={() => {
                                setNav(!nav);
                            }}
                            activeclass="active"
                            spy={"true"}
                            smooth={"true"}
                            duration={400}
                            className="px-4 cursor-pointer capitalize pb-4 text-xl font-semibold"
                        >
                            Food
                        </li>
                    </Link>

                    <Link to="/messages" className="flex">
                        <RiMessage2Line size={30} className="ml-5" />
                        <li
                            onClick={() => {
                                setNav(!nav);
                            }}
                            activeclass="active"
                            spy={"true"}
                            smooth={"true"}
                            duration={400}
                            className=" px-4 cursor-pointer capitalize pb-4 text-xl font-semibold"
                        >
                            message
                        </li>
                    </Link>

                    <Link className="flex ">
                        <GiReceiveMoney size={30} className="ml-5"/>
                        <li
                            onClick={() => {
                                setNav(!nav);
                            }}
                            activeclass="active"
                            spy={"true"}
                            smooth={"true"}
                            duration={400}
                            className=" px-4 cursor-pointer capitalize pb-4 text-xl font-semibold"
                        >
                            Money
                        </li>
                    </Link>

                </ul>
                }
            </div>
        </>
    )
}

export default SideBar