
"use client";
import { Cadastrar } from "@/components/Pages/Produto/Cadastrar";

export default function ProdutoCadastrar() {
  return (
    <div className="h-full">
      <Cadastrar
        path="cadastrar-produto"
        title="Cadastro de Produto"
      />
    </div>
  );
}
