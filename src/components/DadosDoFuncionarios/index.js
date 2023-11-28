import React, { useState } from "react";
import Header from "../Header";
import InputText from "../InputText";
import Modal from "../Modal";
import api_client from "../../config/api_client";

export default function DadosDoFuncionarios() {
  const [renderModal, setRenderModal] = useState(false);
  const [stateBairro, setStateBairro] = useState('');
  const [stateCargo, setStateCargo] = useState('');
  const [stateCelular, setStateCelular] = useState('');
  const [stateCep, setStateCep] = useState('');
  const [stateCidade, setStateCidade] = useState('');
  const [stateRua, setStateRua] = useState('');
  const [stateNumeroCasa, setStateNumeroCasa] = useState('');
  const [stateCpf, setStateCpf] = useState('');
  const [stateRg, setStateRg] = useState('');
  const [stateCtTrabalho, setStateCtTrabalho] = useState('');
  const [statePis, setStatePis] = useState('');
  const [stateNascimento, setStateNascimento] = useState('');
  const [stateEmail, setStateEmail] = useState('');
  const [stateSalarioLiquido, setStateSalarioLiquido] = useState('');
  const [stateRa, setStateRa] = useState('');

  function handleSubmit() {
    api_client
      .post("/funcionario", {
        ra: stateRa,
        cpf: stateCpf,
        salarioLiquido: stateSalarioLiquido,
        dtNascimento: stateNascimento,
        rg: stateRg,
        ctTrabalho: stateCtTrabalho,
        cargo: stateCargo,
        email: stateEmail,
        pis: statePis,
        rua: stateRua,
        numero: stateNumeroCasa,
        bairro: stateBairro,
        cep: stateCep,
        cidade: stateCidade,
        celular: stateCelular,
      })
      .then((response) => {
        console.log("Sucesso", response);
      })
      .catch((e) => {
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
        <div className="w-[70%] h-full flex flex-col gap-3 justify-center items-center rounded-xl p-5 bg-white m-5">
          <h1 className="text-2xl font-semibold">Dados Do Funcionarios</h1>
          <article className="flex w-full gap-10 text-start">
            <aside className="w-full flex flex-col gap-2">
              <InputText
                title="RA"
                value={stateRa}
                onChange={(e) => setStateRa(e.target.value)}
              />
              <InputText
                title="Data de nascimento"
                value={stateNascimento}
                onChange={(e) => setStateNascimento(e.target.value)}
              />
              <InputText
                title="Cargo"
                value={stateCargo}
                onChange={(e) => setStateCargo(e.target.value)}
              />
            </aside>
            <aside className="w-full flex flex-col gap-2">
              <InputText
                title="CPF"
                value={stateCpf}
                onChange={(e) => setStateCpf(e.target.value)}
              />
              <InputText
                title="RG"
                value={stateRg}
                onChange={(e) => setStateRg(e.target.value)}
              />
              <InputText
                title="Email"
                value={stateEmail}
                onChange={(e) => setStateEmail(e.target.value)}
              />
            </aside>
            <aside className="w-full flex flex-col gap-2">
              <InputText
                title="Salario Liquido"
                value={stateSalarioLiquido}
                onChange={(e) => setStateSalarioLiquido(e.target.value)}
              />

              <InputText
                title="Carteira de Trabalho"
                value={stateCtTrabalho}
                onChange={(e) => setStateCtTrabalho(e.target.value)}
              />
              <InputText
                title="PIS"
                value={statePis}
                onChange={(e) => setStatePis(e.target.value)}
              />
            </aside>
          </article>
          <h1 className="text-2xl font-semibold">Endereço</h1>
          <article className="flex w-full gap-10 text-start">
            <aside className="w-full flex flex-col gap-2">
              <InputText
                title="Rua"
                value={stateRua}
                onChange={(e) => setStateRua(e.target.value)}
              />
              <InputText
                title="Bairro"
                value={stateBairro}
                onChange={(e) => setStateBairro(e.target.value)}
              />
              <InputText
                title="Cidade"
                value={stateCidade}
                onChange={(e) => setStateCidade(e.target.value)}
              />
            </aside>
            <aside className="w-full flex flex-col gap-2">
              <InputText
                title="Numero"
                value={stateNumeroCasa}
                onChange={(e) => setStateNumeroCasa(e.target.value)}
              />
              <InputText
                title="CEP"
                value={stateCep}
                onChange={(e) => setStateCep(e.target.value)}
              />
              <InputText
                title="Celular"
                value={stateCelular}
                onChange={(e) => setStateCelular(e.target.value)}
              />
            </aside>
          </article>
          <button
            className="text-lg w-[400px] h-10 rounded-xl bg-blue-500 text-white"
            onClick={() => handleSubmit()}
          >
            Salvar
          </button>
        </div>
      </section>
    </>
  );
}
