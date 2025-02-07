import { Cadastrar } from "@/components/Pages/Produto/Cadastrar";
import { IconCube } from "@/icons/Cube";

export default function ProdutoCadastrar() {
    return (
      <div className="h-full">
        <Cadastrar path="cadastrar-produto" title="Cadastrar novo Produto" Icon={IconCube} />
      </div>
    );
}