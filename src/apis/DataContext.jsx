import { createContext, useEffect, useState } from "react";
import {
  LerProdutos,
  CriarProduto,
  DeletarProduto,
  AtualizarProduto,
} from "./api";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [produtos, setProdutos] = useState([]);
  const [aux, setAux] = useState(0);

  useEffect(() => {
    LerProdutos(setProdutos);
  }, []);

  // Métodos utilitários para serem usados por qualquer componente
  const criar = async (nome, valor, imagem) => {
    await CriarProduto(nome, valor, imagem);
    await LerProdutos(setProdutos);
  };

  const deletar = async (id) => {
    await DeletarProduto(id);
    await LerProdutos(setProdutos);
  };

  const atualizar = async (id, nome, valor, imagem) => {
    await AtualizarProduto(id, nome, valor, imagem);
    await LerProdutos(setProdutos);
  };

  return (
    <DataContext.Provider
      value={{
        produtos,
        setProdutos,
        setAux,
        aux,
        criar,
        deletar,
        atualizar,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
