import { formatCurrency } from "@/utils/currency";
import { useState } from "react";

export const Label = ({ title, children }) => {
  return (
    <div className="rounded-md border-[1px] bg-gray-100 w-full relative">
      <div className="absolute top-0 left-2 mt-[-8px]  text-gray-400 border-[1px] bg-white rounded-md leading-none px-2 text-[12px]">
        {title}
      </div>
      {children}
    </div>
  );
};

export const Input = ({ title ,value , setValue, placeholder="" }) => {
  const handleInput = (e) => {
    const value = e.target.value
    setValue(value)

  }
  return (
    <Label title={title}>
      <input 
      onChange={handleInput}
      className="rounded-md h-[40px] pl-2 w-full"
      autoComplete="off"
      value={value}
      placeholder={placeholder}
      />
    </Label>
  );
};

export const InputNumeral = ({ title, value, setValue }) => {
  return (
    <Label title={title}>
      <input
        autoComplete="off"
        placeholder="R$ 0,00"
        className="rounded-md h-[40px] pl-2 w-full"
        onChange={(e) => {
          const formatted = formatCurrency(e.target.value);
          setValue(formatted);
        }}
        value={value}
      />
    </Label>
  );
};

export const Select = ({ title, selectOptions = [], value, setValue }) => {
  const handleSetOptions = (e) => {
    const value = selectOptions.find(option => option.id =  e.target.value)
    setValue(value)
  }
  return (
    <Label title={title}>
      <select className="rounded-md h-[40px] pl-2 w-full" onChange={handleSetOptions}>
        <option title={value.name} value={value.id}>{value.name}</option>
        {selectOptions.map(option => value.id !== option.id ? <option title={option.name} key={option.id} value={option.id}>{option.name}</option> : null)}
      </select>
    </Label>
  );
};

export const Textarea = ({ title }) => {
  return (
    <div className="rounded-md border-[1px] bg-gray-100 w-full h-[150px] relative">
      <div className="absolute top-0 left-2 mt-[-7px] text-gray-400 bg-white px-2 text-[12px] border-[1px] rounded-md leading-none">
        {title}
      </div>
      <textarea className="rounded-md w-full h-[148px] p-2"></textarea>
    </div>
  );
};

export const InputToggle = ({ title, setIsActive, isActive }) => {
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <label>
      <button
        onClick={handleToggle}
        className={`w-12 h-6 flex items-center rounded-full transition-all 
          ${isActive ? 'bg-blue-500' : 'bg-gray-300'}`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all 
            ${isActive ? 'translate-x-6 ml-[1px]' : 'translate-x-0 ml-[4px]'}`}
        ></div>
      </button>
    </label>
  );
};
