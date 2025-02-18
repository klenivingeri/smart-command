import { useState } from "react";
import { ButtonBox } from "@/components/Atoms/Button";
import { Input, InputToggle, ToggleSwitch } from "@/components/Atoms/Input";
import { IconEdit } from "@/icons/Edit";
import { formatCurrency } from "@/utils/currency";
import Image from "next/image";
import Link from "next/link";

export const ItemProduct = ({ record }) => {
  return (
      <div className="grid grid-cols-12 ml-4">
        <div className="flex col-span-5 gap-4 items-center">
          <Image
            height={75}
            width={75}
            className="rounded-md"
            alt="Imagem de moldura de foto vazia"
            src="/image/empty-image.webp"
          />
          <div>
            <div>
              <b>{record.name}</b>
            </div>
            <div>
              <span className="text-gray-400">Tipo:</span> {record.type.name}
            </div>
            <div>
              <span className="text-gray-400">Código:</span> {record.code}
            </div>
          </div>
        </div>
        <div id="promocao" className="flex col-span-4 items-center">
          <div>
            {record.promotion.name ? record.promotion.name : "Sem promoção"}
          </div>
        </div>
        <div id="price" className="flex col-span-1 items-center">
          <b>{formatCurrency(record.price)}</b>
        </div>
        <div className="flex gap-4 col-span-2 items-center justify-end pr-4">
        <Link href={`/produto/cadastrar?id=${record._id}`}>
            <ButtonBox style="bg-blue-500 hover:bg-blue-400 text-white">
              <IconEdit size="w-6 h-6" />
            </ButtonBox>
          </Link>
          <a>
            <ButtonBox style="bg-teal-500 hover:bg-teal-400 text-white">
              Ver detalhes
            </ButtonBox>
          </a>
        </div>
      </div>
  );
};
