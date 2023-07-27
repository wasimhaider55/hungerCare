import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bg1 from "../../../../assets/bg1.jpg";

const DailyMealDis = () => {
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
        <main>

            {/* Daily Meal distribution section Open */}
            <section className='bg-gradient-to-t from-blue-900 bg-black text-white'>

                <div className=' lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20  uppercase'>
                    <h1 className='sm:pl-8 '>1. DAILY MEAL DISTRIBUTION</h1>
                </div>

                <div className='lg:flex lg:pl-24  mb-24 px-4 md:px-20'>

                    <div className="lg:w-[60%] pt-10">
                        <p className='sm:pl-8  pb-4 lg:pr-24 md:pr-14 sm:pr-24 text-justify '>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum,
                        </p>
                    </div>

                    <div className='lg:w-[40%] pb-5'>
                        <div className=' lg:mx-16 md:mx-10 sm:mx-10 rounded-md shadow-lg shadow-slate-900'>
                            <div className=' bg-gradient-to-l from-black to-blue-700  rounded-md cursor-pointer'>
                                <img src={bg1} alt="deily lunch distribution" className='p-1' />
                                <h1 className=' px-4 text-md pt-4 text-center'>Picture Gallery</h1>
                                <p className=' px-4 text-sm my-3 font-light pb-4 text-center '> Daily lunch distribution in Hangu
                                </p>
                            </div>

                            <div className=' bg-gradient-to-l from-black to-blue-700  rounded-md cursor-pointer'>
                                <img className=' lg:mt-10 p-1' src={bg1} alt="deily lunch distribution" />
                                <h1 className=' px-4 text-md pt-4 text-center'>Picture Gallery</h1>
                                <p className=' px-4 text-sm  my-3 font-light  pb-4 text-center '> Daily Dinner distribution in shelter Home
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <Carousel responsive={responsive} className=' lg:mx-20 text-white'>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5 '>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10   my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10   my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                </Carousel>
            </section>
            {/* Daily meal distribution section Closed */}


            {/*Monthly Ration Packages section Open */}
            <section className=' bg-white text-black'>

                <div className=' lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20  uppercase'>
                    <h1 className='sm:pl-8 '>2. MONTHLY RATION PACKAGES</h1>
                </div>

                <div className='lg:flex lg:pl-24  mb-24 px-4 md:px-20'>

                    <div className="lg:w-[60%] pt-10">
                        <p className='sm:pl-8  pb-4 xl:pr-5 lg:pr-24 md:pr-14 sm:pr-24 text-justify'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum,
                        </p>
                    </div>

                    <div className='lg:w-[40%] pt-20'>
                        <div className=' lg:mx-16 md:mx-10 sm:mx-10 rounded-md shadow-lg shadow-slate-900'>
                            <div className=' bg-gradient-to-l from-black to-blue-700  rounded-md cursor-pointer text-white'>
                                <img src={bg1} alt="deily lunch distribution" className='p-1' />
                                <h1 className=' px-4 text-md pt-4 text-center'>Picture Gallery</h1>
                                <p className=' px-4 text-sm my-3 font-light pb-4 text-center '> Daily lunch distribution in Hangu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Carousel responsive={responsive} className=' lg:mx-20 text-white'>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                </Carousel>
            </section>
            {/*Monthly Ration Packages section closed */}


            {/*Ramazan Ration Packages section open*/}
            <section className='bg-gradient-to-t from-blue-900 bg-black text-white'>

                <div className=' lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20  uppercase'>
                    <h1 className='sm:pl-8 '>3. Ramazan RATION PACKAGES</h1>
                </div>

                <div className='lg:flex lg:pl-24  mb-24 px-4 md:px-20'>

                    <div className="lg:w-[60%] pt-10">
                        <p className='sm:pl-8  pb-4 xl:pr-5 lg:pr-24 md:pr-14 sm:pr-24 text-justify'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum,
                        </p>
                    </div>

                    <div className='lg:w-[40%] pt-20'>
                        <div className=' lg:mx-16 md:mx-10 sm:mx-10 rounded-md shadow-lg shadow-slate-900'>
                            <div className=' bg-gradient-to-l from-black to-blue-700  rounded-md cursor-pointer text-white'>
                                <img src={bg1} alt="deily lunch distribution" className='p-1' />
                                <h1 className=' px-4 text-md pt-4 text-center'>Picture Gallery</h1>
                                <p className=' px-4 text-sm my-3 font-light pb-4 text-center '>
                                    Ramzan Ration Packeges Distribution
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Carousel responsive={responsive} className=' lg:mx-20 text-white'>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                </Carousel>
            </section>
            {/*Ramazan Ration Packages section closed*/}


            {/*Ramazan Iftaar dastarkhwan section open*/}
            <section className=' bg-white text-black'>

                <div className=' lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20  uppercase'>
                    <h1 className='sm:pl-8 uppercase'>4.Ramazan Iftaar dastarkhwan</h1>
                </div>

                <div className='lg:flex lg:pl-24  mb-24 px-4 md:px-20'>

                    <div className="lg:w-[60%] pt-10">
                        <p className='sm:pl-8  pb-4 xl:pr-5 lg:pr-24 md:pr-14 sm:pr-24 text-justify'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum,
                        </p>
                    </div>

                    <div className='lg:w-[40%] pt-20'>
                        <div className=' lg:mx-16 md:mx-10 sm:mx-10 rounded-md shadow-lg shadow-slate-900'>
                            <div className=' bg-gradient-to-l from-black to-blue-700  rounded-md cursor-pointer text-white'>
                                <img src={bg1} alt="deily lunch distribution" className='p-1' />
                                <h1 className=' px-4 text-md pt-4 text-center'>Picture Gallery</h1>
                                <p className=' px-4 text-sm my-3 font-light pb-4 text-center '>
                                    Ramazan Iftaar dastarkhwan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Carousel responsive={responsive} className=' lg:mx-20 text-white'>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                    <div className='lg:mx-3 md:mx-12 sm:mx-10 mx-5'>
                        <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                            <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" className='p-1' />
                            <p className=' px-4 text-md pt-10  my-10 font-light  pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                                aspernatur vitae, officia deserunt facilis suscipit
                            </p>
                        </div>
                    </div>
                </Carousel>
            </section>
            {/*Ramazan Iftaar dastarkhwan section closed*/}


            {/* Help us Section open */}
            <div className='md:flex md:justify-around md:items-center  py-10 px-14 h-56 bg-blue-400 '>
                <h1 className='text-white font-bold sm:text-3xl text-2xl'>Help Us So We Can Kill The Hunger</h1>
                <button className=' border-2 border-white rounded-2xl p-3 ml-24 sm:ml-40 md:mt-0 mt-10 text-white font-bold hover:bg-blue-500'>Donate Now </button>
            </div>
            {/* Help us Section closed */}




        </main>
    )
}

export default DailyMealDis