import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout/Layout";
import Dashboard from "./Screens/Dashboard";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {/* <Route path="/settings" element={<Layout></Layout>}></Route>
        <Route path="/my-boards" element={<Layout></Layout>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
