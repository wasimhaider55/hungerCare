import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";

const FoodMssg = () => {
  const [user, setUser] = useState([]);

  const { id } = useParams();

  const getMessage = async () => {
    await axios
      .get(`/FoodOneMessage/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMessage();
  });

  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-[60%] bg-white p-2 rounded-md border-2 border-gray-600">
        <Link to="/foodMessages">
          <button className="p-2">
            <AiOutlineArrowLeft size={24} />
          </button>
        </Link>
        <h1 className="border-b border-gray-200 mb-1 p-2">
          Organization_Name : {user.organizationName}
        </h1>
        <h1 className="border-b border-gray-200 mb-1 p-2">
          Organization_Type : {user.organizationType}
        </h1>
        <h1 className="border-b border-gray-200 mb-1 p-2">
          Name : {user.name}
        </h1>
        <h1 className="border border-gray-200 mb-1 p-2">
          Phone : {user.phoneNumber}
        </h1>
        {user.collectOrDeliver ===
        "Delivery: Unit 8, Acton Park Industrial Estate, Kahi, W3 7YG" ? (
          <h1 className="border border-gray-200 mb-1 p-2">
            collectOrDeliver : {user.collectOrDeliver}
          </h1>
        ) : (
          <h1 className="border border-gray-200 mb-1 p-2">
            deliveryAddress : {user.deliveryAddress}
          </h1>
        )}
        <h1 className="border border-gray-200 mb-1 p-2">
          foodKG : {user.foodKG}
        </h1>
      </div>
    </div>
  );
};

export default FoodMssg;
