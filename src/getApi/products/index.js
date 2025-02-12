export const getApiProducts = async ({id}) => {
  console.log('NEXT_PUBLIC_API_URL', process.env.NEXT_PUBLIC_API_URL)
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/products${id ? `?id=${id}` : ''}`;
  const response = await fetch(url);

  const data = await response.json();
  
  return data
}