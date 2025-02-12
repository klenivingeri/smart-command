import { getProducts } from "./productsController";

export async function GET(req) {
  const response = await getProducts()
  return response
}

export async function POST(request) {
  return new Response(JSON.stringify({ message: "Hello, batata!" }), {
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