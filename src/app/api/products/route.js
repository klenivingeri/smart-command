import { getProducts, postProduct, putProduct } from "./productsController";

export async function GET(request) {
  const response = await getProducts(request)
  return response
}

export async function POST(request) {
  const response = await postProduct(request)
  return response
}

export async function DELETE(request) {
  return new Response(JSON.stringify({ message: "Hello, batata!" }), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(request) {
  const response = await putProduct(request)
  return response
}