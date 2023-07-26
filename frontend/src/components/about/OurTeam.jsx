import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import wasimhaider from "../../assets/teamPics/wasimhaider.png"


const OurTeam = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className=' bg-gradient-to-b from-black to-blue-900'>

            <h1 className='lg:text-4xl text-4xl font-bold  text-center text-white py-8'>
                Our Core Team Members
            </h1>

            <Carousel responsive={responsive} className='py-10 lg:mx-10 text-white'>
                <div className=' lg:mx-16 md:mx-12 sm:mx-10 mx-5'>
                    <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl'>
                        <img src={wasimhaider} alt="Wasim Haider" className=' w-full h-64' />
                        <h1 className=' px-4 text-md pt-8 text-center'>Wasim Haider</h1>
                        <h1 className=' px-4 text-md pt-8 text-center pb-10  font-light opacity-50'>Vice president</h1>
                    </div>
                </div>
                <div className=' lg:mx-16 md:mx-12 sm:mx-10 mx-5'>
                    <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl'>
                        <img src={wasimhaider} alt="Wasim Haider" className=' w-full h-64' />
                        <h1 className=' px-4 text-md pt-8 text-center'>Wasim Haider</h1>
                        <h1 className=' px-4 text-md pt-8 text-center pb-10  font-light opacity-50'>Vice president</h1>
                    </div>
                </div>
                <div className=' lg:mx-16 md:mx-12 sm:mx-10 mx-5'>
                    <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl'>
                        <img src={wasimhaider} alt="Wasim Haider" className=' w-full h-64' />
                        <h1 className=' px-4 text-md pt-8 text-center'>Wasim Haider</h1>
                        <h1 className=' px-4 text-md pt-8 text-center pb-10  font-light opacity-50'>Vice president</h1>
                    </div>
                </div>
                <div className=' lg:mx-16 md:mx-12 sm:mx-10 mx-5'>
                    <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl'>
                        <img src={wasimhaider} alt="Wasim Haider" className=' w-full h-64' />
                        <h1 className=' px-4 text-md pt-8 text-center'>Wasim Haider</h1>
                        <h1 className=' px-4 text-md pt-8 text-center pb-10  font-light opacity-50'>Vice president</h1>
                    </div>
                </div>
                <div className=' lg:mx-16 md:mx-12 sm:mx-10 mx-5'>
                    <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl'>
                        <img src={wasimhaider} alt="Wasim Haider" className=' w-full h-64' />
                        <h1 className=' px-4 text-md pt-8 text-center'>Wasim Haider</h1>
                        <h1 className=' px-4 text-md pt-8 text-center pb-10  font-light opacity-50'>Vice president</h1>
                    </div>
                </div>
                <div className=' lg:mx-16 md:mx-12 sm:mx-10 mx-5'>
                    <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl'>
                        <img src={wasimhaider} alt="Wasim Haider" className=' w-full h-64' />
                        <h1 className=' px-4 text-md pt-8 text-center'>Wasim Haider</h1>
                        <h1 className=' px-4 text-md pt-8 text-center pb-10  font-light opacity-50'>Vice president</h1>
                    </div>
                </div>
            </Carousel>;


            <div className='flex justify-around items-center h-56 bg-blue-400 '>
                <h1 className='text-white font-bold text-3xl'>Help Us So We Can Help Others</h1>
                <button className=' border-2 border-white rounded-2xl p-3 text-white font-bold hover:bg-blue-500'>Donate Now </button>

            </div>
        </section>
    )
}

export default OurTeam