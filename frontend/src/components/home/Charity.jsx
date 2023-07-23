import React from 'react'

const Charity = () => {
    return (
        <div>
            {/* Welcome to our charity section  */}
            <section className=' bg-black text-white'>
                <div className=' lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4'>
                    <h1>Welcome to Our Charity</h1>
                    <div className=' w-16 h-1 bg-blue-600 rounded-full mt-3 '></div>
                </div>

                <div className='lg:flex lg:pl-24  pt-10 mb-24 px-4 md:px-20 gap-6'>
                    <div className="lg:w-[50%]">
                        <p className=' pl-1 pb-4 lg:pr-24 md:pr-24 sm:pr-24 text-justify '>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum,
                        </p>
                        <button className=' bg-blue-600 p-4 rounded-3xl font-bold my-5'>Read More</button>
                    </div>

                    <div className='lg:w-[50%]'>
                        <img src="https://love.lambeth.gov.uk/wp-content/uploads/2020/05/hubs-2-500-x-320.jpg" alt="who we are " />
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Charity