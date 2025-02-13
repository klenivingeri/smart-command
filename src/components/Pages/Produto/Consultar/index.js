"use client";

import { ButtonBox } from "@/components/Atoms/Button";
import { Input } from "@/components/Atoms/Input";
import { TitleWithIcon } from "@/components/Molecules/TitleWithIcon";
import { TemplateWithMenu } from "@/components/Templates/TemplateWithMenu";
import { IconSearchCircle, IconSearchGlass } from "@/icons/Search";
import { useState } from "react";
import { getApiProducts } from "@/getApi/products";
import { ListProduct } from "@/components/Organisms/ListProduc";

export const Consultar = ({ path, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [data, setData] =useState({})

  const handlebuttonSearch = async () => {
    setIsLoading(true);
    const response = await getApiProducts(`title=${inputSearch}`);

    setData({...response})
    setIsLoading(false);
  };

  return (
    <TemplateWithMenu path={path}>
      <div className="border-gray-100 rounded-md shadow-md h-36 border-2 pl-6 flex ">
        <TitleWithIcon size="text-3xl" title={title}>
          <IconSearchCircle size="w-14 h-14" />
        </TitleWithIcon>
      </div>
      <span className="flex border-[1px] mt-4 mb-6 border-b-gray-100" />
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
      {!isLoading ?
        <ListProduct data={data} />
        : <div>carregando</div>}
    </TemplateWithMenu>
  );
};
