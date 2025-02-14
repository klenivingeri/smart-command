import { connectToDatabase } from "@/lib/dbConnect";
import { type } from "./typesModel";

export const getTypes = async (request) => {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const id = searchParams.get("id");

  try {
    let query = {};
    if (name?.length) {
      query = { name: { $regex: `.*${name}.*`, $options: "i" } };
    } else if(id?.length){
      query = { _id: id };
    }

    await connectToDatabase();
    const listType = await type.find(query);

    return new Response(JSON.stringify({ records: listType }), {
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