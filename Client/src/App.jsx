import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Sidebar from "./Components/Sidebar/Sidebar";
import Layout from "./Layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Layout />
    </div>
  );
}

export default App;
