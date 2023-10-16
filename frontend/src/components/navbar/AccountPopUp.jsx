import React, { useEffect, useState } from "react";
import tahir from "../../assets/teamPics/tahirfida.jpg";

const AccountPopUp = () => {
  const [userData, setUserData] = useState({});

  const callPopUp = async () => {
    try {
      const res = await fetch("/pop", {
        method: "GET",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callPopUp();
  }, []);
  return (
    <main className="w-[300px] bg-slate-400 rounded-lg shadow-md h-[20rem] m-32 flex justify-center items-center">
      <div className="flex flex-col  items-center">
        <img
          src={tahir}
          alt="avatorpic"
          className="w-[60px] h-[60px] rounded-full"
        />
        <h1>{userData.name}</h1>
        <p>irazaqr999@gmail.com</p>
      </div>
    </main>
  );
};

export default AccountPopUp;
