import React from 'react';
import { FaRegHandshake } from "react-icons/fa";

const Card = () => {
    return (
        <section className=' bg-red-600 text-white' >

            <div className='flex max-w-5xl mx-auto gap-8 '>
                <div className='bg-white/10 p-8 rounded-xl mix-blend-luminosity'>
                    <span className=' h-20 mx-auto'><FaRegHandshake size={50} /></span>
                    <h1 className=' uppercase text-xl font-bold'>Who We are</h1>
                    <p className=' text-sm leading-7 my-3 font-light opacity-50'>Lorem, ipsum dolor sit amet consectetur adipisicing
                        aspernatur vitae, officia deserunt facilis suscipit
                    </p>
                </div>
            </div>

            <div className='flex max-w-5xl m-auto'>
                <div className='bg-white/10 p-8 rounded-xl'>
                    <span><FaRegHandshake size={50} /></span>
                    <h1 className=' uppercase text-xl font-bold'>Who We are</h1>
                    <p className=' text-sm leading-7 my-3 font-light opacity-50'>Lorem, ipsum dolor sit amet consectetur adipisicing
                        aspernatur vitae, officia deserunt facilis suscipit
                    </p>
                </div>
            </div>

            <div className='flex max-w-5xl m-auto'>
                <div className='bg-white/10 p-8 rounded-xl'>
                    <span><FaRegHandshake size={50} /></span>
                    <h1 className=' uppercase text-xl font-bold'>Who We are</h1>
                    <p className=' text-sm leading-7 my-3 font-light opacity-50'>Lorem, ipsum dolor sit amet consectetur adipisicing
                        aspernatur vitae, officia deserunt facilis suscipit
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Card