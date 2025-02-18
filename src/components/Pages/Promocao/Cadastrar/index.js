"use client";

import {
  Input,
  InputNumeral,
  Select,
  Textarea,
} from "@/components/Atoms/Input";

import { useEffect, useState } from "react";
import { ButtonBox } from "@/components/Atoms/Button";
import { formatCurrency, parseCurrency } from "@/utils/currency";
import { postAndPutApiProduct } from "@/getApi/products";

export const Cadastrar = ({ promotion = [], }) => {
  console.log(promotion)
  const [name, setName] = useState(promotion[0]?.name || "");
  const [number, setNumber] = useState(promotion[0]?.name || 0);
  const [price, setPrice] = useState(formatCurrency(promotion[0]?.price) || "");
  const [single, setSingle] = useState(promotion[0]?.type || {});
  const [comparison, setComparison] = useState(promotion[0]?.promotion || {});

  const handleSaveProduct = () => {
    postAndPutApiProduct(promotion[0]?._id, {
      name,
      number,
      price: parseCurrency(price),
      promotion,
      title: `${code} - ${name}`,
    });
  };

  useEffect(() => {
    if (promotion && promotion.length > 0) {
      setName(promotion[0]?.name);
      setNumber(promotion[0]?.number);
      setPrice(formatCurrency(promotion[0]?.price));
      setSingle(promotion[0]?.single);
      setComparison(promotion[0]?.comparison);
    }
  }, [promotion[0]]);

  return (
    <div>
      <span className="flex border-[1px] my-4 border-b-gray-100" />
      <div className="flex flex-col gap-4 w-[50%]">
        <Input title="Nome da Promoção" setValue={setNumber} value={number} />
        <Input title="Quantidade de Produtos pra fechar uma promoção" setValue={setName} value={name} />
        <div className="flex items-center gap-4">
          <InputNumeral title="Valor a ser descontado" setValue={setPrice} value={price} />
        </div>

        <div className="flex items-center gap-4">
          <Select
            title="Selecione o tipo de verificação"
            selectOptions={[{id: 'unico', name: 'Único'}, {id: 'variado', name: 'Variado' }]}
            value={single}
            setValue={setSingle}
          />
        </div>
        <Select
          title="Selecione a comparação"
          selectOptions={[{id: 'name', name: 'Nome do Produto'}, {id: 'type', name: 'Tipo do Produto' }]}
          value={comparison}
          setValue={setComparison}
        />

        <a onClick={handleSaveProduct}>
          <ButtonBox style="bg-purple-500 hover:bg-purple-400 text-white text-1lx">
            Cadastrar Promoção
          </ButtonBox>
        </a>
      </div>
    </div>
  );
};
