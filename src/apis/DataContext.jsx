// src/apis/DataContext.jsx
import React, { createContext, useState, useEffect, useCallback } from 'react';
import {
  CriarProduto as apiCriar,
  LerProdutos   as apiLer,
  AtualizarProduto as apiAtualizar,
  DeletarProduto   as apiDeletar
} from './api';

// Named export do Context
export const DataContext = createContext({
  produtos: [],
  criar: () => Promise.resolve(),
  atualizar: () => Promise.resolve(),
  deletar: () => Promise.resolve(),
  load: () => Promise.resolve(),
});

// Named export do Provider
export function DataProvider({ children }) {
  const [produtos, setProdutos] = useState([]);

  // Função de load estável
  const load = useCallback(async () => {
    try {
      await apiLer(setProdutos);
    } catch (err) {
      console.error('Erro no load do DataContext:', err);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  // Métodos CRUD encapsulados e estáveis
  const criar = useCallback(
    async (nome, valor, imagem) => {
      await apiCriar(nome, valor, imagem);
      await load();
    },
    [load]
  );

  const atualizar = useCallback(
    async (id, nome, valor, imagem) => {
      await apiAtualizar(id, nome, valor, imagem);
      await load();
    },
    [load]
  );

  const deletar = useCallback(
    async (id) => {
      await apiDeletar(id);
      await load();
    },
    [load]
  );

  return (
    <DataContext.Provider
      value={{ produtos, criar, atualizar, deletar, load }}
    >
      {children}
    </DataContext.Provider>
  );
}
