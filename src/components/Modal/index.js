import React, { useState } from "react";

//styles
import { IoCloseSharp } from "react-icons/io5";
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi";

// components
import InputText from "../InputText";

export default function Modal({
  close,
  title = "",
  content,
  show,
  optionsProps,
  inputs,
}) {
  const [marker, setMarker] = useState("");
  const options = [
    { label: "Janeiro", value: 1 },
    { label: "Feveriro", value: 2 },
    { label: "Março", value: 3 },
    { label: "Abril", value: 4 },
    { label: "Maio", value: 5 },
    { label: "Junho", value: 6 },
    { label: "Julho", value: 7 },
    { label: "Agosto", value: 8 },
    { label: "Setembro", value: 9 },
    { label: "Outubro", value: 10 },
    { label: "Novembro", value: 11 },
    { label: "Dezembro", value: 12 },
  ];
  return !show ? null : (
    <div className="flex w-screen h-screen z-50 overflow-hidden items-center justify-center absolute">
      <div
        onClick={() => close()}
        className="flex w-full h-full bg-black opacity-60 fixed animate-backdrop"
      />
      <div className="overflow-hidden animate-fade-in bg-white rounded-md relative p-4 w-[750px]">
        <header className="flex justify-between border-b pb-4">
          <p className="text-2xl font-semibold">{title}</p>
          <button
            onClick={close}
            className="flex items-center justify-center bg-[#eee] hover:opacity-80 duration-200  rounded-lg"
          >
            <IoCloseSharp size={32} />
          </button>
        </header>
        {optionsProps && (
          <div className="flex flex-col h-fit max-h-[70vh] scrollbar-hide overflow-scroll pt-4 bg-white">
            {options.map((option, index) => (
              <label
                key={index}
                onChange={option.onChange}
                onClick={() => [
                  setMarker(option.value),
                  option?.onclick && option?.onclick(),
                ]}
                className="flex gap-2 cursor-pointer"
              >
                {marker === option.value ? (
                  <BiRadioCircleMarked size={24} color="#5B48FB" />
                ) : (
                  <BiRadioCircle size={24} />
                )}
                {option.label}
              </label>
            ))}
          </div>
        )}
        {inputs && (
          <article className="flex w-full gap-10 text-start">
            <aside className="w-full flex flex-col gap-2">
              <InputText title="Salario" />
              <InputText title="Salario Familia" />
            </aside>
            <aside className="w-full flex flex-col gap-2">
              <InputText title="INSS" />
              <InputText title="Faltas" />
            </aside>
            <aside className="w-full flex flex-col gap-2">
              <InputText title="FGTS" />
              <InputText title="Vale Transporte" />
            </aside>
          </article>
        )}
      </div>
    </div>
  );
}
