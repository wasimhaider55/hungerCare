import React from 'react';
import { FaRegHandshake } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <section >

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 mx-3 sm:mx-20 sm:px-0 sm:py-24 py-4 text-white'>
                <Link to="/AboutUs#whoWeAre">
                    <div className='bg-gradient-to-b from-blue-400 via-[#d8f6e7]  hover:bg-gradient-to-t hover:from-blue-400 hover:to-blue-400 text-black hover:text-white p-8 rounded-xl mix-blend-luminosity cursor-pointer shadow-lg shadow-slate-900 hover:scale-105'>
                        <span className='grid grid-cols-1 place-items-center'> <FaRegHandshake size={50} /> </span>
                        <h1 className=' capitalize text-xl font-bold text-center'>Who We are</h1>
                        <p className=' text-sm leading-7 my-3 font-light'>
                            We are a Pakistani charity organisation dedicated to assisting the needy people of society.
                        </p>
                    </div>
                </Link>

                <Link to="/AboutUs#whatWeDo">
                    <div className='bg-gradient-to-b from-[#8ebf9b] via-[#f3f7f5] hover:bg-gradient-to-t hover:from-blue-400 hover:to-blue-400 text-black hover:text-white p-8 rounded-xl mix-blend-luminosity cursor-pointer shadow-lg shadow-slate-900 hover:scale-105'>
                        <span className='grid grid-cols-1 place-items-center'> <BiDonateHeart size={50} /> </span>
                        <h1 className=' capitalize text-xl font-bold text-center'>what we do</h1>
                        <p className=' text-sm leading-7 my-3 font-light '>
                            We provide cash, clothing, food, and medicine to the poorest areas of district Hangu.
                        </p>
                    </div>
                </Link>

                <Link to="/AboutUs#ourTeam">
                    <div className='bg-gradient-to-b from-blue-400 via-[#d8f6e7]  hover:bg-gradient-to-t hover:from-blue-400 hover:to-blue-400 text-black hover:text-white p-8 rounded-xl mix-blend-luminosity cursor-pointer shadow-lg shadow-slate-900 hover:scale-105'>
                        <span className='grid grid-cols-1 place-items-center'> <RiTeamLine size={50} /> </span>
                        <h1 className=' capitalize text-xl font-bold text-center'>Our Team</h1>
                        <p className=' text-sm leading-7 my-3 font-light'>
                            Our volunteers and staff work tirelessly to provide community services
                        </p>
                    </div>
                </Link>

            </div>

        </section>
    )
}

export default Card