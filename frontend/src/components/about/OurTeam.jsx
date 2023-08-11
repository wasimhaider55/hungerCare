import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import wasimhaider from "../../assets/teamPics/wasimhaider.png";
import { Link } from "react-router-dom";
import Card from "./Card";

const OurTeam = () => {
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
    <section className="bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9]">
      <h1 className="lg:text-4xl text-4xl font-bold  text-center text-black py-8">
        Our Core Team Members
      </h1>
      <Carousel responsive={responsive} className="py-10 lg:mx-10 text-white">
        <Card
          image={wasimhaider}
          title="WasimHaider"
          description="Vice President"
        />
        <Card
          image={wasimhaider}
          title="WasimHaider"
          description="Vice President"
        />
        <Card
          image={wasimhaider}
          title="WasimHaider"
          description="Vice President"
        />
        <Card
          image={wasimhaider}
          title="WasimHaider"
          description="Vice President"
        />
        <Card
          image={wasimhaider}
          title="WasimHaider"
          description="Vice President"
        />
      </Carousel>
      ;{/* Help us Section */}
      <Link to="/donateNow">
        <div className="md:flex md:justify-around md:items-center  py-10 px-14 h-56 bg-blue-400 ">
          <h1 className="text-white font-bold sm:text-3xl text-2xl">
            Help Us So We Can Help Others
          </h1>
          <button className=" border-2 border-white rounded-2xl p-3 ml-24 sm:ml-40 md:mt-0 mt-10 text-white font-bold hover:bg-blue-500">
            Donate Now{" "}
          </button>
        </div>
      </Link>
    </section>
  );
};

export default OurTeam;
