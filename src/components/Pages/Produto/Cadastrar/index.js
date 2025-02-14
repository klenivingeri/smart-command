"use client";

import {
  Input,
  InputNumeral,
  Select,
  Textarea,
} from "@/components/Atoms/Input";

import { useEffect, useState } from "react";
import { ButtonBox } from "@/components/Atoms/Button";
import { formatCurrency } from "@/utils/currency";

const selectOptions = [
  { id: 1, name: "Frito" },
  { id: 2, name: "Assado" },
  { id: 3, name: "Suco" },
  { id: 4, name: "Refri" },
  { id: 5, name: "Vitámina" },
];

const selectOptions2 = [
  { id: 1, name: "Suco + Assado + Frito" },
  { id: 2, name: "3(três) assados por R$ 15,00" },
  { id: 3, name: "3 Fritos por R$:13,00" },
];

const alertTest = () => {
  alert(
    "Aqui você vai pode criar uma nova categoria de item se ele ainda não exister "
  );
};

export const Cadastrar = ({ product = [], selectPromotions, selectTypes }) => {
  const [name, setName] = useState(product[0]?.name || "");
  const [price, setPrice] = useState(formatCurrency(product[0]?.price) || "");
  const [description, setDescription] = useState(product[0]?.description || "");
  const [code, setCode] = useState(product[0]?.code || "");
  const [type, setType] = useState(
    product[0]?.type
      ? { _id: product[0]?.type, name: product[0]?.type }
      : {
          _id: "Nenhum tipo selecionado",
          name: "Nenhum tipo selecionado",
        }
  );
  const [promotion, setPromotion] = useState(
    product[0]?.promotion._id
      ? { _id: product[0]?.promotion._id, name: product[0]?.promotion.name }
      : {
          _id: 10,
          name: "Nenhuma promoção selecionada",
        }
  );

  useEffect(() => {
    if (product && product.length > 0) {
      setName(product[0]?.name || "");
      setPrice(product[0]?.price || "");
      setType({id:product[0]?.type, name:product[0]?.type} || "");
      setPromotion({id:product[0]?.promotion._id, name:product[0]?.promotion.name} || "");
      setDescription(product[0]?.description || "")
      setCode(product[0]?.code || "")
    }
  }, [product]);

  return (
    <div>
      <span className="flex border-[1px] my-4 border-b-gray-100" />
      <div className="flex flex-col gap-4 w-[50%]">
        <Input title="Nome do Produto" setValue={setName} value={name} />
        <div className="flex items-center gap-4">
          <InputNumeral title="Preço" setValue={setPrice} value={price} />
          <Input title="Código" setValue={setCode} value={code} />
        </div>

        <div className="flex items-center gap-4">
          <Select
            title="Selecione o tipo"
            selectOptions={selectTypes}
            value={type}
            setValue={setType}
          />
          <a onClick={alertTest}>
            <ButtonBox style="bg-purple-500 hover:bg-purple-400 text-white text-1lx">
              +
            </ButtonBox>
          </a>
        </div>
        <Select
          title="Promoção"
          selectOptions={selectPromotions}
          value={promotion}
          setValue={setPromotion}
        />
        <Textarea
          title="Descrição"
          value={description}
          setValue={setDescription}
        />
        <a onClick={alertTest}>
          <ButtonBox style="bg-purple-500 hover:bg-purple-400 text-white text-1lx">
            Cadastrar Produto
          </ButtonBox>
        </a>
      </div>
    </div>
  );
};
