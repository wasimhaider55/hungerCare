import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import tahirfida from "../../assets/teamPics/tahirfida.jpg";
import wasimhaider from "../../assets/teamPics/wasimhaider.png";
import jamshidRehman from "../../assets/teamPics/jamshidRehman.jpg";
import nabiMukhles from "../../assets/teamPics/nabiMukhles.jpg";
import arifHussain from "../../assets/teamPics/arifHussain.jpg";
import amjidKhan from "../../assets/teamPics/amjidKhan.jpg";
import hikmatBangash from "../../assets/teamPics/hikmatBangash.jpg";
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
      <Carousel responsive={responsive} className=" z-0 py-10 lg:mx-10 text-white ">
        <Card
          image={tahirfida}
          title="Tahir Fida"
          description="Founder & president"
        />
        <Card
          image={nabiMukhles}
          title="Nabi Mukhles"
          description="Vice President"
        />
        <Card
          image={arifHussain}
          title="Arif Hussain"
          description="Vice President of UAE"
        />
        <Card
          image={amjidKhan}
          title="Amjid Khan"
          description="General Secretary"
        />
        <Card
          image={hikmatBangash}
          title="Hikmat Bangash"
          description="Manager"
        />
        <Card
          image={jamshidRehman}
          title="Jamshid Rehman"
          description="Finance Secretary"
        />
        <Card
          image={wasimhaider}
          title="WasimHaider"
          description="Office Secretary"
        />
      </Carousel>
    </section>
  );
};

export default OurTeam;
