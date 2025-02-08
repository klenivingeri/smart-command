"use client";

import { Input, InputNumeral, Select, Textarea } from "@/components/Atoms/Input";
import { TemplateWithMenu } from "@/components/Templates/TemplateWithMenu";
import { useState } from "react";
import { IconCube } from "@/icons/Cube";
import { TitleWithIcon } from "@/components/Molecules/TitleWithIcon";

export const Cadastrar = ({ path, Icon, title }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  console.log(price)
  return (
    <TemplateWithMenu path={path}>
      <TitleWithIcon size="text-2xl" Icon={Icon} title={title}>
        <IconCube size="w-6 h-6" />
      </TitleWithIcon>
      <span className="flex border-[1px] my-4 border-b-gray-100" />
      <div className="flex flex-col gap-4">
      <Input title="Nome" setName={setName} value={name} />
      <InputNumeral title="Preço" setValue={setPrice} value={price} />
      <Input title="Código" />
      <Select title="Selecione modelo" />
      <Textarea title="Descrição" />
      </div>
    </TemplateWithMenu>
  );
};
