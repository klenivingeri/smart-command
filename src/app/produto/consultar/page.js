'use client'

import { Consultar } from "@/components/Pages/Produto/Consultar";

export default function ProdutoConsultar() {
    return (
      <div className="h-full">
        <Consultar 
          path="consultar-produtos"
          title="Consultar de Produtos"
          />
      </div>
    );
}