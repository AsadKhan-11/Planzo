import React from "react";
import Button from "../Components/Button/Button";

const Settings = () => {
  const fields = [
    { label: "Email", type: "email", disable: "disabled" },
    { label: "Full Name", type: "text", disable: "disabled" },
    { label: "Current Password", type: "password" },
    { label: "New Password", type: "password" },
    { label: "Confirm New Password", type: "password" },
  ];

  return (
    <div className="w-full h-full flex justify-center items-center p-4  overflow-auto">
      <div className="w-80 py-4 px-10  bg-[#eef1f5] shadow-lg h-auto rounded-[12px] flex flex-col gap-3 overflow-hidden">
        <h2 className="font-bold text-[22px] text-[#512da8] ">
          Profile Settings
        </h2>

        <div className="py-1 flex flex-col gap-3">
          {fields.map((inputs, index) => (
            <div key={index} className="w-full text-[#111827] ">
              <label htmlFor="" className="pb-0.5">
                {inputs.label}
              </label>
              <input
                type={inputs.type}
                disabled={inputs.disable === "disabled"}
                className={` ${
                  inputs.disable
                    ? "bg-gray-300 "
                    : "border border-gray-300 focus:border-[#512da8] focus:bg-gray-300 outline-none"
                } rounded-[8px] py-1 px-2 w-full `}
              />
            </div>
          ))}
        </div>
        <Button text={"Save"} />
      </div>
    </div>
  );
};

export default Settings;
