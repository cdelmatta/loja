import React, { useContext } from 'react';
import { DataContext } from '../../apis/DataContext';
import './DeletarProdutos.css';

export default function DeletarProdutos() {
  const { produtos, deletar } = useContext(DataContext);

  return (
    <div className="tela">
      <h1>Deletar Produtos</h1>
      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <ul className="lista-produtos">
          {produtos.map((p) => (
            <li key={p.id}>
              {p.nome}{' '}
              <button onClick={() => deletar(p.id)}>
                Deletar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
