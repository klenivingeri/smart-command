"use client";
import { IconChart } from "@/icons/Chart";
import { IconChevronDown, IconChevronRight } from "@/icons/Chevron";
import { IconChevronDoubleLeft, IconChevronDoubleRight } from "@/icons/ChevronDouble";
import { IconCommand } from "@/icons/Command";
import { IconCreate } from "@/icons/Create";
import { IconHome } from "@/icons/Home";
import { IconMoney } from "@/icons/Money";
import { IconPercent } from "@/icons/Percent";
import { IconSearch } from "@/icons/Search";
import { IconShoppingCart } from "@/icons/ShoppingCart";
import { IconUsers, IconUserAdd, IconUserSearch } from "@/icons/User";
import Link from "next/link";
import { useState } from "react";

const menu = {
  product: [
    "produto",
    "cadastrar-produto",
    "consultar-produtos",
    "relatorio-produtos",
  ],
  command: ["comanda", "consultar-comandas", "relatorio-comandas"],
  employees: [
    "funcionario",
    "cadastrar-funcionario",
    "consultar-funcionarios",
    "relatorio-funcionarios",
  ],
  promotion: [
    "promocao",
    "cadastrar-promocao",
    "consultar-promocoes",
    "relatorio-promocoes",
  ],
};


const Li = ({
  children,
  link = "",
  pl = "pl-3",
  name,
  path,
  handleSetPathName,
}) => {
  return link.length ? (
    <a
      href={link}
      onClick={() => {
        handleSetPathName(name, link);
      }}
      className={`flex w-full gap-4 ${pl} p-3 items-center text-1xl rounded-md ${
        path == name ? "bg-purple-200 font-medium text-purple-800" : ""
      } hover:bg-purple-200 hover:text-purple-800`}
    >
      {children}
    </a>
  ) : (
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
  )
  ;
};

