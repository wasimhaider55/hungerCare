import React from 'react';
import { FaRegHandshake } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";

const Card = () => {
    return (
        <section>

            <div className=' flex  max-w-5xl mx-auto gap-6 py-24 text-white'>

                <div className=' bg-black p-8 rounded-xl mix-blend-luminosity cursor-pointer hover:bg-blue-700'>
                    <span className='grid grid-cols-1 place-items-center'> <FaRegHandshake size={50} /> </span>
                    <h1 className=' capitalize text-xl font-bold text-center'>Who We are</h1>
                    <p className=' text-sm leading-7 my-3 font-light opacity-50 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                        aspernatur vitae, officia deserunt facilis suscipit
                    </p>
                </div>

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