import React from "react";
import { AiFillEye } from "react-icons/ai";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="w-screen h-screen bg-blue-500 items-center flex flex-col">
      <div className="w-full flex justify-center items-start">
        <img src={logo} alt="logo" width={500} />
      </div>
      <main className="w-[70vh] h-[40vh] bg-gray-200 rounded-xl shadow-md shadow-black p-10 flex flex-col mt-24 gap-5 ">
        <h1 className="text-3xl font-semibold">Login</h1>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            className="w-full h-10 rounded-lg pl-2"
            placeholder="Informe seu RA"
          />
          <span className="flex w-full h-10 bg-white items-center justify-center rounded-lg px-2">
            <input
              type="text"
              className="w-full"
              placeholder="Digite sua senha"
            />
            <AiFillEye size={25} />
          </span>
          <Link
            to="/funcionarios"
            className="w-full text-center p-2 text-lg rounded-xl text-white bg-blue-600"
          >
            Acessar
          </Link>
        </div>
      </main>
    </div>
  );
}
