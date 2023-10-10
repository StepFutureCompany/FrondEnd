import React, { useState } from "react";
import InputText from "../../components/InputText";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";

export default function EmployeeData() {
  const [renderModal, setRenderModal] = useState(false);
  
  return (
    <>
      <Modal title="Folha de Pagamento" show={renderModal} close={setRenderModal}/>
      <section className="w-screen h-screen flex bg-blue-500 flex-col items-center gap-10 text-3xl">
        <div className="w-full flex bg-blue-500 justify-between items-start p-1">
          <Link
            to="/"
            className="w-[100px] h-10 flex justify-center items-center bg-blue-700 text-xl rounded-lg text-white"
          >
            Sair
          </Link>
          <img src={logo} alt="logo" width={300} />
          <span />
        </div>
        <div className="w-[70%] h-fit flex flex-col justify-center items-center rounded-xl p-5 bg-gray-200">
          <h1 className="text-3xl font-semibold">Dados Do Funcionarios</h1>
          <article className="flex w-full h-fit p-10 gap-10 text-start">
            <aside className="w-full flex flex-col gap-2">
              <InputText title="Nome" />
              <InputText title="RA" />
              <InputText title="RG" />
              <InputText title="CPF" />
              <InputText title="Data de Nascimento" />
            </aside>
            <aside className="w-full flex flex-col gap-2">
              <InputText title="Salario Liquido" />
              <InputText title="Salario Base" />
              <InputText title="Carteira de Trabalho" />
              <InputText title="INSS" />
              <InputText title="Cargo" />
            </aside>
          </article>
          <button
            className="text-lg w-[400px] h-10 rounded-xl bg-blue-500 text-white"
            onClick={() => setRenderModal(true)}
          >
            Gerar Folha de pagamento
          </button>
        </div>
      </section>
    </>
  );
}
