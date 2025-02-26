
import { ButtonBox } from "@/components/Atoms/Button";
import { InputToggle } from "@/components/Atoms/Input";
import { IconDelete } from "@/icons/Delete";

import { IconEdit } from "@/icons/Edit";
import { formatCurrency } from "@/utils/currency";

import Link from "next/link";
import { useState } from "react";

export const ItemPromotion = ({ record }) => {
  const [isActive, setIsActive] = useState(false)
  return (
      <div className="grid grid-cols-12 ml-4">
        <div className="flex col-span-5 gap-4 items-center">
          <div>
            <div>
              <b>{record.name}</b>
            </div>
            <div>
              <span className="text-gray-400">Quantidade:</span> {record.quantity}
            </div>
            <div>
              <span className="text-gray-400">Verificação:</span> {record.variation.name}
            </div>
          </div>
        </div>
        <div id="desconto" className="flex col-span-4 items-center">
          <div>
            {formatCurrency(record.value)}
          </div>
        </div>
        <div id="validacao" className="flex col-span-1 items-center">
          <div>
            {record.valid ? record.valid : ' Não adicionado'}
          </div>
        </div>
        <div className="flex gap-4 col-span-2 items-center justify-end pr-4">
        <Link href={`/promocao/cadastrar?id=${record._id}`}>
            <ButtonBox style="bg-blue-500 hover:bg-blue-400 text-white">
              <IconEdit size="w-6 h-6" />
            </ButtonBox>
          </Link>
          <a>
            <ButtonBox style="bg-red-500  hover:bg-red-400 text-white">
              <IconDelete  size="w-6 h-6" />
            </ButtonBox>
          </a>
          <InputToggle setIsActive={setIsActive} isActive={isActive}/>
        </div>
      </div>
  );
};
