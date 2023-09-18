import React from "react";
import ImpactCard from "./ImpactCard";
import { Impact } from "../../data";

const OurImpact = () => {
  return (
    <main className="mb-20  mx-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Impact</h1>
      <div className="  grid md:grid-cols-4 gap-6 ">
        {Impact.map((item, indx) => {
          return <ImpactCard item={item} key={indx} />;
        })}
      </div>
    </main>
  );
};

export default OurImpact;
