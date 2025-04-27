import React from "react";

const Nav = () => {
  return (
    <nav className="w-full h-auto fixed top-0 z-50 ">
      <div className="px-6 py-3 h-full mx-auto flex justify-between items-center border-b-[#CBD5E1] border-b-2 ">
        <div className="text-4xl font-bold">Planzo</div>

        <div className="w-[40%] px-2 h-12 bg-[#EDF2F7]  rounded-md flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-[#94A3B8]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            aria-label="Search tasks"
            type="text"
            placeholder="Search tasks..."
            className=" w-full text-[#1F2937] focus:outline-none px-2 placeholder:text-[#94A3B8]"
          />
        </div>

        <div className="h-full w-auto rounded-full flex items-center justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 hover:scale-105 transition-transform duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
