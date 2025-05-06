import React from "react";

const Button = ({ setIsSignup, bool, text, width, color, transparent }) => {
  return (
    <button
      className={`
      ${transparent ? `bg-transparent]` : ""}
      ${width ? `w-[${width}px]` : "w-full"}
      ${
        color
          ? `bg-[${color}]`
          : "hover:text-[#512da8] hover:bg-white bg-[#512da8] text-white"
      }
      border-2 border-white shadow-lg px-10 py-2 rounded-[10px] font-semibold transition duration-300 ease-in-out cursor-pointer
    `}
      onClick={() => setIsSignup(bool)}
    >
      {text}
    </button>
  );
};

export default Button;
