import { connectToDatabase } from "@/lib/dbConnect"
import { product } from "./productsModel"

export const getProducts = async () => {
  try{
    await connectToDatabase()
    const listProduct = await product.find({})
    console.log(listProduct)
    return new Response(JSON.stringify({records: listProduct}), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }

}