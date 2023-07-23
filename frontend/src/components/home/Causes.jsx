import React from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


const Causes = () => {
    return (
        <section>

            <h1 className='lg:text-4xl text-4xl font-bold  text-center'>
                Our Causes
            </h1>


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 mx-3 sm:mx-20 sm:px-0 py-24 text-white '>

                <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                    <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" />
                    <h1 className=' px-4 text-md pt-8'>Free Food Distribution</h1>
                    <p className=' px-4 text-sm leading-7 my-10 font-light opacity-50 pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                        aspernatur vitae, officia deserunt facilis suscipit
                    </p>
                </div>


                <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                    <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" />
                    <h1 className=' px-4 text-md pt-8'>Free Food Distribution</h1>
                    <p className=' px-4 text-sm leading-7 my-10 font-light opacity-50 pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                        aspernatur vitae, officia deserunt facilis suscipit
                    </p>
                </div>


                <div className=' bg-gradient-to-l from-black to-blue-700  rounded-xl cursor-pointer'>
                    <img src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4" alt="free food distribution" />
                    <h1 className=' px-4 text-md pt-8'>Free Food Distribution</h1>
                    <p className=' px-4 text-sm leading-7 my-10 font-light opacity-50 pb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing
                        aspernatur vitae, officia deserunt facilis suscipit
                    </p>
                </div>

            </div>

            {/* left Arrow */}
            <div>
                <BsChevronCompactLeft size={130} />
            </div>
            {/* right Arrow */}
            <div>
                <BsChevronCompactRight size={130} />
            </div>
        </section>
    )
}

export default Causes