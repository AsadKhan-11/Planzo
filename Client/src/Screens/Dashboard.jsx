import React from "react";
import Card from "../Components/Card/Card";

const Dashboard = () => {
  return (
    <div className="w-full h-full overflow-x-auto ">
      <div className="p-6 flex gap-4.5 w-max items-start">
        <Card title="To do" />
        <Card title="Doing" />
        <div className="flex items-center gap-1.5 font-bold cursor-pointer text-white  bg-[#512da8]/80 backdrop-blur-sm hover:bg-[#512da8]/60 p-4 py-2 w-60 rounded-[12px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 font-bold"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
          Add another list
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
