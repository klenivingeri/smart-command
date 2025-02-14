"use client";
import { Cadastrar } from "@/components/Pages/Produto/Cadastrar";
import { TemplateWithMenu } from "@/components/Templates/TemplateWithMenu";
import { getApiProducts } from "@/getApi/products";
import { useEffect, useState } from "react";
import { IconCube } from "@/icons/Cube";
import { TitleWithIcon } from "@/components/Molecules/TitleWithIcon";
import { LoadingSpinner } from "@/components/Atoms/LoadingSpinner";
import { getApiPromotions } from "@/getApi/promotions";
import { getApiTypes } from "@/getApi/types";

export default function ProdutoCadastrar() {
  const [ProductID, setProductID] = useState(null);
  const [product, setProduct] = useState(null);
  const [dataPromotions, setDataPromotions] = useState(null);
  const [dataTypes, setDataTypes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get("id");
      setProductID(id);
    }
  }, []);

  useEffect(() => {
    const get = async () => {
      const getApi = [getApiPromotions(), getApiTypes()]

      if (ProductID?.length) {
        getApi.push(getApiProducts(`id=${ProductID}`))
        return;
      }

      const [dataPromotions, dataTypes, dataProduct] = await Promise.all(getApi)
      setProduct(dataProduct);
      setDataTypes(dataTypes)
      setDataPromotions(dataPromotions)

      setIsLoading(false);
      
    };
    get();
  }, [ProductID]);

  return (
    <div className="h-full">
      <TemplateWithMenu path="cadastrar-produto">
        <div className="border-gray-100 rounded-md shadow-md h-36 border-2 pl-6 flex ">
          <TitleWithIcon size="text-3xl" title="Cadastro de Produto">
            <IconCube size="w-14 h-14" />
          </TitleWithIcon>
        </div>
        {!isLoading ? (
          !product?.error && (dataPromotions?.records.length && dataTypes?.records.length) ? (
            <Cadastrar product={product?.records} selectPromotions={dataPromotions?.records} selectTypes={dataTypes?.records} />
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
