import { ItemProduct } from "./ItemProduc";

export const ListProduct = ({ data }) => {
  return !data.error ? (
    <div className="flex flex-col gap-8 mt-6">
      <div className="grid grid-cols-12 h-[40px] text-gray-400 bg-gray-200">
        <div className="flex col-span-5 ml-5 gap-4 items-center"><b>Produto</b></div>
        <div id="promocao" className="flex ml-3 col-span-4 items-center">
          <b>Promocão</b>
        </div>
        <div id="price" className="flex  col-span-1 items-center">
        <b>Preço</b>
        </div>
        <div className="flex gap-4 col-span-2 items-center">Ação</div>
      </div>
      {data.records?.map((record) => (
        <ItemProduct record={record} key={record._id} />
      ))}
    </div>
  ) : (
    <div>occorreu um erro ao fazer a requisição</div>
  );
};
