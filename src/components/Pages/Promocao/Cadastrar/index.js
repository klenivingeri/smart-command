"use client";

import {
  Input,
  InputNumeral,
  Select,
} from "@/components/Atoms/Input";

import { useEffect, useState } from "react";
import { ButtonBox } from "@/components/Atoms/Button";
import { formatCurrency, parseCurrency } from "@/utils/currency";
import { postAndPutApiPromotions } from "@/getApi/promotions";

const selectVariation = [{_id: 'unico', name: 'Único'}, {_id: 'multiple', name: 'Múltiplo' }]
const selectComparison = [{_id: 'name', name: 'Nome do Produto'}, {_id: 'type', name: 'Tipo do Produto' }]

export const Cadastrar = ({ promotion = [], }) => {

  const [name, setName] = useState(promotion[0]?.name || "");
  const [quantity, setQuantity] = useState(promotion[0]?.name || "");
  const [value, setValue] = useState(formatCurrency(promotion[0]?.price) || "");
  const [variation, setVariation] = useState(promotion[0]?.type || {});
  const [comparison, setComparison] = useState(promotion[0]?.promotion || {});
  console.log('aaaa',{comparison, variation})
  const handleSaveProduct = () => {
    postAndPutApiPromotions(promotion[0]?._id, {
      name,
      quantity,
      value: parseCurrency(value),
      comparison: comparison,
      variation: variation
    });
  };

  useEffect(() => {
    if (promotion && promotion.length > 0) {
      setName(promotion[0]?.name);
      setQuantity(promotion[0]?.quantity);
      setValue(formatCurrency(promotion[0]?.value));
      setVariation(promotion[0]?.variation);
      setComparison(promotion[0]?.comparison);
    }
  }, [promotion[0]]);

  console.log()
  return (
    <div>
      <span className="flex border-[1px] my-4 border-b-gray-100" />
      <div className="flex flex-col gap-4 w-[50%]">
        <Input title="Nome da Promoção" setValue={setName} value={name}/>
        <Input title="Quantidade de Produtos pra fechar uma promoção" setValue={setQuantity} value={quantity}  />
        <div className="flex items-center gap-4">
          <InputNumeral title="Valor a ser descontado" setValue={setValue} value={value} />
        </div>

        <div className="flex items-center gap-4">
          <Select
            title="Selecione o tipo de verificação"
            selectOptions={selectVariation}
            value={variation}
            setValue={setVariation}
          />
        </div>
        <Select
          title="Selecione a comparação"
          selectOptions={selectComparison}
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
