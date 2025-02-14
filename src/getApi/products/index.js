import { promotion } from "@/app/api/promotions/promotionsModel";

export const getApiProducts = async (query) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/products${query ? `?${query}` : ''}`;
  const response = await fetch(url);
  const data = await response.json();
  
  return data
}

export const postAndPutApiProduct = async (query = '', body) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/products${query ? `?id=${query}` : ''}`;

  const obj = {...body, promotion: body.promotion?._id === 'default' ? {} : body.promotion}

  const response = await fetch(url,{
    method: !query? "POST" : "PUT",
    body: JSON.stringify(obj),
  });
  const data = await response.json();
  
  return data
}