import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Login from "../pages/Login";
import EmployeeData from "../pages/EmployeeData";
import EmployeeAdmin from "../pages/Admins/EmployedAdmin";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/funcionarios" element={<EmployeeData />} />
        <Route path="/admin" element={<EmployeeAdmin />} />
      </Routes>
    </Router>
  );
}
