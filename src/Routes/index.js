import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

//components
import Login from "../pages/Login";
import EmployeeData from "../pages/EmployeeData";
import EmployeeAdmin from "../pages/Admins/EmployedAdmin";
import DadosDoFuncionarios from "../components/DadosDoFuncionarios";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/funcionarios" element={<EmployeeData />} />
        <Route path="/admin" element={<EmployeeAdmin />} />
        <Route path="/dados_do_funcionarios" element={<DadosDoFuncionarios />} />
      </Routes>
    </Router>
  );
}
