import React from 'react'


const AboutUs = () => {
    return (
        <main className='pt-20'>

            <div className=' w-full h-52 bg-gray-700  bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
                <div className=' text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 '>
                    <h1 className=''> About Us </h1>
                    <div className=' w-24 h-1 bg-red-500 rounded-full mt-3 '></div>
                </div>
            </div>


            {/* who we are section */}
            <div className=' lg:text-4xl text-3xl font-bold pt-24 lg:pl-24 md:pl-20 pl-4 uppercase'>
                <h1>Who WE Are</h1>
                <div className=' w-20 h-1 bg-blue-600 rounded-full mt-3 '></div>
            </div>

            <div className='lg:flex lg:pl-24  pt-10 mb-24 px-4 md:px-20  gap-6'>
                <div className="lg:w-[50%]">
                    <p className=' pl-1 pb-4 lg:pr-24 md:pr-24 sm:pr-24 text-justify '>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                        Lorem ipsum,
                    </p>
                </div>

                <div className='lg:w-[50%]'>
                    <img src="https://love.lambeth.gov.uk/wp-content/uploads/2020/05/hubs-2-500-x-320.jpg" alt="who we are " />
                </div>
            </div>


            {/* Our history section  */}
            <section className=' bg-black text-white'>
            <div className=' lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4 uppercase'>
                <h1>Our History</h1>
                <div className=' w-16 h-1 bg-blue-600 rounded-full mt-3 '></div>
            </div>

                <div className='lg:flex lg:pl-24  pt-10 mb-24 px-4 md:px-20  gap-6'>
                    <div className="lg:w-[50%]">
                        <p className=' pl-1 pb-4 lg:pr-24 md:pr-24 sm:pr-24 text-justify '>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum,
                        </p>
                    </div>

                    <div className='lg:w-[50%]'>
                        <img src="https://love.lambeth.gov.uk/wp-content/uploads/2020/05/hubs-2-500-x-320.jpg" alt="who we are " />
                    </div>
                </div>

            </section>




            {/* what we Do section  */}

            <section>
            <div className=' lg:text-4xl text-3xl font-bold pt-4 lg:pl-24 md:pl-20 pl-4 uppercase'>
                <h1>What We Do</h1>
                <div className=' w-20 h-1 bg-blue-600 rounded-full mt-3 '></div>
            </div>

                <div className='lg:flex lg:pl-24  pt-10 mb-24 px-4 md:px-20  gap-6'>
                    <div className="lg:w-[50%]">
                        <p className=' pl-1 pb-4 lg:pr-24 md:pr-24 sm:pr-24 text-justify '>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum,
                        </p>
                    </div>

                    <div className='lg:w-[50%]'>
                        <img src="https://love.lambeth.gov.uk/wp-content/uploads/2020/05/hubs-2-500-x-320.jpg" alt="who we are " />
                    </div>
                </div>
            </section>


        </main>



    )
}

export default AboutUs