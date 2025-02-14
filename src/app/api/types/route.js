import { getTypes } from "./typesController";

export async function GET(request) {
  const response = await getTypes(request)
  return response
}