"use client";

import { ButtonBox } from "@/components/Atoms/Button";
import { Input } from "@/components/Atoms/Input";
import { IconSearchGlass } from "@/icons/Search";
import { useState } from "react";
import { getApiPromotions } from "@/getApi/promotions";
import { LoadingSpinner } from "@/components/Atoms/LoadingSpinner";
import { ListPromotions } from "@/components/Organisms/ListPromotions";

export const Consultar = ({ path, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [data, setData] =useState({})

  const handlebuttonSearch = async () => {
    if(!inputSearch.trim()) return;

    setIsLoading(true);
    const response = await getApiPromotions(`name=${inputSearch}`);

    setData({...response})
    setIsLoading(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handlebuttonSearch();
    }
  };

  return (
    <div >
      <span className="flex border-[1px] mt-4 mb-6 border-b-gray-100" />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-11">
          <Input
            title="Digite o nome da promoção"
            setValue={setInputSearch}
            value={inputSearch}
            handleKeyDown={handleKeyDown}
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
        <ListPromotions data={data} />
        : <div className="mt-20"><LoadingSpinner /></div>}
    </div>
  );
};
