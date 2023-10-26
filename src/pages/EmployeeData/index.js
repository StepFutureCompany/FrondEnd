import React, { useState } from "react";
import InputText from "../../components/InputText";
import Modal from "../../components/Modal";
import Header from "../../components/Header";

export default function EmployeeData() {
  const [renderModal, setRenderModal] = useState(false);
  
  return (
    <>
      <Modal title="Folha de Pagamento" show={renderModal} close={setRenderModal} optionsProps/>
      <section className="w-screen h-screen flex bg-blue-500 flex-col items-center gap-10 text-3xl">
        <Header />
        <div className="w-[70%] h-fit flex flex-col justify-center items-center rounded-xl p-5 bg-white">
          <h1 className="text-3xl font-semibold">Dados Do Funcionarios</h1>
          <article className="flex w-full h-fit p-10 gap-10 text-start">
            <aside className="w-full flex flex-col gap-2">
              <InputText title="Nome" disabled />
              <InputText title="RA" disabled />
              <InputText title="RG" disabled />
              <InputText title="CPF" disabled />
              <InputText title="Telefone" disabled />
            </aside>
            <aside className="w-full flex flex-col gap-2">
              <InputText title="Salario" disabled />
              <InputText title="Pagamento" disabled />
              <InputText title="Vale" disabled />
              <InputText title="Desconto" disabled />
              <InputText title="Total" disabled />
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
