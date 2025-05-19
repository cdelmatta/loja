import React from "react";
import "./carrinho.css";

export default function Carrinho({ aberto, itens, atualizarItens, fechar }) {
  const calcularTotal = () => {
    return itens.reduce((total, item) => total + (item.valor * item.quantidade), 0);
  };

  const atualizarQuantidade = (itemId, novaQuantidade) => {
    if (novaQuantidade < 1) return removerItem(itemId);
    
    atualizarItens(prevItens =>
      prevItens.map(item =>
        item.id === itemId
          ? { ...item, quantidade: novaQuantidade }
          : item
      )
    );
  };

  const removerItem = (itemId) => {
    atualizarItens(prevItens =>
      prevItens.filter(item => item.id !== itemId)
    );
  };

  return (
    <div className={`container-carrinho ${aberto ? 'aberto' : ''}`}>
      <div className="cabecalho-carrinho">
        <h2>Seu Carrinho</h2>
        <button className="botao-fechar" onClick={fechar}>✕</button>
      </div>

      <div className="lista-itens">
        {itens.map((item) => (
          <div className="item-carrinho" key={item.id}>
            <img src={item.imagem} alt={item.nome} className="imagem-carrinho" />
            <div className="info-item">
              <h4>{item.nome}</h4>
              <div className="controle-quantidade">
                <button onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}>
                  -
                </button>
                <span>{item.quantidade}</span>
                <button onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}>
                  +
                </button>
              </div>
              <p className="preco-item">
                R$ {(item.valor * item.quantidade).toFixed(2).replace('.', ',')}
              </p>
              <button 
                className="botao-remover"
                onClick={() => removerItem(item.id)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="resumo-pedido">
        <div className="total-container">
          <span className="texto-total">Total:</span>
          <span className="valor-total">
            R$ {calcularTotal().toFixed(2).replace('.', ',')}
          </span>
        </div>
        <button className="botao-finalizar">Finalizar Compra</button>
      </div>
    </div>
  );
}