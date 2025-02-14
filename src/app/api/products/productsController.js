import { connectToDatabase } from "@/lib/dbConnect";
import { product } from "./productsModel";

export const getProducts = async (request) => {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const id = searchParams.get("id");

  try {
    await connectToDatabase();
    let query = {};
    if (title?.length) {
      query = { title: { $regex: `.*${title}.*`, $options: "i" } };
    } else if(id?.length){
      query = { _id: id };
    }


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

export const postProduct = async (request) => {
  try {
    await connectToDatabase();
    const body = await request.json()

    await product.create(body)

    return new Response(JSON.stringify({ records: {aaaa: 'testeste'} }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.log(e)
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}

export const putProduct = async (request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  try {
    await connectToDatabase();
    const body = await request.json()

    await product.findByIdAndUpdate(id,body)

    return new Response(JSON.stringify({ records: {aaaa: 'testeste'} }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.log(e)
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}