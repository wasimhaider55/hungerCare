import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Causes = () => {

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
        <section>

            <h1 className='lg:text-4xl text-4xl font-bold  text-center'>
                Our Causes
            </h1>

            <Carousel responsive={responsive} className='py-10 lg:mx-10'>
                <div className=' lg:mx-16 md:mx-12 sm:mx-10 mx-5'>
                    <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                        <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" />
                        <h1 className=' px-4 text-md pt-8'>Free Food Distribution</h1>
                        <p className=' px-4 text-sm leading-7 my-10 font-light opacity-50 pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                            aspernatur vitae, officia deserunt facilis suscipit
                        </p>
                    </div>
                </div>
                <div className=' lg:mx-16 md:mx-12 sm:mx-10 mx-5' >
                    <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                        <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" />
                        <h1 className=' px-4 text-md pt-8'>Free Food Distribution</h1>
                        <p className=' px-4 text-sm leading-7 my-10 font-light opacity-50 pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                            aspernatur vitae, officia deserunt facilis suscipit
                        </p>
                    </div>
                </div>
                <div className=' lg:mx-16 md:mx-12 sm:mx-10 mx-5'>
                    <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                        <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" />
                        <h1 className=' px-4 text-md pt-8'>Free Food Distribution</h1>
                        <p className=' px-4 text-sm leading-7 my-10 font-light opacity-50 pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                            aspernatur vitae, officia deserunt facilis suscipit
                        </p>
                    </div>
                </div>
                <div className='mx-4'>
                    <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                        <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" />
                        <h1 className=' px-4 text-md pt-8'>Free Food Distribution</h1>
                        <p className=' px-4 text-sm leading-7 my-10 font-light opacity-50 pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                            aspernatur vitae, officia deserunt facilis suscipit
                        </p>
                    </div>
                </div>
                <div className='mx-4'>
                    <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                        <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" />
                        <h1 className=' px-4 text-md pt-8'>Free Food Distribution</h1>
                        <p className=' px-4 text-sm leading-7 my-10 font-light opacity-50 pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                            aspernatur vitae, officia deserunt facilis suscipit
                        </p>
                    </div>
                </div>
                <div className='mx-4'>
                    <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                        <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" />
                        <h1 className=' px-4 text-md pt-8'>Free Food Distribution</h1>
                        <p className=' px-4 text-sm leading-7 my-10 font-light opacity-50 pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                            aspernatur vitae, officia deserunt facilis suscipit
                        </p>
                    </div>
                </div>
                <div className='mx-4'>
                    <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                        <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" />
                        <h1 className=' px-4 text-md pt-8'>Free Food Distribution</h1>
                        <p className=' px-4 text-sm leading-7 my-10 font-light opacity-50 pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                            aspernatur vitae, officia deserunt facilis suscipit
                        </p>
                    </div>
                </div>
            </Carousel>;
        </section>
    )
}

export default Causes