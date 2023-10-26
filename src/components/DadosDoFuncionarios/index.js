import React, { useState } from "react";
import Header from "../Header";
import InputText from "../InputText";
import Modal from "../Modal";

export default function DadosDoFuncionarios() {
  const [renderModal, setRenderModal] = useState(false);

  return (
    <>
      <Modal title="Holerite" show={renderModal} close={setRenderModal} inputs/>
      <section className="w-screen h-screen flex bg-blue-500 flex-col items-center text-3xl">
        <Header />
        <div className="w-[70%] h-full flex flex-col gap-3 justify-center items-center rounded-xl p-5 bg-white m-5">
          <h1 className="text-2xl font-semibold">Dados Do Funcionarios</h1>
          <article className="flex w-full gap-10 text-start">
            <aside className="w-full flex flex-col gap-2">
              <InputText title="RA" />
              <InputText title="Data de nascimento" />
              <InputText title="Cargo" />
            </aside>
            <aside className="w-full flex flex-col gap-2">
              <InputText title="CPF" />
              <InputText title="RG" />
              <InputText title="Email" />
            </aside>
            <aside className="w-full flex flex-col gap-2">
              <InputText title="Salario Liquido" />
              <InputText title="Carteira de Trabalho" />
              <InputText title="PIS" />
            </aside>
          </article>
          <h1 className="text-2xl font-semibold">Endereço</h1>
          <article className="flex w-full gap-10 text-start">
            <aside className="w-full flex flex-col gap-2">
              <InputText title="Rua" />
              <InputText title="Bairro" />
              <InputText title="Cidade" />
            </aside>
            <aside className="w-full flex flex-col gap-2">
              <InputText title="Numero" />
              <InputText title="CEP" />
              <InputText title="Celular" />
            </aside>
          </article>
          <button
            className="text-lg w-[400px] h-10 rounded-xl bg-blue-500 text-white"
            onClick={() => setRenderModal(true)}
          >
            Holerite
          </button>
        </div>
      </section>
    </>
  );
}
