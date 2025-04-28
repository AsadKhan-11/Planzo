import React from "react";
import Nav from "../Components/Nav/Nav";
import Sidebar from "../Components/Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex-1 flex flex-col">
      <Nav />
      <div className="flex h-screen w-full">
        <Sidebar />

        <main className="flex-1 overflow-y-auto ">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
