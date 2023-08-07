import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const BottomToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top-btn text-white cursor-pointer hover:scale-125 ${isVisible ? "show" : ""}`} onClick={scrollToTop}>
      <FaArrowCircleUp size={35} />
    </div>
  );
};

export default BottomToTop;