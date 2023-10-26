import React from "react";

export default function InputText({ title, readOnly, classInput, className, classTitle, placeholder = '', value, onChange, type = 'text', disabled }) {

  return (
    <div className={` ${classTitle} flex flex-col w-full`}>
      <div className="text-sm font-bold">
        {title}
      </div>
      <div className={`${className} flex flex-row gap-2 justify-between gap-x-5 h-10`}>
        <input
          className={` ${classInput} text-sm flex flex-row w-full text-typography-main rounded-md border outline-none px-2`}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          readOnly={readOnly}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}