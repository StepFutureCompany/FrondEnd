import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Login";
import { EmployeeData } from "../EmployeeData";

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
