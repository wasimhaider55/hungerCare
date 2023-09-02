import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "../../../card/VideoCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SmallCard from "../freefooddist/SmallCard";
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
    <main className=" pt-20">
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
      <div className='lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4'>
        <h1>Overview</h1>
        <div className=' w-20 h-1 bg-blue-600 rounded-full mt-3 '></div>
      </div>

      <div className='py-10 pr-4  lg:pr-16 pl-4 md:pl-20 lg:pl-24 text-justify text-gray-500'>
        <p>
          <strong className=" font-semibold">  Orphan Family Support Nurturing Hope and Providing Strength </strong>
          The Spogmai Foundation's aim focuses on building hope and offering support to orphaned families.
          We recognize the particular problems that orphaned children and their families experience,
          and our Orphan Family Support program is committed to making a long-term positive difference
          in their lives.
        </p>
        <p className=" mt-2">
          We believe every child, regardless of what they face, needs a stable and caring environment in which to thrive.
          Our Orphan Family Support program provides a comprehensive strategy that includes emotional, educational, and
          financial assistance, with the goal of providing a solid foundation for these families to build on.
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
          Spogmai Charity Foundation cordially invites you to join us on this transforming journey.
          By contributing to our Orphan Family Support program, you become an inspiration of hope
          for these families, assisting them in rebuilding their lives and embracing a bright future.
        </p>
        <strong>Let us work together to uplift, empower, and motivate orphaned families toward a brighter future.</strong>
      </div>
      {/* Overview section Closed */}

      {/* orphan family support section components open */}
      <section className="bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black">
        <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4 capitalize">
          <h1>Orphan Familie's Support</h1>
          <div className=" w-16 h-1 bg-blue-600 rounded-full mt-3 "></div>
        </div>

        <div className="lg:flex lg:pl-24  mb-24 px-4 md:px-20">
          <div className="lg:w-[60%] pt-10">
            <p className="sm:pl-8  pb-4 xl:pr-5 lg:pr-24 md:pr-14 sm:pr-24 text-justify">
              Certainly, distributing monthly ration packages to impoverished families in our area
              is a critical initiative undertaken by Spogmai  Foundation. This program is designed
              to address the ongoing challenges faced by vulnerable households in accessing essential
              food supplies. By providing a comprehensive package of staple foods and necessities on
              a monthly basis, the foundation aims to alleviate the burden of food insecurity and enhance
              the quality of life for these families.
              <br />
              The monthly ration package includes a carefully curated selection of items such as rice, flour,
              lentils, cooking oil, sugar, and basic hygiene products. This approach ensures that families receive
              a balanced and sufficient diet, along with items to maintain their personal hygiene. By extending
              this assistance regularly, the foundation not only meets immediate needs but also helps families plan
              their resources more effectively, contributing to long-term stability.
              <br />
              Moreover, beyond the tangible impact of providing sustenance, the monthly ration distribution fosters a
              sense of support and unity within the community. It brings families together, emphasizing that they are
              not alone in their struggles. This collective effort builds a network of solidarity that strengthens
              community ties and uplifts individuals emotionally as well as physically.
              <br />
              <p className=" mt-5">
                <strong>The clips below show our Monthly Rations Distribution.</strong>
              </p>
            </p>
          </div>

          <div className="lg:w-[40%] pt-20">
            <SmallCard
              image={bg1}
              title="Picture Gallery"
              description="Monthly Ration Distribution"
            />
          </div>
        </div>

        <Carousel responsive={responsive} className=" lg:mx-20 text-white">
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
        <div className="md:flex md:justify-around md:items-center py-10 my-5 px-14 h-56 bg-blue-400 ">
          <h1 className="text-white font-bold sm:text-3xl text-2xl">
            Help Us So We Can help many more orphans families
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

export default OrphanFamilySupport;
