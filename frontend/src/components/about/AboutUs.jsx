import React from 'react'


const AboutUs = () => {
    return (
        <section>
            <div className=' w-full h-52 bg-gray-700 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'
            >
                <div className=' text-white text-4xl font-bold  pt-20 pl-20 '>
                    <h1 className=''> About Us </h1>
                    <hr className='w-24' />
                </div>
            </div>

            <h1 className=' text-4xl font-bold pt-24 px-24  '>Who WE Are</h1>

            <div className=' flex  pt-10 mb-24  px-24 gap-8'>
                <div className="w-[50%]">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                        Lorem ipsum,
                    </p>
                </div>

                <div className='w-[50%]'>
                    <img src="https://love.lambeth.gov.uk/wp-content/uploads/2020/05/hubs-2-500-x-320.jpg" alt="who we are " />
                </div>
            </div>

        </section>
    )
}

export default AboutUs