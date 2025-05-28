import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/data';
import { LerProdutos } from '../../data/fetchProdutos';
import './AtualizarProdutos.css';

export default function AtualizarProdutos() {
  const { produtos, setProdutos } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    LerProdutos(setProdutos);
  }, [setProdutos]);

  return (
    <div className="tela">
      <h1>Atualizar Produtos</h1>
      {produtos.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <ul className="lista-produtos">
          {produtos.map((p) => (
            <li key={p.id}>
              <span>{p.nome}</span>
              <button onClick={() => navigate('/editarProduto', { state: p })}>Editar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}