import React, { useState } from "react";
import { produtos } from "./Produtos";
import { IoMdCart } from "react-icons/io";
import Carrinho from "../carrinho/Carrinho";
import './style.css';

export default function Produto() {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const adicionarItem = (produto) => {
    setItensCarrinho(prevItens => {
      const itemExistenteIndex = prevItens.findIndex(item => item.id === produto.id);
      
      if (itemExistenteIndex > -1) {
        const novosItens = [...prevItens];
        novosItens[itemExistenteIndex] = {
          ...novosItens[itemExistenteIndex],
          quantidade: novosItens[itemExistenteIndex].quantidade + 1
        };
        return novosItens;
      }
      
      return [...prevItens, {
        ...produto,
        quantidade: 1,
        id: produto.id
      }];
    });
  };

  return (
    <div className="container-principal">
      <div 
        className="container-icone-carrinho"
        onClick={() => setCarrinhoAberto(!carrinhoAberto)}
      >
        <IoMdCart className="icone-carrinho" />
        {itensCarrinho.length > 0 && (
          <span className="contador-itens">
            {itensCarrinho.reduce((total, item) => total + item.quantidade, 0)}
          </span>
        )}
      </div>
      <h1 className="titulo-loja">KABUM</h1>
      
      <div className="grade-produtos">
        {produtos.map((produto) => (
          <div key={produto.id} className="card-produto">
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="imagem-produto"
            />
            <h4 className="nome-produto">{produto.nome}</h4>
            <p className="preco-produto">
              R$ {produto.valor.toFixed(2).replace('.', ',')}
            </p>
            <button 
              className="botao-comprar"
              onClick={() => adicionarItem(produto)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
      <Carrinho
        aberto={carrinhoAberto}
        itens={itensCarrinho}
        atualizarItens={setItensCarrinho}
        fechar={() => setCarrinhoAberto(false)}
      />
    </div>
  );
}