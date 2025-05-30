import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../apis/DataContext';
import { LerProdutos } from '../../apis/api';
import './TelaInicial.css';

export default function TelaInicial() {
  const { produtos, setProdutos } = useContext(DataContext);

  useEffect(() => {
    LerProdutos(setProdutos);
  }, [setProdutos]);

  return (
    <div className="tela">
      <h1>Bem-vindo à Loja</h1>
      <div className="produtos-preview">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-card">
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>R${produto.valor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}