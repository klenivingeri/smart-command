"use client";

import { ButtonBox } from "@/components/Atoms/Button";
import { Input, Select } from "@/components/Atoms/Input";
import { TitleWithIcon } from "@/components/Molecules/TitleWithIcon";
import { TemplateWithMenu } from "@/components/Templates/TemplateWithMenu";
import { IconSearchCircle, IconSearchGlass } from "@/icons/Search";
import { useState } from "react";
import { getApiProducts } from "@/getApi/products";
const selectOptions = [
  { id: "code", name: "Código" },
  { id: "name", name: "Nome" },
];

export const Consultar = ({ path, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [records, setRecords] =useState({})
  const handlebuttonSearch = async () => {
    setIsLoading(true);

    const data = await getApiProducts(`title=${inputSearch}`);
    setRecords(data.records)
    setIsLoading(false);
  };
  console.log(records)
  return (
    <TemplateWithMenu path={path}>
      <div className="border-gray-100 rounded-md shadow-md h-36 border-2 pl-6 flex ">
        <TitleWithIcon size="text-3xl" title={title}>
          <IconSearchCircle size="w-14 h-14" />
        </TitleWithIcon>
      </div>
      <span className="flex border-[1px] my-4 border-b-gray-100" />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-11">
          <Input
            title="Digite o nome ou o código do produto"
            setValue={setInputSearch}
            value={inputSearch}
            placeholder="Digite aqui..."
          />
        </div>
        <div className="col-span-1">
          <a onClick={() => handlebuttonSearch()}>
            <ButtonBox style="bg-purple-500 hover:bg-purple-400 text-white text-1lx">
              <IconSearchGlass size="w-6 h-6" />
            </ButtonBox>
          </a>
        </div>
      </div>
      {!isLoading ? <div>lista</div> : <div>carregando</div>}
    </TemplateWithMenu>
  );
};
