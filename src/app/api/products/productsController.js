import { connectToDatabase } from "@/lib/dbConnect";
import { product } from "./productsModel";

export const getProducts = async (request) => {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const id = searchParams.get("id");

  try {
    let query = {};
    if (title?.length) {
      query = { title: { $regex: `.*${title}.*`, $options: "i" } };
    } else if(id?.length){
      query = { id: id };
    }

    await connectToDatabase();
    const listProduct = await product.find(query);

    return new Response(JSON.stringify({ records: listProduct }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
};
