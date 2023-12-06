import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Swal from 'sweetalert2'

const FoodMessages = () => {
  const [user, setUser] = useState([]);

  const getMessage = async () => {
    await axios
      .get("/getfood")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMessage();
  }, []);

  const handleDelete = async (userId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      // changes the color of the confirm button to red
      confirmButtonColor: '#004d73',
      cancelButtonColor: '#FF0032',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`/deleteFood/${userId}`)
            .then((response) => {
              setUser((prevUser) => prevUser.filter((user) => user._id !== userId));
            })

        } catch (err) {
          console.log(err);
        }
      }


    })

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
              className="flex justify-between cursp border border-gray-200 rounded-md my-1 p-1 px-2 "
            >
              <Link className="w-full" to={`/foodMessage/${use._id}`}>
                <div>
                  <h3 className="font-semibold text-gray-800">{use.name}</h3>
                  <p className="font-sm text-gray-400">{use.phoneNumber}</p>
                </div>
              </Link>

              <button
                onClick={() => handleDelete(use._id)} className="text-[#FF0032]">
                <BiTrash size={22} className=" hover:scale-110" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodMessages;
