import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import EmployeeData from "../pages/EmployeeData";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/funcionarios" element={<EmployeeData />} />
      </Routes>
    </Router>
  );
}
