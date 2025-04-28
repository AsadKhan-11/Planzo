import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}></Route>
        <Route path="/settings" element={<Layout></Layout>}></Route>
        <Route path="/my-boards" element={<Layout></Layout>}></Route>
      </Routes>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
