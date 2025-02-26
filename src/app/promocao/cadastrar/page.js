"use client";

import { Cadastrar } from "@/components/Pages/Promocao/Cadastrar";
import { TemplateWithMenu } from "@/components/Templates/TemplateWithMenu";
import { useEffect, useState } from "react";
import { IconCube } from "@/icons/Cube";
import { TitleWithIcon } from "@/components/Molecules/TitleWithIcon";
import { LoadingSpinner } from "@/components/Atoms/LoadingSpinner";
import { getApiPromotions } from "@/getApi/promotions";

export default function PromocaoCadastrar() {
  const [promotionID, setPromotionID] = useState(null);
  const [promotion, setPromotion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get("id");
      setPromotionID(id);
    }
  }, []);

  useEffect(() => {
    const get = async () => {
      if (promotionID?.length) {
      const dataPromotion = await getApiPromotions(`id=${promotionID}`)

      setPromotion(dataPromotion);
    }
      setIsLoading(false);
      
    };
    get();
    setIsLoading(false);
  }, [promotionID]);

  return (
    <div className="h-full">
      <TemplateWithMenu path="cadastrar-promocao">
        <div className="border-gray-100 rounded-md shadow-md h-36 border-2 pl-6 flex ">
          <TitleWithIcon size="text-3xl" title="Cadastro de Promoções">
            <IconCube size="w-14 h-14" />
          </TitleWithIcon>
        </div>
        {!isLoading ? (
          !promotion?.error  ? (
            <Cadastrar promotion={promotion?.records} />
          ) : (
            <div>Ocorreu algum erro ao carregar a pagina</div>
          )
        ) : (
          <div className="mt-20"><LoadingSpinner /></div>
        )}
      </TemplateWithMenu>
    </div>
  );
}
