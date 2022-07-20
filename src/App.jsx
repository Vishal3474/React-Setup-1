import React from "react";
import Login from "./Login";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./MainLayout";
import Signup from "./Signup";
import Courses from "./Courses";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Courses" />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Courses" element={<Courses />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
