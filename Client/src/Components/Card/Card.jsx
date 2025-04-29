import React, { useState } from "react";

const Card = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [text, setText] = useState("");

  const handleAdd = () => {
    setIsAdding(true);
  };

  console.log(isAdding);
  return (
    <div className="w-60   text-[#1F2937] ">
      <div className="w-full h-full bg-[#FFFFFF] rounded-2xl shadow-md opacitry-10 p-2">
        <div className="flex justify-between items-center px-3 pb-2">
          <h2 className="text-[18px] font-bold ">To do</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {!isAdding ? (
          <div
            className="flex gap-1.5 items-center px-3 py-1 hover:bg-[#eef1f5] rounded-[10px] cursor-pointer"
            onClick={() => {
              setIsAdding(true);
            }}
          >
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
            <h2 className="text-[18px] font-bold ">Add a card</h2>
          </div>
        ) : (
          <div className="flex flex-col gap-4  rounded-[10px] cursor-pointer">
            <input
              placeholder="Add text"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="bg-[#eef1f5] px-3 py-2 rounded-[6px] border-2 focus:border-[#3F8CFF] outline-none "
            />

            <div className="flex gap-1.5 items-center mx-3 py-1">
              <button
                onClick={() => {
                  setIsAdding(false);
                }}
                className="bg-[#3F8CFF] text-[#ffff] p-2 rounded-[8px] hover:opacity-60 cursor-pointer "
              >
                Add card
              </button>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10 cursor-pointer hover:bg-[#eef1f5] p-2 rounded-[8px]"
                onClick={() => setIsAdding(false)}
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
