import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import SuperAdminDashboard from "./Components/SuperAdminDashboard";
import ServicesDashboard from "./Components/ServicesDashboard/ServicesDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/superadmin/*" element={<SuperAdminDashboard />} />
      <Route path="/services/*" element={<ServicesDashboard />} />
    </Routes>
  );
}

export default App;
