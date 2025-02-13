import { getProducts } from "./productsController";

export async function GET(request) {
  const response = await getProducts(request)
  return response
}

export async function POST(request) {
  return new Response(JSON.stringify({ message: "Hello, batata!", error: true }), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(request) {
  return new Response(JSON.stringify({ message: "Hello, batata!" }), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(request) {
  return new Response(JSON.stringify({ message: "Hello, batata!" }), {
    headers: { "Content-Type": "application/json" },
  });
}