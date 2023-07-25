import React from 'react';
import { FaRegHandshake } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { Link as LinkRouter} from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll'

const Card = () => {
    return (
        <section>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 mx-3 sm:mx-20 sm:px-0 py-24 text-white'>
                <LinkRouter to="AboutUs">
                <LinkScroll
                    activeClass='active'
                    to='who'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <div className='bg-gradient-to-b from-blue-700 bg-black p-8 rounded-xl mix-blend-luminosity cursor-pointer shadow-lg shadow-slate-900 hover:bg-blue-500 hover:scale-105'>
                        <span className='grid grid-cols-1 place-items-center'> <FaRegHandshake size={50} /> </span>
                        <h1 className=' capitalize text-xl font-bold text-center'>Who We are</h1>
                        <p className=' text-sm leading-7 my-3 font-light opacity-50 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                            aspernatur vitae, officia deserunt facilis suscipit
                        </p>
                    </div>
                    </LinkScroll>
                </LinkRouter>

                <div className='bg-gradient-to-b from-blue-700 bg-black p-8 rounded-xl mix-blend-luminosity cursor-pointer shadow-lg shadow-slate-900 hover:bg-blue-700 hover:scale-105'>
                    <span className='grid grid-cols-1 place-items-center'> <BiDonateHeart size={50} /> </span>
                    <h1 className=' capitalize text-xl font-bold text-center'>what we do</h1>
                    <p className=' text-sm leading-7 my-3 font-light opacity-50 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                        aspernatur vitae, officia deserunt facilis suscipit
                    </p>
                </div>

                <div className='bg-gradient-to-b from-blue-700 bg-black p-8 rounded-xl mix-blend-luminosity cursor-pointer shadow-lg shadow-slate-900 hover:bg-blue-700 hover:scale-105'>
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