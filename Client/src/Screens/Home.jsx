import React, { useState } from "react";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";

const Home = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="w-full h-screen bg-grad flex items-center justify-center ">
      <div className="relative w-[768px] max-w-full min-h-[480px] bg-white rounded-[30px] shadow-xl overflow-hidden">
        {/* Forms */}
        <div
          className={`absolute top-0 left-0 h-full w-[200%] flex transition-transform duration-700 ease-in-out ${
            isSignup ? "-translate-x-1/2" : "translate-x-0"
          }`}
        >
          <div className="w-1/2 flex items-center justify-start px-10">
            <Login />
          </div>
          <div className="w-1/2 flex items-center justify-end px-10">
            <Signup />
          </div>
        </div>

        {/* Toggle Panel */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-700 ease-in-out z-10 ${
            isSignup ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div
            className={`w-full h-full bg-grad-sec

             text-white flex flex-col items-center justify-center text-center p-8  ${
               isSignup ? "rounded-r-[150px] " : " rounded-l-[150px] "
             } transition-all ease-in-out duration-1000`}
          >
            {isSignup ? (
              <>
                <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
                <p className="mb-6">Already have an account?</p>
                <button
                  className="bg-transparent text-white border-2 border-white shadow-lg
                    px-10 py-2 rounded-[10px] font-semibold hover:bg-gray-100 hover:text-[#512da8] transition duration-300 ease-in-out cursor-pointer"
                  onClick={() => setIsSignup(false)}
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">Hello, Friend!</h2>
                <p className="mb-6">Don't have an account?</p>
                <button
                  className="bg-transparent text-white border-2 border-white shadow-lg
                px-10 py-2 rounded-[10px] font-semibold hover:bg-gray-100 hover:text-[#512da8] transition duration-300 ease-in-out cursor-pointer"
                  onClick={() => setIsSignup(true)}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
