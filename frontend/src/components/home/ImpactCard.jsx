import React from "react";

const ImpactCard = ({ item }) => {
  return (
    <div className="w-full h-[250px]  flex flex-col justify-center items-center text-center space-y-3 bg-gray-100 text-gray-700 rounded-md shadow-lg border border-gray-300">
      <div className="text-blue-600">{item.icon}</div>
      <p className="text-4xl font-bold">{item.count}</p>
      <p className="text-2xl font-semibold">{item.title}</p>
      <p className="font-sm">{item.desc}</p>
    </div>
  );
};

export default ImpactCard;
