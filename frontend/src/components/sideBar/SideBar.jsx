import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { PiBowlFoodBold } from "react-icons/pi"
import { Link } from "react-router-dom";


const SideBar = () => {
    const [nav, setNav] = useState(false);

    return (
        <>

            <div onClick={() => setNav(!nav)} className='hidden lg:block cursor-pointer'> 
                <AiOutlineMenu size={40} />
            </div>

            <div className={nav ? "hidden lg:block absolute left-0 w-[24rem] h-96  top-0  bg-[#004d73] rounded-br-3xl text-gray-300 py-5" : " fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 "}>
                <AiOutlineClose size={30}
                    onClick={() => setNav(!nav)}
                    className='absolute right-4 top-10 cursor-pointer '
                />
                <h2 className='text-2xl p-4'>
                    Spogmai Foundation
                </h2>
                <div>
                    <ul className=' flex flex-col p-4 text-white'>
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
                            <GiReceiveMoney size={30} className="ml-5" />
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
                </div>

            </div>
        </>
    )
}

export default SideBar