import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "../../../card/VideoCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SmallCard from "../SmallCard";
import bg1 from "../../../../assets/bg1.jpg";

const PoorFamilySupport = () => {
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
      {/*poor famillies support section open */}
      <div className=' relative w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className=" absolute text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 ">
          <h1 className=" capitalize">Poor Familie's Support </h1>
          <div className=" w-24 h-1 bg-red-500 rounded-full mt-3 "></div>
        </div>
      </div>
      {/* poor famillies support section Closed */}

      {/* Overview section Open */}
      <div className="lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4">
        <h1>Overview</h1>
        <div className=" w-20 h-1 bg-blue-600 rounded-full mt-3 "></div>
      </div>

      <div className="py-10 pr-4  lg:pr-16 pl-4 md:pl-20 lg:pl-24 text-justify text-gray-500">
        <p className=" mb-5">
          At the Spogmai Charity Foundation, we extend a helping hand to
          vulnerable families through our dedicated Poor Family Support program.
        </p>
        <strong>Our Approach:</strong>
        <p className="mt-4">
          We offer practical assistance that covers essential needs, fosters
          education and promotes self-sufficiency. We alleviate the burden of
          poverty by providing families with access to food, cash and shelter,
          ensuring their basic necessities are met We build a sense of community
          by connecting families, encouraging mutual support, and fostering a
          network for shared growth.
        </p>
        <p className="mt-4 mb-8">
          Your support can create lasting change. By contributing to our Poor
          Family Support program, you become a partner in uplifting families
          from the grips of poverty.
        </p>
        <strong>
          Together, let's empower families and pave the way for a brighter
          tomorrow.
        </strong>
      </div>

      {/* Overview section Closed */}

      {/*poor famillies support section components open */}
      <section className="bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black">
        <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 capitalize">
          <h1 className="sm:pl-8 ">Poor Familie's Support</h1>
        </div>

        <div className="lg:flex lg:pl-24  mb-24 px-4 md:px-20">
          <div className="lg:w-[60%] pt-10">
            <p className="sm:pl-8  pb-4 xl:pr-5 lg:pr-24 md:pr-14 sm:pr-24 text-justify">
              The Spogmai Foundation's Poor Families Support program is
              dedicated to bringing about positive change in the lives of
              economically disadvantaged families within our community. Our
              initiative is designed to address the unique challenges faced by
              these families and provide them with the support they need to
              build brighter futures.
              <br />
              We firmly believe that every family, regardless of their economic
              circumstances, deserves access to opportunities, resources, and
              support. Our dedicated team works tirelessly to ensure that
              economically disadvantaged families receive the assistance and
              encouragement necessary to overcome financial obstacles and
              achieve their goals.
              <br />
              The Spogmai Foundation's Poor Families Support program is not only
              about providing essential resources but also about empowering
              families to lead self-sufficient and dignified lives. We believe
              that by embracing diversity and working together, we can build a
              more inclusive and compassionate society where every family,
              regardless of their economic status, can thrive.
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
              description="Poor Family Support"
              link="/gallery/poorfamilysupport"
            />
          </div>
        </div>
        <Carousel responsive={responsive}
         className="z-0 lg:mx-20 text-white">
          <VideoCard
            link="https://www.youtube.com/embed/U2TgIZ-3KPM?si=U1GMGDypd5TKM445"
            title="Spogmai foundation support poor family in village naryab district Hangu"
          />
          <VideoCard
            link="https://www.youtube.com/embed/4RE4jC60Mx8?si=VRlj1PpFLQvYNNlk"
            title="Spogmai foundation support poor family in hangu district"
          />
          <VideoCard
            link="https://www.youtube.com/embed/qJr7RM4uKvc?si=WJP-Gs36ZpxCO7iB"
            title="The founder of spogmai foundation tahir fida support poor family in village tarri Hangu"
          />
          <VideoCard
            link="https://www.youtube.com/embed/BqiKL3fY93o?si=XXIlyjMkCHgZvejU"
            title="Spogami foundation support poor family in village Darsamand Hangu"
          />
          <VideoCard
            link="https://www.youtube.com/embed/F84mIKofYCU?si=lY1Z-2IgWjWHLUeC"
            title="spogmai foundation support poor family in district hangu"
          />
          <VideoCard
            link="https://www.youtube.com/embed/hFvDsdv-0vI?si=gbCFvtvWhuqNzMDg"
            title="spogmai foundation support poor family in village sarozai district hangu"
          />
          <VideoCard
            link="https://www.youtube.com/embed/d-M2i5Dl9nM?si=FFVmWPKjTdP72SFh"
            title="spogmai foundation support poor family in village balyamena district hangu"
          />
        </Carousel>
      </section>
      {/* poor famillies support section components Closed */}

      {/* Help us Section open */}
      <Link to="/donateNow">
        <div className="md:flex md:justify-around md:items-center py-10 my-5 px-14 h-56 bg-blue-400 ">
          <h1 className="text-white font-bold sm:text-3xl text-2xl">
            Help Us So We Can help many more needy families
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

export default PoorFamilySupport;
