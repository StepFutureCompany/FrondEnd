import React from "react";

//Link
import { Link } from "react-router-dom";

//assets
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="w-full flex bg-blue-500 justify-between items-center px-5">
      <Link
        to="/"
        className="w-[100px] h-10 flex justify-center items-center bg-blue-700 text-xl rounded-lg text-white"
        onClick={() => localStorage.removeItem("token")}
        >
        Sair
      </Link>
      <img src={logo} alt="logo" width={300} />
       <Link
        to="/dados_do_funcionarios"
        className="px-4 h-10 flex justify-center items-center bg-blue-700 text-xl rounded-lg text-white"
        >
        Cadastrar funcionario
      </Link>
    </div>
  );
}
