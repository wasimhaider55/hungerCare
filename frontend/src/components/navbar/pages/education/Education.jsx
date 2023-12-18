import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import ES1 from "../../../../assets/freeFoodDis/ES1.png";

import VideoCard from "../../../card/VideoCard";

import SmallCard from "../SmallCard";

const Education = () => {
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
    <main className="min-h-screen">
      {/*Education section open */}
      <div className='relative w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className=" absolute text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 ">
          <h1 className="">Education Support </h1>
          <div className=" w-24 h-1 bg-red-500 rounded-full mt-3 "></div>
        </div>
      </div>
      {/* Education section Closed */}

      {/* Overview section Open */}
      <div className="lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4">
        <h1>Overview</h1>
        <div className=" w-20 h-1 bg-blue-600 rounded-full mt-3 "></div>
      </div>

      <div className="py-10 pr-4  lg:pr-16 pl-4 md:pl-20 lg:pl-24 text-justify text-gray-500">
        <p className="mt-2 mb-6">
          At Spogmai Foundation, we believe education is the cornerstone of
          progress, which is why our Education Support program is dedicated to
          unlocking opportunities for every learner.
        </p>
        <strong>Our Approach:</strong>
        <p className="mt-4">
          We provide access to quality education, mentorship, and resources to
          nurture a generation of empowered individuals. We ensure that children
          from all backgrounds have access to education, bridging gaps and
          fostering inclusivity. We support teachers by offering training and
          resources, ensuring that the learning environment is dynamic and
          effective.
        </p>
        <p className="mt-2">
          Our program focuses on both academic and practical skills, preparing
          students for real-world challenges and opportunities. and We encourage
          students to dream big. With guidance and support, we inspire them to
          pursue careers aligned with their passions.
        </p>
        <p className="mt-2 mb-8">
          By contributing to our Education Support program, you contribute to a
          brighter future for individuals and society as a whole.
        </p>
        <strong>
          Together, let's light the path to knowledge and open doors to endless
          possibilities.
        </strong>
      </div>

      {/* Overview section Closed */}

      {/*Education Support section open*/}
      <section className="bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black my-10">
        {/* Slum school section start */}
        <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20  uppercase">
          <h1 className="sm:pl-8 ">ORPHAN EDUCATION SUPPORT</h1>
        </div>

        <div className="lg:flex lg:pl-24  mb-24 px-4 md:px-20">
          <div className="lg:w-[60%] pt-10">
            <p className="sm:pl-8  pb-4 xl:pr-5 lg:pr-24 md:pr-14 sm:pr-24 text-justify">
              From spogmai foundation As the winter season draws near, we are
              excited to launch our 'Winter Warmth Initiative,' where we extend
              our hands of care to orphan families by providing them with
              essential winter gear "Join us in making a difference this winter
              by ensuring that orphan children and their families have the
              warmth they deserve. Our initiative aims to provide cozy winter
              coats, caps, gloves, and more."
              <p className="pt-3">
                This winter, let's come with spogmai foundation together to
                share the gift of warmth with those in need. Through our 'Winter
                Essentials Drive,' we're collecting winter coats, hats, gloves,
                and more to support orphan families.
              </p>
              <p className="pt-3">
                With the cold months approaching, our mission is to ensure that
                no orphan child feels the chill. We're launching our 'Winter
                Comfort Campaign,' providing orphan families with the warmth and
                protection they need.
              </p>
            </p>
          </div>

          <div className="lg:w-[40%] pt-20">
            <SmallCard
              image={ES1}
              title="Picture Gallery"
              description="Education Support"
              link="/gallery/educationsupport"
            />
          </div>
        </div>
        {/* Slum school section end */}

        <Carousel responsive={responsive}
         className="z-0 lg:mx-20 text-white">
          <VideoCard
            link="https://www.youtube.com/embed/-i70DZH0tUU"
            title="spogmai foundation support different  school children's in district Hangu"
          />
          <VideoCard
            link="https://www.youtube.com/embed/QmVEDlrwg8Y"
            title="spogmai foundation support different  school children's in winter weather"
          />
          <VideoCard
            link="https://www.youtube.com/embed/P66dhTrT97E"
            title="spogmai foundation support education children of darsamand school"
          />
          <VideoCard
            link="https://www.youtube.com/embed/t9nbaXlzkck"
            title="spogmai foundation supportschool students in Hangu tehseel tall"
          />
          <VideoCard
            link="https://www.youtube.com/embed/8rKXdDgcj18"
            title="spogmai foundation support school student and distribute jacket of winter"
          />
        </Carousel>
      </section>
      {/*Education Support section closed*/}

      {/* Help us Section open */}
      <Link to="/donateNow">
        <div className="md:flex md:justify-around md:items-center py-10 my-5 px-14 h-56 bg-blue-400 ">
          <h1 className="text-white font-bold sm:text-3xl text-2xl">
            Help Us So We Can help many more Orphan people
          </h1>
          <button className=" border-2 border-white rounded-2xl p-3 ml-24 sm:ml-40 md:mt-0 mt-10 text-white font-bold hover:bg-blue-500">
            Donate Now{" "}
          </button>
        </div>
      </Link>
      {/* Help us Section closed */}
    </main>
  );
};

export default Education;
