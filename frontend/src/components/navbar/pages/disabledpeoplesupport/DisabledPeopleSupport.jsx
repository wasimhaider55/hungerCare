import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bg1 from "../../../../assets/bg1.jpg";
import { Link } from "react-router-dom";
import VideoCard from "../../../card/VideoCard";
import SmallCard from "../SmallCard";

const DisabledPeopleSupport = () => {
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
    <main>
      {/*Disabled people support section open */}
      <div className='relative w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className=" absolute text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 ">
          <h1 className="">Disabled People Support </h1>
          <div className=" w-24 h-1 bg-red-500 rounded-full mt-3 "></div>
        </div>
      </div>
      {/* Disabled people support section Closed */}

      {/* Overview section Open */}
      <div className="lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4">
        <h1>Overview</h1>
        <div className=" w-20 h-1 bg-blue-600 rounded-full mt-3 "></div>
      </div>

      <div className="py-10 pr-4  lg:pr-16 pl-4 md:pl-20 lg:pl-24 text-justify text-gray-500">
        <p className=" mt-2 mb-6">
          At the Spogmai Foundation, we are dedicated to championing the rights
          and potential of disabled individuals through our comprehensive
          Disabled People Support program.
        </p>
        <strong>Our Approach:</strong>
        <p className="mt-4">
          We work tirelessly to create an inclusive society that celebrates
          diversity and supports the needs of disabled individuals. We strive to
          ensure that all aspects of life are accessible, from infrastructure to
          information, promoting independence and participation.
        </p>
        <p className=" mt-2">
          Our program provides a range of services, from medical assistance and
          therapy to emotional support, empowering disabled individuals to live
          fulfilling lives and We promote education and skill development,
          fostering self-confidence and equipping disabled individuals with
          tools for self-sufficiency.
        </p>
        <p className=" mt-2 mb-8">
          Your support amplifies the voices of disabled individuals and
          contributes to a more inclusive and empathetic society.
        </p>
        <strong>
          Together, let's build a world where every individual's abilities
          shine.
        </strong>
      </div>

      {/* Overview section Closed */}

      {/* Disabled People Support section Open */}
      <section className="bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black">
        <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 capitalize">
          <h1 className="sm:pl-8 ">Disabled People Support</h1>
        </div>

        <div className="lg:flex lg:pl-24  mb-24 px-4 md:px-20">
          <div className="lg:w-[60%] pt-10">
            <p className="sm:pl-8  pb-4 xl:pr-5 lg:pr-24 md:pr-14 sm:pr-24 text-justify">
              Spogmai Foundation is committed to making a positive difference in
              the lives of disabled individuals within our community. Our
              Disabled People Support program is a vital initiative designed to
              address the unique challenges faced by individuals with
              disabilities and provide them with the support they need to lead
              fulfilling lives.
              <br />
              Our program is founded on the belief that every person, regardless
              of their abilities, deserves access to opportunities, resources,
              and support. We work tirelessly to ensure that disabled
              individuals receive the assistance and encouragement they need to
              overcome obstacles and achieve their goals.
              <br />
              Moreover, our program goes beyond just addressing practical needs.
              It promotes inclusivity and raises awareness about the
              capabilities and potential of disabled individuals. By fostering a
              supportive and inclusive environment, we aim to break down
              societal barriers and promote a more equitable and compassionate
              society.
              <br />
              Spogmai Foundation's Disabled People Support program is not only
              about providing essential resources but also about empowering
              disabled individuals to lead fulfilling and independent lives. We
              believe that by embracing diversity and working together, we can
              create a more inclusive and compassionate society where every
              person, regardless of their abilities, can thrive.
              <br />
              <p className=" mt-5">
                <strong>
                  The clips below show our Monthly Rations Distribution.
                </strong>
              </p>
            </p>
          </div>

          <div className="lg:w-[40%] pt-20">
            <SmallCard
              image={bg1}
              title="Picture Gallery"
              description="Disabled People Support"
              link="/gallery/disablepeopleusupport"
            />
          </div>
        </div>

        <Carousel responsive={responsive} className=" lg:mx-20 text-white">
          <VideoCard
            link="https://www.youtube.com/embed/QeWNYe-ZULk?si=x2YQxE9CP146mebv"
            title="spogmai foundation support disabled person who's from dawaba Hangu"
          />
          <VideoCard
            link="https://www.youtube.com/embed/Rjnxorasego?si=TU5EMjkOpPL5wiKt"
            title="spogmai foundation support cancer patient in Kahi district Hangu"
          />
          <VideoCard
            link="https://www.youtube.com/embed/DqhPvdN_1yk?si=AU-xukjK45fwMQIu"
            title="spogmai foundation support dissabled person who's from lakhti banda hangu"
          />
          <VideoCard
            link="https://www.youtube.com/embed/iHsitsXSNQE?si=3XlhPWorcH9tGaB6"
            title="spogmai foundation support dissabled person who's from tange banda Hangu"
          />
          <VideoCard
            link="https://www.youtube.com/embed/AZfqTCb2yJY?si=UZ6u1WRE15Ouc6yz"
            title="spogmai foundation support dissabled person who's from togh sary banda Hangu"
          />
          <VideoCard
            link="https://www.youtube.com/embed/cXI7esD_xLc?si=BTHKKA0v_csI6p9L"
            title="spogmai foundation support dissabled person who's from jawar ghundi Hangu"
          />
          <VideoCard
            link="https://www.youtube.com/embed/KZT7Hug9OQQ?si=xptEEz2vWFRqq9CE"
            title="spogmai foundation support dissabled person who's from district Karak"
          />
          <VideoCard
            link="https://www.youtube.com/embed/MksfSTiaHc4?si=yFzaed3kACYcYqo7"
            title="spogmai foundation support dissabled person who's from district Karak village taht e nasrati"
          />
          <VideoCard
            link="https://www.youtube.com/embed/3huoYedMbZQ?si=6zyMPmT27mYpO2X"
            title="spogmai foundation support dissabled person"
          />
        </Carousel>
      </section>
      {/* Disabled People Support section Closed */}

      {/* Help us Section open */}
      <Link to="/donateNow">
        <div className="md:flex md:justify-around md:items-center py-10 my-5 px-14 h-56 bg-blue-400 ">
          <h1 className="text-white font-bold sm:text-3xl text-2xl">
            Help Us So We Can help many more disabled people
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

export default DisabledPeopleSupport;
