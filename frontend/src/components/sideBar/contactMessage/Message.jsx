import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";

const Message = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const getMessage = async () => {
    await axios
      .get(`/getOneMessage/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-[60%] bg-white p-2 rounded-md border-2 border-gray-600">
        <Link to="/messages">
          <button className="p-2">
            <AiOutlineArrowLeft size={24} />
          </button>
        </Link>
        <h1 className="border-b border-gray-200 mb-1 p-2">
          Name : {user.name}
        </h1>
        <h1 className="border-b border-gray-200 mb-1 p-2">
          Phone : {user.phone}
        </h1>
        <h1 className="border-b border-gray-200 mb-1 p-2">
          Email : {user.email}
        </h1>
        <h1 className="border border-gray-200 mb-1 p-2">
          Message : {user.message}
        </h1>
      </div>
    </div>
  );
};

export default Message;
