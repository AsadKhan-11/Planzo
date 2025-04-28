import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-hidden">
      <Nav />
      <Sidebar />
    </div>
  );
}

export default App;
