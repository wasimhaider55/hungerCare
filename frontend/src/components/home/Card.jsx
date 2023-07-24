import React from 'react';
import { FaRegHandshake } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <section>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 mx-3 sm:mx-20 sm:px-0 py-24 text-white'>
                <Link to="AboutUs">
                    <div className=' bg-black p-8 rounded-xl mix-blend-luminosity cursor-pointer hover:bg-blue-700'>
                        <span className='grid grid-cols-1 place-items-center'> <FaRegHandshake size={50} /> </span>
                        <h1 className=' capitalize text-xl font-bold text-center'>Who We are</h1>
                        <p className=' text-sm leading-7 my-3 font-light opacity-50 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                            aspernatur vitae, officia deserunt facilis suscipit
                        </p>
                    </div>
                </Link>

                <div className='bg-black p-8 rounded-xl mix-blend-luminosity cursor-pointer hover:bg-blue-700'>
                    <span className='grid grid-cols-1 place-items-center'> <BiDonateHeart size={50} /> </span>
                    <h1 className=' capitalize text-xl font-bold text-center'>what we do</h1>
                    <p className=' text-sm leading-7 my-3 font-light opacity-50 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                        aspernatur vitae, officia deserunt facilis suscipit
                    </p>
                </div>

                <div className='bg-black p-8 rounded-xl mix-blend-luminosity cursor-pointer hover:bg-blue-700'>
                    <span className='grid grid-cols-1 place-items-center'> <RiTeamLine size={50} /> </span>
                    <h1 className=' capitalize text-xl font-bold text-center'>Our Team</h1>
                    <p className=' text-sm leading-7 my-3 font-light opacity-50 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                        aspernatur vitae, officia deserunt facilis suscipit
                    </p>
                </div>


            </div>


        </section>
    )
}

export default Card