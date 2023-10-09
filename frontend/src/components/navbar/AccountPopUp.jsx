import React from "react";
import tahir from "../../assets/teamPics/tahirfida.jpg";

const AccountPopUp = () => {
  return (
    <main className="w-[300px] bg-slate-400 rounded-lg shadow-md h-[20rem] m-32 flex justify-center items-center">
      <div className="flex flex-col  items-center">
        <img
          src={tahir}
          alt="avatorpic"
          className="w-[60px] h-[60px] rounded-full"
        />
        <h1>AbduRazaq</h1>
        <p>irazaqr999@gmail.com</p>
      </div>
    </main>
  );
};

export default AccountPopUp;
