// Page3.jsx (Editar Produto)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Page3.css';

// Dados temporários
const produtos = [
  { id: 1, nome: 'Produto 1', valor: 100.00, imagem: 'url1' },
  { id: 2, nome: 'Produto 2', valor: 200.00, imagem: 'url2' },
];

export default function Page3() {
  const [modalAberto, setModalAberto] = useState(false);
  const [produtoEditando, setProdutoEditando] = useState(null);

  const abrirModal = (produto) => {
    setProdutoEditando(produto);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProdutoEditando(null);
  };

  return (
    <div className="container-edicao">
      <h2>Editar Produtos</h2>
      <div className="lista-produtos">
        {produtos.map(produto => (
          <div key={produto.id} className="card-produto">
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>R$ {produto.valor.toFixed(2)}</p>
            <div className="botoes-acao">
              <button 
                className="botao-editar"
                onClick={() => abrirModal(produto)}
              >
                Editar
              </button>
              <button className="botao-remover">
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Edição */}
      {modalAberto && (
        <div className="modal-overlay">
          <div className="modal-conteudo">
            <h3>Editar Produto</h3>
            <input 
              type="text" 
              defaultValue={produtoEditando.nome} 
            />
            <input 
              type="number" 
              defaultValue={produtoEditando.valor} 
            />
            <div className="modal-botoes">
              <button onClick={fecharModal}>Cancelar</button>
              <button onClick={fecharModal}>Salvar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}