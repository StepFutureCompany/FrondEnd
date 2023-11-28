import React, { useState } from "react";
import Header from "../Header";
import InputText from "../InputText";
import Modal from "../Modal";
import api_client from "../../config/api_client";

export default function DadosDoFuncionarios() {
  const [form, setForm] = useState({});
  const [renderModal, setRenderModal] = useState(false);

  function handleTextChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    form.dt_nascimento = new Date(form.dt_nascimento);
    await api_client
    .post("/funcionario", form)
    .then((response) => {
      console.log("Sucesso", response);
      alert('Funcionario cadastrado com sucesso')
      e.target.reset();
      })
      .catch((e) => {
        alert('Erro ao cadastrar funcionario')
        console.error(e);
      });
  }

  return (
    <>
      <Modal
        title="Holerite"
        show={renderModal}
        close={setRenderModal}
        inputs
      />
      <section className="w-screen h-screen flex bg-blue-500 flex-col items-center text-3xl">
        <Header />
        <form className="w-[70%] h-full flex flex-col gap-3 justify-center items-center rounded-xl p-5 bg-white m-5" onSubmit={handleSubmit} >
          <h1 className="text-2xl font-semibold">Dados Do Funcionarios</h1>
          <article className="flex w-full gap-10 text-start">
            <aside className="w-full flex flex-col gap-2">
              <InputText
              required
              onChange={handleTextChange}
                title="Nome"
                name="nome"
              />
              <InputText
              required
              onChange={handleTextChange}
                title="Data de nascimento"
                name="dt_nascimento"
                type="date"
              />
              <InputText
              required
              onChange={handleTextChange}
                title="Cargo"
                name="cargo"
              />
            </aside>
            <aside className="w-full flex flex-col gap-2">
              <InputText
              required
              onChange={handleTextChange}
                title="CPF"
                name="cpf"
              />
              <InputText
              required
              onChange={handleTextChange}
                title="RG"
                name="rg"
              />
              <InputText
              required
              onChange={handleTextChange}
                title="Email"
                name="email"
              />
            </aside>
            <aside className="w-full flex flex-col gap-2">
            <InputText
              required
              onChange={handleTextChange}
                title="Salario Liquido"
                name="sl_liquido"
              />
            <InputText
              required
              onChange={handleTextChange}
                title="Salario base"
                name="sl_base"
              />
              <InputText
              required
              onChange={handleTextChange}
                title="Carteira de Trabalho"
                name="ct_de_trabalho"
              />
              <InputText
              required
              onChange={handleTextChange}
                title="PIS"
                name="pis"
              />
            </aside>
          </article>
          <h1 className="text-2xl font-semibold">Endereço</h1>
          <article className="flex w-full gap-10 text-start">
            <aside className="w-full flex flex-col gap-2">
              <InputText
              required
              onChange={handleTextChange}
                title="Rua"
                name="endereço"
              />
              <InputText
              required
              onChange={handleTextChange}
                title="Bairro"
                name="bairro"
              />
              <InputText
              required
              onChange={handleTextChange}
                title="Cidade"
                name="cidade"
              />
            </aside>
            <aside className="w-full flex flex-col gap-2">
              <InputText
              required
              onChange={handleTextChange}
                title="Numero"
                name="numero"
              />
              <InputText
              required
              onChange={handleTextChange}
                title="CEP"
                name="cep"
              />
              <InputText
              required
              onChange={handleTextChange}
                title="Celular"
                name="celular"
              />
            </aside>
          </article>
          <input type="submit" className="text-lg w-[400px] h-10 rounded-xl bg-blue-500 text-white" value="Salvar" />
        </form>
      </section>
    </>
  );
}
