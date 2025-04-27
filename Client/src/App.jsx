import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-hidden">
      <Nav />
    </div>
  );
}

export default App;
