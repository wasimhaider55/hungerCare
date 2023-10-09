import React from 'react';
import { AiFillHeart, AiFillFacebook, AiFillYoutube, AiFillTwitterSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='  md:flex justify-around items-center w-full h-10 bg-fuchsia-300'>
      <div className='hidden md:flex'>
        <p className='px-2'>wasimhaider@gmail.com</p>
        <p className='px-2'>03360574327</p>
        <ul className='flex'>
          <li> Follow Us : </li>
          <li className=' px-1 pt-1'> <AiFillFacebook size={20} /></li>
          <li className=' px-1 pt-1'> <AiFillYoutube size={20} /> </li>
          <li className=' px-1 pt-1'> <AiFillTwitterSquare size={20} /></li>
        </ul>
      </div>
      <Link to="/DonateNow">
        <div className=' flex justify-center items-center pt-2'>
          <button className='flex bg-pink-600 hover:bg-pink-700 text-white  px-2 py-[2px] rounded-full'>
            <span className='pt-1 pr-1'> <AiFillHeart /> </span>
            Donate Now
          </button>
        </div>
      </Link>
    </div>
  )
}

export default Header