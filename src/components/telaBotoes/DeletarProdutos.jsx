import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../apis/DataContext';
import { DeletarProduto, LerProdutos } from '../../apis/api';
import './DeletarProdutos.css';

export default function DeletarProdutos() {
  const { produtos, setProdutos } = useContext(DataContext);

  useEffect(() => {
    LerProdutos(setProdutos);
  }, [setProdutos]);

  const deletar = async (id) => {
    await DeletarProduto(id);
    await LerProdutos(setProdutos);
  };

  return (
    <div className="tela">
      <h1>Deletar Produtos</h1>
      <ul className="lista-produtos">
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} <button onClick={() => deletar(produto.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