export const SideBar = ({ path }) => {
  const [pathName, setPathName] = useState(path || "");
  const [closeMenu, setCloseMenu] = useState(false);

  const handleSetPathName = (name, link) => {
    if (name === pathName && !link) {
      setPathName("");
    } else {
      setPathName(name);
    }
  };

  return !closeMenu ? (
    <nav className="w-[250px] min-w-[250px] shadow-md">
      <div
        id="logo"
        className="flex mt-4 text-2xl justify-between items-center mx-4 text-purple-700"
      >
        <div className="flex flex-col justify-center">
          <span className="flex justify-center ml-[-19px]">
            <b>Smart</b>
          </span>
          <div className="mt-[-15px]">
            <b>Command</b>
          </div>
        </div>
        <div
          onClick={() => setCloseMenu(!closeMenu)}
          className="bg-gray-100 hover:bg-purple-200 pl-2 pr-3 py-2 rounded-md"
        >
          <IconChevronDoubleLeft size="w-6 h-6" />
        </div>
      </div>
      <div id="menu">
        <ul className="list-none p-2 w-full">
          <Li
            name="inicio"
            path={pathName}
            handleSetPathName={handleSetPathName}
            link="/"
          >
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
              link="/produto/cadastrar"
            >
              <IconCreate size="w-6 h-6" />
              Cadastrar
            </Li>
            <Li
              name="consultar-produtos"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link="/produto/consultar"
            >
              <IconSearch size="w-6 h-6" />
              Consultar
            </Li>
            <Li
              name="relatorio-produtos"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link="/produto/relatorio"
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
              link="/comanda/consultar"
            >
              <IconSearch size="w-6 h-6" />
              Consultar
            </Li>
            <Li
              name="relatorio-comandas"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link="/comanda/relatorio"
            >
              <IconChart size="w-6 h-6" />
              Relatório
            </Li>
          </div>
          <Li
            name="promocao"
            path={pathName}
            handleSetPathName={handleSetPathName}
          >
            <div className="flex w-full justify-between">
              <div className="flex gap-4">
                <IconPercent size="w-6 h-6" />
                Promoções
              </div>
              <div className="mt-[4px] mr-2">
                {menu.promotion.includes(pathName) ? (
                  <IconChevronDown size="w-4 h-4" />
                ) : (
                  <IconChevronRight size="w-4 h-4" />
                )}
              </div>
            </div>
          </Li>
          <div
            className={`${menu.promotion.includes(pathName) ? "" : "hidden"}`}
          >
            <Li
              name="cadastrar-promocao"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link="/promocao/cadastrar"
            >
              <IconCreate size="w-6 h-6" />
              Cadastrar
            </Li>
            <Li
              name="consultar-promocoes"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link="/promocao/consultar"
            >
              <IconSearch size="w-6 h-6" />
              Consultar
            </Li>
            <Li
              name="relatorio-promocoes"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link="/promocao/relatorio"
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
          <div
            className={`${menu.employees.includes(pathName) ? "" : "hidden"}`}
          >
            <Li
              name="cadastrar-funcionario"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link="/funcionario/cadastrar"
            >
              <IconUserAdd size="w-6 h-6" />
              Cadastrar
            </Li>
            <Li
              name="consultar-funcionarios"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link="/funcionario/consultar"
            >
              <IconUserSearch size="w-6 h-6" />
              Consultar
            </Li>
            <Li
              name="relatorio-funcionarios"
              path={pathName}
              handleSetPathName={handleSetPathName}
              pl="pl-12"
              link="/funcionario/relatorio"
            >
              <IconChart size="w-6 h-6" />
              Relatório
            </Li>
          </div>
        </ul>
      </div>
    </nav>
  ) : (
    <nav className="w-[64px] min-w-[64px] shadow-md">
      <div
        id="logo"
        className="flex mt-4 text-2xl justify-center items-center ml-4 pt-[17px] text-purple-700"
      >
        <div className="flex flex-col justify-center">
          <div className="flex justify-center ml-[-19px]"><b>SC</b></div>
        </div>
      </div>
      <div id="menu">
        <ul className="list-none p-2 w-full">
        <div onClick={() => setCloseMenu(!closeMenu)} title="Inicio">
          <Li
            name="inicio"
            path={pathName}
            handleSetPathName={handleSetPathName}
            link="/"
          >
            <IconHome size="w-6 h-6" />
          </Li>

          </div>
          <div onClick={() => setCloseMenu(!closeMenu)} title="Caixa">
          <Li
            name="caixa"
            path={pathName}
            handleSetPathName={handleSetPathName}
            link="/caixa"
          >
            <IconMoney size="w-6 h-6" />
          </Li>
          </div>
          <div onClick={() => setCloseMenu(!closeMenu)} title="Produto">
          <Li
            name="produto"
            path={pathName}
            handleSetPathName={handleSetPathName}
            
          >
            <IconShoppingCart size="w-6 h-6" />
          </Li>
          </div>
          <div onClick={() => setCloseMenu(!closeMenu)} title="Comanda">
          <Li
            name="comanda"
            path={pathName}
            handleSetPathName={handleSetPathName}
            onClick={() => setCloseMenu(!closeMenu)}
          >
            <IconCommand size="w-6 h-6" />
          </Li>
          </div>
          <div onClick={() => setCloseMenu(!closeMenu)} title="Promoção">
          <Li
            name="promocao"
            path={pathName}
            handleSetPathName={handleSetPathName}
            onClick={() => setCloseMenu(!closeMenu)}
          >
            <IconPercent size="w-6 h-6" />
          </Li>
          </div>
          <div onClick={() => setCloseMenu(!closeMenu)} title="Funcionario">
          <Li
            name="funcionario"
            path={pathName}
            handleSetPathName={handleSetPathName}
            onClick={() => setCloseMenu(!closeMenu)}
          >
            <IconUsers size="w-6 h-6" />
          </Li>
          </div>
        </ul>
      </div>
    </nav>
  );
};
