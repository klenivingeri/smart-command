"use client";
const IconDefault = () => null

export const TitleWithIcon = ({ size, title = 'Novo Conteudo', children = IconDefault }) => {
  return (
    <div className="flex items-center my-4 ">
      <span className="p-2 rounded-md text-purple-500 bg-gray-100">
      {children}
      </span>
      <p className={`${size} text-black font-medium ml-4`}>{title}</p>
    </div>
  );
};