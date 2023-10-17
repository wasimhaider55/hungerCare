import React, { useState, useEffect, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import IntroSection from "./IntroSection";
import Charity from "./Charity";
import Causes from "./Causes";
import ffd1 from "../../assets/freeFoodDis/ffd1.png";
import ffd2 from "../../assets/freeFoodDis/ffd2.png";
import ffd3 from "../../assets/freeFoodDis/ffd3.jpg";
import ffd4 from "../../assets/freeFoodDis/ffd4.png";
import ffd5 from "../../assets/freeFoodDis/ffd5.png";
import spbg1 from "../../assets/freeFoodDis/spbg1.jpg";
import spbg2 from "../../assets/freeFoodDis/spbg2.png";
import OurImpact from "./OurImpact";

const Home = () => {
  const slides = [
    {
      url: ffd1,
    },
    {
      url: ffd2,
    },
    {
      url: ffd3,
    },
    {
      url: ffd4,
    },
    {
      url: ffd5,
    },
    {
      url: spbg1,
    },
    {
      url: spbg2,
    },
  ];

  // create hooks
  const [currentIndex, setCurrentIndex] = useState(0);
  // previous sliding function
  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  // next sliding function
  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  // Add useEffect hooks to handle automatic sliding of carosel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex, nextSlide]); // Include nextSlide in the dependency array
  return (
    <main>
      <section className="max-w-[1400px] sm:h-[590px] h-[400px] w-full m-auto  group sm:mb-0 mb-7 ">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full  bg-center bg-cover duration-500"
        ></div>

        {/* left Arrow */}
        <div className="hidden group-hover:block absolute sm:top-[55%] top-[30%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* right Arrow */}
        <div className="hidden group-hover:block absolute sm:top-[55%] top-[30%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </section>
      <IntroSection />
      <Charity />
      <Causes />
      <OurImpact />
    </main>
  );
};

export default Home;
