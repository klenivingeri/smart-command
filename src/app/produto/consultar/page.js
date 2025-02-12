'use client'

import { getApiProducts } from "@/getApi/products";
import { Consultar } from "@/components/Pages/Produto/Consultar";
import { useEffect } from "react";

export default function ProdutoConsultar() {
  useEffect(() => {
    const fetchData = async () =>{
      const resp = await getApiProducts('')
      console.log(resp?.records)
    }

    fetchData()
  },[])
    return (
      <div className="h-full">
        <Consultar path="consultar-produtos" />
      </div>
    );
}