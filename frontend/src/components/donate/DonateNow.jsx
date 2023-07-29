import React from 'react';
import { Link } from 'react-router-dom';

const DonateNow = () => {
    return (
        <main className=' pt-20'>
            {/* Donate Now section open */}
            <div className='w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
                <div className=' text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 '>
                    <h1 className=''> Donate Now </h1>
                    <div className=' w-24 h-1 bg-red-500 rounded-full mt-3 '></div>
                </div>
            </div>
            {/* Donate Now section Closed */}


            {/* Donate Now food  section Open */}
            <div className='w-full h-72 bg-blue-500 my-10 text-center'>
                <div className='pt-10 md:pl-20 pl-10 '>
                    <h1 className='text-white text-4xl font-bold'> Have surplus food to donate?</h1>
                    <p className=' text-black text-2xl font-bold pt-3'>If you are a business with surplus food, please find out what we can take.</p>
                    <Link to="/DonateNow">
                        <button className="bg-blue-600 text-white  px-6 py-2 rounded-full items-center mt-16 hover:bg-blue-900">
                            Donate Now
                        </button>
                    </Link>
                </div>
            </div>


        </main>
    )
}

export default DonateNow