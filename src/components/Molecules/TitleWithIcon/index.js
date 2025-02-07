const IconDefault = () => {" "}

export const TitleWithIcon = ({ size, title = 'Novo Conteudo', Icon = IconDefault }) => {
  return (
    <div className="flex items-center my-4 ">
      <span className="p-2 rounded-md text-purple-500 bg-gray-200">
        <Icon size="w-8 h-8" />
      </span>
      <p className={`${size} text-black font-medium ml-4`}>{title}</p>
    </div>
  );
};