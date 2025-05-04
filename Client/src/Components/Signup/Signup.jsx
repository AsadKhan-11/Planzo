import React from "react";

const Signup = () => {
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
          <h3 className="text-3xl font-bold text-[#0b1d3c]">Signup</h3>
          <div className="flex flex-col gap-4 pt-8 pb-4">
            <input
              type="text"
              placeholder="Email"
              className="bg-[#F1F5F9] text-[#1F2937] border-2 border-gray-300 focus:border-[#3F8CFF] outline-none placeholder:text-[#94A3B8] rounded-[6px] p-1.5 "
            />
            <input
              type="text"
              placeholder="Username"
              className="bg-[#F1F5F9] text-[#1F2937] border-2 border-gray-300 focus:border-[#3F8CFF] outline-none placeholder:text-[#94A3B8] rounded-[6px] p-1.5 "
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-[#F1F5F9] text-[#1F2937] border-2 border-gray-300 focus:border-[#3F8CFF] outline-none placeholder:text-[#94A3B8] rounded-[6px] p-1.5 "
            />
          </div>

          <button className="w-full  text-white bg-[#3F8CFF] font-bold py-1.5 rounded-[6px]  ">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
