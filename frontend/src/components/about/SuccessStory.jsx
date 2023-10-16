import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SuccessCard from "../../components/about/SuccessCard";
import { Link } from "react-router-dom";

const SuccessStory = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div>
            {/*Our Success Stories section open*/}
            <section className="my-10">
                <div className=" lg:text-4xl sm:text-3xl text-2xl font-bold  text-center text-black sm:py-8 pt-5 sm:my-10 my-5">
                    <h1 className="text-center ">Our <span className=' text-[#73e0f3]'>Success</span>  Stories</h1>
                </div>

                <Carousel
                    responsive={responsive}
                    className=" lg:mx-20 text-white py-10"
                >
                    <SuccessCard
                        link="https://www.youtube.com/embed/KZT7Hug9OQQ"
                    />
                    <SuccessCard
                        link="https://www.youtube.com/embed/KcMlMPsy7fU"
                    />
                    <SuccessCard
                        link="https://www.youtube.com/embed/AZfqTCb2yJY"
                    />
                    <SuccessCard
                        link="https://www.youtube.com/embed/OTKUTfAhd-g"
                    />
                    <SuccessCard
                        link="https://www.youtube.com/embed/oYg7m3__FOc"
                    />
                    <SuccessCard
                        link="https://www.youtube.com/embed/fAJrKq-_leU"
                    />
                    <SuccessCard
                        link="https://www.youtube.com/embed/GPFqDAm7E0A"
                    />
                    <SuccessCard
                        link="https://www.youtube.com/embed/KcMlMPsy7fU"
                    />
                    <SuccessCard
                        link="https://www.youtube.com/embed/6qrxp6914XY"
                    />
                </Carousel>
            </section>
            {/*Our Success Stories section closed*/}

            {/* Help us Section */}
            <Link to="/donateNow">
                <div className="md:flex md:justify-around md:items-center py-10 sm:px-14 px-5 h-48 bg-blue-400 ">
                    <h1 className="text-white font-bold md:text-3xl sm:text-2xl text-xl">
                        Help Us So We Can Help Others
                    </h1>
                    <button className=" border-2 border-white rounded-2xl p-3 ml-20 sm:ml-40 md:mt-0 sm:mt-10 mt-6 text-white font-bold hover:bg-blue-500">
                        Donate Now
                    </button>
                </div>
            </Link>
        </div>
    )
}

export default SuccessStory