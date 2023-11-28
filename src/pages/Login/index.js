import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import logo from "../../assets/logo.png";
import api_client from "../../config/api_client";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/admin");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const {data} = await api_client.post('/login', form)
     localStorage.setItem('token', data.access_token)
      navigate('/admin')
    } catch (error) {
      alert('Erro ao realizar login')
      console.error(error)
    }
  }

  return (
    <div className="w-screen h-screen bg-blue-500 items-center flex flex-col">
      <div className="w-full flex justify-center items-start">
        <img src={logo} alt="logo" width={500} />
      </div>
      <main className="w-[70vh] h-[40vh] bg-gray-200 rounded-xl shadow-md shadow-black p-10 flex flex-col mt-24 gap-5 ">
        <h1 className="text-3xl font-semibold">Login</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full h-10 rounded-lg pl-2"
            placeholder="Informe seu Email"
            onChange={handleTextChange}
            name="email"
          />
          <span className="flex w-full h-10 bg-white items-center justify-center rounded-lg px-2">
            <input
              type="password"
              className="w-full"
              name="password"
              onChange={handleTextChange}
              placeholder="Digite sua senha"
            />
            <AiFillEye size={25} />
          </span>
          <input
            type="submit"
className="w-full text-center p-2 text-lg rounded-xl text-white bg-blue-600"
value={"Acessar"}
 /         >
        </form>
      </main>
    </div>
  );
}
