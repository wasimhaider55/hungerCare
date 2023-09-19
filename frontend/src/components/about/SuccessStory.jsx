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
            <section className="text-black my-10">
                <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20">
                    <h1 className="text-center ">Our Success Stories</h1>
                </div>

                <Carousel
                    responsive={responsive}
                    className=" lg:mx-20 text-white py-10"
                >
                    <SuccessCard
                        link="https://www.youtube.com/embed/5RX1enG0DrM"
                    />
                    <SuccessCard
                        link="https://www.youtube.com/embed/5RX1enG0DrM"
                    />
                    <SuccessCard
                        link="https://www.youtube.com/embed/5RX1enG0DrM"
                    />
                    <SuccessCard
                        link="https://www.youtube.com/embed/5RX1enG0DrM"
                    />
                </Carousel>
            </section>
            {/*Our Success Stories section closed*/}

            {/* Help us Section */}
            <Link to="/donateNow">
                <div className="md:flex md:justify-around md:items-center py-10 px-14 h-56 bg-blue-400 ">
                    <h1 className="text-white font-bold sm:text-3xl text-2xl">
                        Help Us So We Can Help Others
                    </h1>
                    <button className=" border-2 border-white rounded-2xl p-3 ml-24 sm:ml-40 md:mt-0 mt-10 text-white font-bold hover:bg-blue-500">
                        Donate Now{" "}
                    </button>
                </div>
            </Link>
        </div>
    )
}

export default SuccessStory