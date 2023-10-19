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
      >
        Sair
      </Link>
      <img src={logo} alt="logo" width={300} />
      <span className="w-[100px]" />
    </div>
  );
}
