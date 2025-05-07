import React from "react";

const Button = ({ setIsSignup, bool, text, width, color, transparent }) => {
  return (
    <button
      className={`
      ${width ? `w-[${width}px]` : "w-full"}
     ${
       transparent
         ? "bg-transparent "
         : color
         ? `bg-[${color}]`
         : "hover:text-[#512da8] hover:bg-white hover:border-[#512da8] bg-[#512da8] text-white"
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
