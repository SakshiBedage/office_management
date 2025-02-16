import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import SuperAdminDashboard from "./Components/SuperAdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/superadmin/*" element={<SuperAdminDashboard />} />
    </Routes>
  );
}

export default App;
