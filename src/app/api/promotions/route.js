import { getPromotions } from "./promotionsController";

export async function GET(request) {
  const response = await getPromotions(request)
  return response
}