import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Messages = () => {
  const [user, setUser] = useState([]);

  const getMessage = async () => {
    await axios
      .get("/getMessage")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMessage();
  }, []);

  const Delete = async (userId) => {
    await axios
      .delete(`/delete/${userId}`)
      .then((response) => {
        setUser((prevUser) => prevUser.filter((user) => user._id !== userId));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full min-h-screen  bg-[#004d73] ">
      <div className="flex justify-center items-center  py-5 w-full ">
        <div className="w-[60%] bg-white p-2 rounded-md border-2 border-gray-600">
          <Link to="/">
            <button className="p-2">
              <AiOutlineArrowLeft size={24} />
            </button>
          </Link>
          {user.map((use, index) => (
            <div
              key={index}
              className="flex justify-between border border-gray-200 rounded-md my-1 p-1 px-2"
            >
              <Link to={`/message/${use._id}`} 
              className="w-full"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">{use.name}</h3>
                  <p className="font-sm text-gray-400">{use.email}</p>
                </div>
              </Link>
              <button onClick={() => Delete(use._id)} className="text-red-600">
                <BiTrash size={22} className=" hover:scale-110" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
