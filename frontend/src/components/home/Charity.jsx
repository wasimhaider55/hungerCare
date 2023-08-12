import React from 'react';
import { Link } from 'react-router-dom';
import WTOC from "../../assets/freeFoodDis/WTOC.png"

const Charity = () => {
    return (
        <div>
            {/* Welcome to our charity section  */}
            <section className=' bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black'>
                <div className=' lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4'>
                    <h1>Welcome to Our Charity</h1>
                    <div className=' w-16 h-1 bg-blue-600 rounded-full mt-3 '></div>
                </div>

                <div className='lg:flex lg:pl-24  pt-10 mb-24 px-4 md:px-20 gap-6'>
                    <div className="lg:w-[50%]">
                        <p className=' pl-1 pb-4 lg:pr-24 md:pr-24 sm:pr-24 text-justify '>
                            Spogmai Foundation is a well-known and successful non-profit, non-governmental, and non-political charity Hangu organization. Since 2015, the Spogmai Foundation has been working to give Timely Aid and Relief Support (Spogmai) to the poor people of Hangu District.
                            <br />
                            Founded by a local patron, Tahir Fada, and later joined by other volunteers motivated to make a difference, the foundation has now benefited thousands of families and many other individuals in a variety of ways.
                            <br />
                            Our charitable organization is committed to delivering safe and clean monthly rations, free food distribution, orphan support, and other services to communities throughout the Hangu area. We think that poor and needy family help is a basic human right and that every person deserves access to it.
                        </p>
                        <Link to="/AboutUs">
                        <button className=' bg-blue-500 p-4 rounded-3xl my-5 text-white border-2 border-white hover:scale-105'>
                            Read More
                        </button>
                        </Link>
                    </div>

                    <div className='lg:w-[50%]'>
                        <img src={WTOC} alt="who we are " />
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Charity