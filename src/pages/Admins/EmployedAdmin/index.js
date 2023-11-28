import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import api_client from "../../../config/api_client";

export default function EmployeeAdmin() {
  const navigate = useNavigate()
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await api_client.get('/funcionarios')
      setEmployees(data)
    })()
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
  }, [])

  return (
    <div className="w-screen h-screen bg-blue-500 items-center flex flex-col">
      <Header />
      <table className="w-[80%] h-[60%] m-20 bg-gray-200 flex flex-col overflow-auto rounded-xl ">
        <thead className="w-full flex justify-around p-3 border-b-2 border-black text-lg sticky top-0 bg-white">
          <th>RA</th>
          <th>Name</th>
          <th>Cargo</th>
          <th></th>
        </thead>
        {employees.map((e, i) => (
          <tbody key={i} className="w-full flex justify-around p-2 border-b cursor-pointer border-black">
            <tr className="w-full flex justify-start">{e?.ra}</tr>
            <tr className="w-full flex justify-start">{e?.nome}</tr>
            <tr className="w-full flex justify-start">{e?.cargo}</tr>
            <Link to={`/dados_do_funcionarios?ra=${e?.ra}`} className="w-full flex justify-center text-blue-700">Editar</Link>
          </tbody>
        ))}
      </table>
      </div>
  );
}
