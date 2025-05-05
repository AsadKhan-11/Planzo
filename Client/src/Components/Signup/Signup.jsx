import React from "react";

const Signup = () => {
  return (
    <div className="w-max max-w-xs flex flex-col items-center">
      <h3 className="text-3xl font-bold text-[#1f2937]">Signup</h3>
      <div className="flex flex-col gap-4 pt-8 pb-4">
        <input
          type="text"
          placeholder="Email"
          className="bg-[#F1F5F9] text-[#111827] border-2 border-gray-300 focus:border-[#3F8CFF] outline-none placeholder:text-[#6b7280] rounded-[6px] p-1.5 "
        />
        <input
          type="text"
          placeholder="Username"
          className="bg-[#F1F5F9] text-[#111827] border-2 border-gray-300 focus:border-[#3F8CFF] outline-none placeholder:text-[#6b7280] rounded-[6px] p-1.5 "
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-[#F1F5F9] text-[#111827] border-2 border-gray-300 focus:border-[#3F8CFF] outline-none placeholder:text-[#6b7280] rounded-[6px] p-1.5 "
        />
      </div>

      <button className="w-full text-white bg-[#5c6bc0] hover:bg-[#512da8] transition-all duration-200 ease-in-out cursor-pointer font-bold py-1.5 rounded-[6px]  ">
        Signup
      </button>
    </div>
  );
};

export default Signup;
