"use client";

import { TitleWithIcon } from "@/components/Molecules/TitleWithIcon";
import { Consultar } from "@/components/Pages/Produto/Consultar";
import { TemplateWithMenu } from "@/components/Templates/TemplateWithMenu";
import { IconSearchCircle } from "@/icons/Search";

export default function ProdutoConsultar() {
  return (
    <div className="h-full">
      <TemplateWithMenu path="consultar-produtos">
        <div className="border-gray-100 rounded-md shadow-md h-36 border-2 pl-6 flex ">
          <TitleWithIcon size="text-3xl" title="Consultar de Produtos">
            <IconSearchCircle size="w-14 h-14" />
          </TitleWithIcon>
        </div>
        <Consultar path="consultar-produtos" title="Consultar de Produtos" />
      </TemplateWithMenu>
    </div>
  );
}
