"use client";

import {
  Input,
  InputNumeral,
  Select,
  Textarea,
} from "@/components/Atoms/Input";
import { TemplateWithMenu } from "@/components/Templates/TemplateWithMenu";
import { useState } from "react";
import { IconCube } from "@/icons/Cube";
import { TitleWithIcon } from "@/components/Molecules/TitleWithIcon";
import { ButtonBox } from "@/components/Atoms/Button";

const selectOptions = [
  { id: 1, name: "Frito" },
  { id: 2, name: "Assado" },
  { id: 3, name: "Suco" },
  { id: 4, name: "Refri" },
  { id: 5, name: "Vitámina" },
];
const selectOptions2 = [
  { id: 1, name: "Suco + Assado" },
  { id: 2, name: "3(três) assados por R$ 15,00" },
  { id: 3, name: "3 Fritos por R$:13,00" },
];

const alertTest = () => {
  alert('Aqui você vai pode criar uma nova categoria de item se ele ainda não exister ')
}

export const Cadastrar = ({ path, title }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState({
    id: 10,
    name: "Nenhum tipo selecionado",
  });
  const [promotion, setPromotion] = useState({
    id: 10,
    name: "Nenhuma promoção selecionada",
  });
  console.log(name);
  return (
    <TemplateWithMenu path={path}>
      <div className="border-gray-100 rounded-md shadow-md h-36 border-2 pl-6 flex ">
        <TitleWithIcon size="text-3xl" title={title}>
          <IconCube size="w-14 h-14" />
        </TitleWithIcon>
      </div>

      <span className="flex border-[1px] my-4 border-b-gray-100" />
      <div className="flex flex-col gap-4 w-[50%]">
        <Input title="Nome do Produto" setValue={setName} value={name} />
        <InputNumeral title="Preço" setValue={setPrice} value={price} />
        <Input title="Código" />
        <div className="flex items-center gap-2">
          <Select
            title="Selecione o tipo"
            selectOptions={selectOptions}
            value={type}
            setValue={setType}
          />
          <ButtonBox style="bg-purple-500 hover:bg-purple-400 text-white text-1lx" handleAction={alertTest}>+</ButtonBox>
        </div>
        <Select
          title="Promoção"
          selectOptions={selectOptions2}
          value={promotion}
          setValue={setPromotion}
        />
        <Textarea title="Descrição" />
      </div>
    </TemplateWithMenu>
  );
};
