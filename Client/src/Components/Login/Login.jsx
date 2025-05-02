import React from "react";
import bgImage from "../../assets/login-bg.jpeg";
import logImg from "../../assets/download.jpg";
import card from "../../assets/card.jpg";

const Login = () => {
  return (
    <div
      className=" bg-cover bg-center size-full flex justify-center items-center bg-auth-gradient"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="w-2xs p-10  rounded-[10px] bg-cover bg-center size-full h-auto bg-[#F9FAFB] shadow-lg "
        // style={{ backgroundImage: `url(${logImg})` }}
      >
        <div className="w-full flex flex-col items-center ">
          <h3 className="text-3xl font-bold text-[#0b1d3c]">Login</h3>
          <div className="flex flex-col gap-4 py-8">
            <input
              type="text"
              placeholder="Email"
              className="bg-[#F1F5F9] text-[#1F2937] border-2 border-gray-300 focus:border-[#3F8CFF] outline-none placeholder:text-[#94A3B8] rounded-[6px] p-1.5 "
            />
            <input
              type="text"
              placeholder="Password"
              className="bg-[#F1F5F9] text-[#1F2937] border-2 border-gray-300 focus:border-[#3F8CFF] outline-none placeholder:text-[#94A3B8] rounded-[6px] p-1.5 "
            />
          </div>
          <a href="" className="text-[#0b1d3c]">
            Forgotten Password
          </a>
          <button className="w-full  text-white bg-[#3F8CFF] font-bold py-1.5 rounded-[6px]  ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
