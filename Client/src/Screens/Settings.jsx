import React from "react";

const Settings = () => {
  const fields = [
    { label: "Email", type: "email" },
    { label: "Full Name", type: "text" },
    { label: "Current Password", type: "password" },
    { label: "New Password", type: "password" },
    { label: "Confirm New Password", type: "password" },
  ];

  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="w-60 p-4 bg-[#eef1f5] shadow-md h-auto rounded-[10px] flex flex-col gap-3 overflow-hidden">
        <h2 className="font-bold text-[22px] py-2">Profile Settings</h2>

        {fields.map((inputs, index) => (
          <div key={index} className="w-full text-[#111827]">
            <label htmlFor="" className="">
              {inputs.label}
            </label>
            <input
              type={inputs.type}
              className="border-2 border-gray-300 rounded-[8px] py-0.5 px-2 w-full focus:border-[#3F8CFF] outline-none"
            />
          </div>
        ))}
        <button>Save</button>
      </div>
    </div>
  );
};

export default Settings;
