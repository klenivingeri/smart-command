
export const getApiPromotions = async (query) => {
  
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/promotions${query ? `?${query}` : ''}`;
  const response = await fetch(url);
  const data = await response.json();
  
  return data
}