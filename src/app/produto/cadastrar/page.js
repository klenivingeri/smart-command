"use client";
import { Cadastrar } from "@/components/Pages/Produto/Cadastrar";
import { TemplateWithMenu } from "@/components/Templates/TemplateWithMenu";
import { getApiProducts } from "@/getApi/products";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IconCube } from "@/icons/Cube";
import { TitleWithIcon } from "@/components/Molecules/TitleWithIcon";
import { LoadingSpinner } from "@/components/Atoms/LoadingSpinner";

export default function ProdutoCadastrar() {
  const [ProductID, setProductID] = useState(null);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(!ProductID ? false : true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get("id");
      setProductID(id);
    }
  }, []);

  useEffect(() => {
    if (!ProductID) {
      setIsLoading(false);
      return;
    }

    const get = async () => {
      setIsLoading(true)
      const data = await getApiProducts(`id=${ProductID}`);
      setProduct(data);
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
          !product?.error ? (
            <Cadastrar product={product?.records} />
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
