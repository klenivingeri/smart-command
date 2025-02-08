import { formatCurrency } from "@/utils/currency";

export const Input = ({ title }) => {
  return (
    <div className="rounded-md border-[1px] bg-gray-100 w-[300px] relative">
      <div className="absolute top-0 left-2 mt-[-9px] text-gray-400 bg-white px-2 text-[12px]">
        {title}
      </div>
      <input className="rounded-md h-[40px] pl-4 w-[298px]" />
    </div>
  );
};

export const InputNumeral = ({ title, value, setValue }) => {
  return (
    <div className="rounded-md border-[1px] bg-gray-100 w-[300px] relative">
      <div className="absolute top-0 left-2 mt-[-9px] text-gray-400 bg-white px-2 text-[12px]">
        {title}
      </div>
      <input
        placeholder="R$ 0,00"
        className="rounded-md h-[40px] pl-4 w-[298px]"
        onChange={(e) => {
          const formatted = formatCurrency(e.target.value);
          setValue(formatted);
        }}
        value={value}
      />
    </div>
  );
};

export const Select = ({ title }) => {
  return (
    <div className="rounded-md border-[1px] bg-gray-100 w-[300px] relative">
      <div className="absolute top-0 left-2 mt-[-9px] text-gray-400 bg-white px-2 text-[12px]">
        {title}
      </div>
      <select className="rounded-md h-[40px] pl-4 w-[298px]">
        <option></option>
        <option>teste</option>
        <option>teste</option>
        <option>teste</option>
      </select>
    </div>
  );
};

export const Textarea = ({ title }) => {
  return (
    <div className="rounded-md border-[1px] bg-gray-100 w-[300px] h-[150px] relative">
      <div className="absolute top-0 left-2 mt-[-9px] text-gray-400 bg-white px-2 text-[12px]">
        {title}
      </div>
      <textarea className="rounded-md w-[298px] h-[148px] p-4"></textarea>
    </div>
  );
};
