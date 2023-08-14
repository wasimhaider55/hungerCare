import React from "react";
import { FaRegHandshake } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import IntroCard from "./IntroCard";

const Card = () => {
  const DetailsData = [
    {
      title: "Who we are",
      description:
        " We are a Pakistani charity organisation dedicated to assisting the needy people of society.",
      icon: <FaRegHandshake size={50} />,
      path: "/AboutUs#whoWeAre",
    },
    {
      title: "What we do",
      description:
        "We provide cash, clothing, food, and medicine to the poorest areas of district Hangu.",
      icon: <BiDonateHeart size={50} />,
      path: "/AboutUs#whatWeDo",
    },
    {
      title: "Our Team",
      description:
        "Our volunteers and staff work tirelessly to provide community services",
      icon: <RiTeamLine size={50} />,
      path: "/AboutUs#ourTeam",
    },
  ];

  return (
    <section>
      <div className="grid  md:grid-cols-3 gap-8 px-12 mx-3 sm:mx-20 sm:px-0 sm:py-24 py-4 text-white">
        {DetailsData.map((item, index) => {
          return (
            <IntroCard
              key={index}
              title={item.title}
              description={item.description}
              path={item.path}
              icon={item.icon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Card;
