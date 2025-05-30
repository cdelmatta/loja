import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../apis/DataContext';
import { LerProdutos } from '../../apis/api';
import './VerProdutos.css';

export default function VerProdutos() {
  const { produtos, setProdutos } = useContext(DataContext);

  useEffect(() => {
    LerProdutos(setProdutos);
  }, [setProdutos]);

  return (
    <div className="tela">
      <h1>Produtos Cadastrados</h1>
      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <div className="produtos-container">
          {produtos.map((produto) => (
            <div key={produto.id} className="produto-card">
              <img src={produto.imagem} alt={produto.nome} />
              <h3>{produto.nome}</h3>
              <p>Valor: R${produto.valor}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}