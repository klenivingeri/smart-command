import { connectToDatabase } from "@/lib/dbConnect";
import { promotion } from "./promotionsModel";

export const getPromotions = async (request) => {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const id = searchParams.get("id");

  try {
    await connectToDatabase();
    let query = {};
    if (name?.length) {
      query = { name: { $regex: `.*${name}.*`, $options: "i" } };
    } else if(id?.length){
      query = { _id: id };
    }
    
    const listPromotion = await promotion.find(query);

    return new Response(JSON.stringify({ records: listPromotion }), {
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