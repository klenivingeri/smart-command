import { getPromotions, postPromotions, putPromotions } from "./promotionsController";

export async function GET(request) {
  const response = await getPromotions(request)
  return response
}

export async function POST(request) {
  const response = await postPromotions(request)
  return response
}

export async function DELETE(request) {
  return new Response(JSON.stringify({ message: "Hello, batata!" }), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(request) {
  const response = await putPromotions(request)
  return response
}