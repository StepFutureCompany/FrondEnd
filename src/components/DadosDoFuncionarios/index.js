import React, { useEffect, useState } from "react";
import Header from "../Header";
import InputText from "../InputText";
import Modal from "../Modal";
import api_client from "../../config/api_client";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function DadosDoFuncionarios() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [form, setForm] = useState({});
  const [renderModal, setRenderModal] = useState(false);

  function handleTextChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const isEdit = params.get("ra");
    const url = isEdit ? `/funcionario/${params.get("ra")}` : "/funcionario";
    const method = isEdit ? "put" : "post";
    form.dt_nascimento = new Date(form.dt_nascimento);
    await api_client
    [method](url, form)
    .then((response) => {
      console.log("Sucesso", response);
      alert(`Funcionario ${
        isEdit ? "editado" : "cadastrado"
      } com sucesso`)
      !isEdit && e.target.reset();
      navigate("/admin");
      })
      .catch((e) => {
        alert('Erro ao cadastrar funcionario')
        console.error(e);
      });
  }

  useEffect(() => {
    const ra = params.get("ra");
    if (ra) {
      (async () => {
        const { data } = await api_client.get(`/funcionario/${ra}`);
        setForm(data);
        Object.keys(data).forEach((key) => {
          const input = document.querySelector(`input[name=${key}]`);
          if (input) {
            input.value = data[key];
          }
        })
      })();
    }
  }, [params]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
  } ,[])

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
