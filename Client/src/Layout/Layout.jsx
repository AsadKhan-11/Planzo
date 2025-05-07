import React from "react";
import Nav from "../Components/Nav/Nav";
import Sidebar from "../Components/Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen  ">
      <Nav />
      <div className="flex flex-1 ">
        <Sidebar />
        <main className="flex-1 overflow-x-auto  ">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
