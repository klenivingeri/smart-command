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
  handleDrop = () => {},
  link = "",
  pl = "pl-6",
  name,
  path,
  setPathName,
}) => {
  return (
    <Link
      href={link}
      onClick={() => {
        setPathName(name);
        handleDrop();
      }}
      className={`flex w-full gap-4 ${pl} p-3 items-center text-1xl ${
        path == name ? "bg-gray-300" : ""
      } hover:bg-gray-300`}
    >
      {children}
    </Link>
  );
};

export const SideBar = ({ path }) => {
  const [isDropProduct, setIsDropProduct] = useState(false);
  const [isDropCommand, setIsDropCommand] = useState(false);
  const [isDropEmployees, setIsDropEmployees] = useState(false);
  const [pathName, setPathName] = useState(path || "");

  return (
    <nav className="w-[250px] min-w-[250px]">
      <div id="logo" className="flex justify-center my-4 text-2xl">
        <b>Smart Command</b>
      </div>
      <div id="menu">
        <ul className="list-none p-2 w-full">
          <Li name="inicio" path={pathName} setPathName={setPathName} link="/">
            <IconHome size="w-6 h-6" />
            Inicio
          </Li>
          <Li
            name="caixa"
            path={pathName}
            setPathName={setPathName}
            link="/caixa"
          >
            <IconMoney size="w-6 h-6" />
            Caixa
          </Li>
          <Li
            name="produtos"
            path={pathName}
            setPathName={setPathName}
            handleDrop={() => setIsDropProduct(!isDropProduct)}
          >
            <div className="flex w-full justify-between">
              <div className="flex gap-4">
                <IconShoppingCart size="w-6 h-6" />
                Produtos
              </div>
              <div className="mt-[4px] mr-2">
                {isDropProduct ? (
                  <IconChevronDown size="w-4 h-4" />
                ) : (
                  <IconChevronRight size="w-4 h-4" />
                )}
              </div>
            </div>
          </Li>
          <div className={`${isDropProduct ? "" : "hidden"}`}>
            <Li
              name="cadastrar-produto"
              path={pathName}
              setPathName={setPathName}
              pl="pl-12"
            >
              <IconCreate size="w-6 h-6" />
              Cadastrar
            </Li>
            <Li
              name="consultar-produtos"
              path={pathName}
              setPathName={setPathName}
              pl="pl-12"
            >
              <IconSearch size="w-6 h-6" />
              Consultar
            </Li>
            <Li
              name="relatorio-produtos"
              path={pathName}
              setPathName={setPathName}
              pl="pl-12"
            >
              <IconChart size="w-6 h-6" />
              Relatório
            </Li>
          </div>
          <Li
            name="comanda"
            path={pathName}
            setPathName={setPathName}
            handleDrop={() => setIsDropCommand(!isDropCommand)}
          >
            <div className="flex w-full justify-between">
              <div className="flex gap-4">
                <IconCommand size="w-6 h-6" />
                Comandas
              </div>
              <div className="mt-[4px] mr-2">
                {isDropCommand ? (
                  <IconChevronDown size="w-4 h-4" />
                ) : (
                  <IconChevronRight size="w-4 h-4" />
                )}
              </div>
            </div>
          </Li>
          <div className={`${isDropCommand ? "" : "hidden"}`}>
            <Li
              name="consultar-comandas"
              path={pathName}
              setPathName={setPathName}
              pl="pl-12"
            >
              <IconSearch size="w-6 h-6" />
              Consultar
            </Li>
            <Li
              name="relatorio-comandas"
              path={pathName}
              setPathName={setPathName}
              pl="pl-12"
            >
              <IconChart size="w-6 h-6" />
              Relatório
            </Li>
          </div>
          <Li
            name="funcionario"
            path={pathName}
            setPathName={setPathName}
            handleDrop={() => setIsDropEmployees(!isDropEmployees)}
          >
            <div className="flex w-full justify-between">
              <div className="flex gap-4">
                <IconUsers size="w-6 h-6" />
                Funcionários
              </div>
              <div className="mt-[4px] mr-2">
                {isDropEmployees ? (
                  <IconChevronDown size="w-4 h-4" />
                ) : (
                  <IconChevronRight size="w-4 h-4" />
                )}
              </div>
            </div>
          </Li>
          <div className={`${isDropEmployees ? "" : "hidden"}`}>
            <Li
              name="cadastrar-funcionario"
              path={pathName}
              setPathName={setPathName}
              pl="pl-12"
            >
              <IconUserAdd size="w-6 h-6" />
              Cadastrar
            </Li>
            <Li
              name="consultar-funcionario"
              path={pathName}
              setPathName={setPathName}
              pl="pl-12"
            >
              <IconUserSearch size="w-6 h-6" />
              Consultar
            </Li>
            <Li
              name="relatorio-funcionario"
              path={pathName}
              setPathName={setPathName}
              pl="pl-12"
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
