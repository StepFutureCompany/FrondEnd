import React from "react";
import Header from "../../../components/Header";
import { TableAdmin } from "../../../mock/TableAdmin";

export default function EmployeeAdmin() {
  return (
    <div className="w-screen h-screen bg-blue-500 items-center flex flex-col">
      <Header />
      <table className="w-[80%] h-[60%] m-20 bg-gray-200 flex flex-col overflow-auto rounded-xl ">
        <thead className="w-full flex justify-around p-3 border-b-2 border-black text-lg sticky top-0 bg-white">
          <th>RA</th>
          <th>Name</th>
          <th>Cargo</th>
          <th>#</th>
        </thead>
        {TableAdmin.map((e, i) => (
          <tbody key="i" className="w-full flex justify-around p-2 border-b cursor-pointer border-black">
            <tr className="w-full flex justify-start">{e.ra}</tr>
            <tr className="w-full flex justify-start">{e.name}</tr>
            <tr className="w-full flex justify-start">{e.cargo}</tr>
            <tr className="w-full flex justify-start">Editar</tr>
          </tbody>
        ))}
      </table>
      </div>
  );
}
