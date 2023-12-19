import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "../../../card/VideoCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SmallCard from "../SmallCard";
import bg1 from "../../../../assets/bg1.jpg";

const OrphanFamilySupport = () => {
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
      {/*orphan family support section open */}
      <div className=' relative w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className=" absolute text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 ">
          <h1 className=" capitalize">Orphan Familie's Support </h1>
          <div className=" w-24 h-1 bg-red-500 rounded-full mt-3 "></div>
        </div>
      </div>
      {/* orphan family support section Closed */}

      {/* Overview section Open */}
      <div className="lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4">
        <h1>Overview</h1>
        <div className=" w-20 h-1 bg-blue-600 rounded-full mt-3 "></div>
      </div>

      <div className="py-10 pr-4  lg:pr-16 pl-4 md:pl-20 lg:pl-24 text-justify text-gray-500">
        <p>
          <strong className=" font-semibold">
            {" "}
            Orphan Family Support Nurturing Hope and Providing Strength{" "}
          </strong>
          The Spogmai Foundation's aim focuses on building hope and offering
          support to orphaned families. We recognize the particular problems
          that orphaned children and their families experience, and our Orphan
          Family Support program is committed to making a long-term positive
          difference in their lives.
        </p>
        <p className=" mt-2">
          We believe every child, regardless of what they face, needs a stable
          and caring environment in which to thrive. Our Orphan Family Support
          program provides a comprehensive strategy that includes emotional,
          educational, and financial assistance, with the goal of providing a
          solid foundation for these families to build on.
        </p>
        <p className="mt-2">
          Prophet Muhammad PBUH said:
          <strong className="font-semibold">
            "I and the person who looks after an orphan and provides for him,
            will be in Paradise like this,
          </strong>
          putting his index and middle fingers together." ~ Sahi Bukhari
        </p>
        <p className="my-2">
          Spogmai Charity Foundation cordially invites you to join us on this
          transforming journey. By contributing to our Orphan Family Support
          program, you become an inspiration of hope for these families,
          assisting them in rebuilding their lives and embracing a bright
          future.
        </p>
        <strong>
          Let us work together to uplift, empower, and motivate orphaned
          families toward a brighter future.
        </strong>
      </div>
      {/* Overview section Closed */}

      {/* orphan family support section components open */}
      <section className="bg-gradient-to-b from-[rgb(142,191,155)] via-[#d8f6e7] to-[#89e9f9] text-black">
        <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 capitalize">
          <h1 className="sm:pl-8 pl-2 "> Orphan Familie's Support </h1>
        </div>

        <div className="lg:flex lg:pl-24  mb-24 px-4 md:px-20">
          <div className="lg:w-[60%] pt-10">
            <p className="sm:pl-8  pb-4 xl:pr-5 lg:pr-24 md:pr-14 sm:pr-24 text-justify">
              The Spogmai Foundation's Orphan Families Support program is
              dedicated to making a meaningful difference in the lives of
              families who have lost their primary caregivers. Our initiative is
              designed to provide essential assistance and support to these
              vulnerable families, helping them navigate the challenges they
              face and providing a path towards a brighter future.
              <br />
              We firmly believe that every orphaned family deserves access to
              opportunities, resources, and a nurturing environment. Our
              committed team works tirelessly to ensure that these families
              receive the care, guidance, and resources they need to heal and
              thrive.
              <br />
              Our program goes beyond just addressing practical needs. It also
              promotes inclusivity and raises awareness about the resilience and
              potential of orphaned families. By creating a supportive and
              compassionate community, we aim to break down stigmas and societal
              barriers, fostering an environment where these families can
              rebuild their lives with dignity and hope.
              <br />
              The Spogmai Foundation's Orphan Families Support program is not
              only about providing essential resources but also about offering
              emotional and psychological support, and empowering these families
              to move towards self-sufficiency and a brighter future. We believe
              that by embracing diversity and working together, we can create a
              more inclusive and compassionate society where orphaned families
              can thrive and find hope amidst adversity.
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
              description="Orphan Family Support"
              link="/gallery/orphanfamilysupport"
            />
          </div>
        </div>

        <Carousel responsive={responsive}
         className="z-0 lg:mx-20 text-white">
          <VideoCard
            link="https://www.youtube.com/embed/fAJrKq-_leU?si=aiWseLW9-9CJlC1D"
            title="Spogmai foundation support orphan family in village Kahi district Hangu"
          />
          <VideoCard
            link="https://www.youtube.com/embed/KbHj3mBwE6E?si=NpIfan_laYQBDzZQ"
            title="The founder of Spogmai foundation Tahir fida support orphan familes in Hangu"
          />
          <VideoCard
            link="https://www.youtube.com/embed/JpMfJhnXE4k?si=0lbutDYz7dKU9p-y"
            title="The Spogmai foundation support orphan family in village darsamand district Hangu"
          />
          <VideoCard
            link="https://www.youtube.com/embed/hSEw87lSDnk?si=kFRVOJ33X-nZfpNr"
            title="Spogmai foundation support many orphan's family in village darsamand "
          />
          <VideoCard
            link="https://www.youtube.com/embed/-Uj5oUylymw?si=-fYUeNuybZ01uwJK"
            title="Spogmai foundation support orphan family in village Tarri band district Hangu"
          />
        </Carousel>
      </section>
      {/* orphan family support section components Closed */}

      {/* Help us Section open */}
      <Link to="/donateNow">
        <div className="md:flex md:justify-around md:items-center py-10 my-5 sm:px-14 px-5 h-56 bg-blue-400 ">
          <h1 className="text-white font-bold md:text-3xl text-2xl">
          Help Us So We Can help many more orphans families
          </h1>
          <button className=" border-2 border-white rounded-2xl p-3 ml-16 sm:ml-40 md:mt-0 mt-10 text-white font-bold hover:bg-blue-500">
            Donate Now
          </button>
        </div>
      </Link>
      {/* Help us Section closed */}
            
    </main>
  );
};

export default OrphanFamilySupport;
