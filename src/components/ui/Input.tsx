import React from "react";

type input = {
  name: string;
  id: string;
  type: string;
  placeholder: string;
};
function Input({ name, id, type, placeholder }: input) {
  return (
    <React.Fragment>
      <label className="hidden" htmlFor={id}>{name}</label>
      <input className="w-full placeholder:text-foreground placeholder:text-base shadow-sm border-[0.5px] outline-none border-[#121212] py-3 px-8 " type={type} id={id} placeholder={placeholder} />
    </React.Fragment>
  );
}

export default Input;
