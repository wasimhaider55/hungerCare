import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Causes = () => {
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
    <section>
      <h1 className="lg:text-4xl text-4xl font-bold  text-center">
        Our Causes
      </h1>
      <Carousel responsive={responsive} className="py-14 lg:mx-10 text-black">
        <div className=" lg:mx-16 md:mx-12 sm:mx-10 mx-5 rounded-xl shadow-lg shadow-slate-900">
          <div className=" bg-gray-100 rounded-xl cursor-pointer">
            <img
              src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4"
              alt="free food distribution"
              className="p-1 rounded-xl"
            />
            <h1 className=" px-4 text-md pt-8">Free Food Distribution</h1>
            <p className=" px-4 text-sm leading-7 my-10 font-light pb-4 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing aspernatur
              vitae, officia deserunt facilis suscipit
            </p>
          </div>
        </div>
        <div className=" lg:mx-16 md:mx-12 sm:mx-10 mx-5 rounded-xl shadow-lg shadow-slate-900">
          <div className=" bg-gray-100 rounded-xl cursor-pointer">
            <img
              src="https://images.squarespace-cdn.com/content/v1/577eab6d03596e5318b18a43/1599066636360-H7Y593575V2IJG569ITW/Orphans.png"
              alt="free food distribution"
              className="p-1 rounded-xl"
            />
            <h1 className=" px-4 text-md pt-8">Orphan Family Support</h1>
            <p className=" px-4 text-sm leading-7 my-10 font-light pb-4 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing aspernatur
              vitae, officia deserunt facilis suscipit
            </p>
          </div>
        </div>
        <div className=" lg:mx-16 md:mx-12 sm:mx-10 mx-5 rounded-xl shadow-lg shadow-slate-900">
          <div className=" bg-gray-100 rounded-xl cursor-pointer">
            <img
              src="https://images.squarespace-cdn.com/content/v1/577eab6d03596e5318b18a43/1616705131281-N5S4XIVBSLFSPZ4R819V/Orphange-Care.png?format=1500w"
              alt="free food distribution"
              className="p-1 rounded-xl"
            />
            <h1 className=" px-4 text-md pt-8">Free Food Distribution</h1>
            <p className=" px-4 text-sm leading-7 my-10 font-light pb-4 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing aspernatur
              vitae, officia deserunt facilis suscipit
            </p>
          </div>
        </div>
        <div className=" lg:mx-16 md:mx-12 sm:mx-10 mx-5 rounded-xl shadow-lg shadow-slate-900">
          <div className=" bg-gray-100  rounded-xl cursor-pointer">
            <img
              src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4"
              alt="free food distribution"
              className="p-1 rounded-xl"
            />
            <h1 className=" px-4 text-md pt-8">Free Food Distribution</h1>
            <p className=" px-4 text-sm leading-7 my-10 font-light pb-4 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing aspernatur
              vitae, officia deserunt facilis suscipit
            </p>
          </div>
        </div>
        <div className=" lg:mx-16 md:mx-12 sm:mx-10 mx-5 rounded-xl shadow-lg shadow-slate-900">
          <div className=" bg-gray-100  rounded-xl cursor-pointer">
            <img
              src="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4"
              alt="free food distribution"
              className="p-1 rounded-xl"
            />
            <h1 className=" px-4 text-md pt-8">Free Food Distribution</h1>
            <p className=" px-4 text-sm leading-7 my-10 font-light pb-4 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing aspernatur
              vitae, officia deserunt facilis suscipit
            </p>
          </div>
        </div>
      </Carousel>
      ;
    </section>
  );
};

export default Causes;
