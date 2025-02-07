"use client";
import { IconChart } from "@/icons/Chart";
import { IconChevronDown, IconChevronRight } from "@/icons/Chevron";
import { IconCommand } from "@/icons/Command";
import { IconCreate } from "@/icons/Create";
import { IconHome } from "@/icons/Home";
import { IconMoney } from "@/icons/Money";
import { IconSearch } from "@/icons/Search";
import { IconShoppingCart } from "@/icons/ShoppingCart";
import { IconUsers, IconUserAdd, IconUserSearch } from "@/icons/User";
import Link from "next/link";
import { useState } from "react";

const Li = ({
  children,
  link = "",
  pl = "pl-6",
  name,
  path,
  handleSetPathName,
}) => {
  return (
    <Link
      href={link}
      onClick={() => {
        handleSetPathName(name, link);
      }}
      className={`flex w-full gap-4 ${pl} p-3 items-center text-1xl rounded-md ${
        path == name ? "bg-purple-200 font-medium text-purple-800" : ""
      } hover:bg-purple-200 hover:text-purple-800`}
    >
      {children}
    </Link>
  );
};

const menu = {
  product:['produto', 'cadastrar-produto', 'consultar-produtos', 'relatorio-produtos'],
  command:['comanda', 'consultar-comandas', 'relatorio-comandas'],
  employees:['funcionario', 'cadastrar-funcionario', 'consultar-funcionarios', 'relatorio-funcionarios']
}

export const SideBar = ({ path }) => {
  const [pathName, setPathName] = useState(path || "");

  const handleSetPathName = (name, link) => {
    if(name === pathName && !link){
      setPathName('')
    }else {
      setPathName(name)
    }
  }

  return (
    <nav className="w-[250px] min-w-[250px] shadow-md">
      <div id="logo" className="flex justify-center my-4 text-2xl text-purple-700">
        <b>Smart Command</b>
      </div>
      <div id="menu">
        <ul className="list-none p-2 w-full">
          <Li name="inicio" path={pathName} handleSetPathName={handleSetPathName} link="/">
            <IconHome size="w-6 h-6" />
            Inicio
          </Li>
          <Li
            name="caixa"
            path={pathName}
            handleSetPathName={handleSetPathName}
            link="/caixa"
          >
            <IconMoney size="w-6 h-6" />
            Caixa
          </Li>
          <Li
            name="produto"
            path={pathName}
            handleSetPathName={handleSetPathName}
          >
            <div className="flex w-full justify-between">
              <div className="flex gap-4">
                <IconShoppingCart size="w-6 h-6" />
                Produtos
              </div>
              <div className="mt-[4px] mr-2">
                {menu.product.includes(pathName) ? (
                  <IconChevronDown size="w-4 h-4" />
                ) : (
                  <IconChevronRight size="w-4 h-4" />
                )}
              </div>
            </div>
          </Li>
          <div className={`${menu.product.includes(pathName) ? "" : "hidden"}`}>
            <Li
              name="cadastrar-produto"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link='/produto/cadastrar'
            >
              <IconCreate size="w-6 h-6" />
              Cadastrar
            </Li>
            <Li
              name="consultar-produtos"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link='/produto/consultar'
            >
              <IconSearch size="w-6 h-6" />
              Consultar
            </Li>
            <Li
              name="relatorio-produtos"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link='/produto/relatorio'
            >
              <IconChart size="w-6 h-6" />
              Relatório
            </Li>
          </div>
          <Li
            name="comanda"
            path={pathName}
            handleSetPathName={handleSetPathName}
          >
            <div className="flex w-full justify-between">
              <div className="flex gap-4">
                <IconCommand size="w-6 h-6" />
                Comandas
              </div>
              <div className="mt-[4px] mr-2">
                {menu.command.includes(pathName) ? (
                  <IconChevronDown size="w-4 h-4" />
                ) : (
                  <IconChevronRight size="w-4 h-4" />
                )}
              </div>
            </div>
          </Li>
          <div className={`${menu.command.includes(pathName) ? "" : "hidden"}`}>
            <Li
              name="consultar-comandas"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link='/comanda/consultar'
            >
              <IconSearch size="w-6 h-6" />
              Consultar
            </Li>
            <Li
              name="relatorio-comandas"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link='/comanda/relatorio'
            >
              <IconChart size="w-6 h-6" />
              Relatório
            </Li>
          </div>
          <Li
            name="funcionario"
            path={pathName}
            handleSetPathName={handleSetPathName}
          >
            <div className="flex w-full justify-between">
              <div className="flex gap-4">
                <IconUsers size="w-6 h-6" />
                Funcionários
              </div>
              <div className="mt-[4px] mr-2">
                {menu.employees.includes(pathName) ? (
                  <IconChevronDown size="w-4 h-4" />
                ) : (
                  <IconChevronRight size="w-4 h-4" />
                )}
              </div>
            </div>
          </Li>
          <div className={`${menu.employees.includes(pathName) ? "" : "hidden"}`}>
            <Li
              name="cadastrar-funcionario"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link='/funcionario/cadastrar'
            >
              <IconUserAdd size="w-6 h-6" />
              Cadastrar
            </Li>
            <Li
              name="consultar-funcionarios"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link='/funcionario/consultar'
            >
              <IconUserSearch size="w-6 h-6" />
              Consultar
            </Li>
            <Li
              name="relatorio-funcionarios"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link='/funcionario/relatorio'
            >
              <IconChart size="w-6 h-6" />
              Relatório
            </Li>
          </div>
        </ul>
      </div>
    </nav>
  );
};
