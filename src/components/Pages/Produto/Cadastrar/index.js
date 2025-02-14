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

const alertTest = () => {
  alert(
    "Aqui você vai pode criar uma nova categoria de item se ele ainda não exister "
  );
};

export const Cadastrar = ({ product = [], selectPromotions, selectTypes }) => {
  console.log(product)
  const [name, setName] = useState(product[0]?.name || "");
  const [price, setPrice] = useState(formatCurrency(product[0]?.price) || "");
  const [description, setDescription] = useState(product[0]?.description || "");
  const [code, setCode] = useState(product[0]?.code || "");
  const [type, setType] = useState(product[0]?.type || {});
  const [promotion, setPromotion] = useState(product[0]?.promotion || {});

  const handleSaveProduct = () => {
    postAndPutApiProduct(product[0]?._id, {
      name,
      code,
      type,
      price: parseCurrency(price),
      description,
      promotion,
      title: `${code} - ${name}`,
      active: true,
    });
  };

  useEffect(() => {
    if (product && product.length > 0) {
      setName(product[0]?.name);
      setPrice(formatCurrency(product[0]?.price));
      setType(product[0]?.type);
      setPromotion(product[0]?.promotion);
      setDescription(product[0]?.description);
      setCode(product[0]?.code);
    }
  }, [product[0]]);

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
        <a onClick={handleSaveProduct}>
          <ButtonBox style="bg-purple-500 hover:bg-purple-400 text-white text-1lx">
            Cadastrar Produto
          </ButtonBox>
        </a>
      </div>
    </div>
  );
};
