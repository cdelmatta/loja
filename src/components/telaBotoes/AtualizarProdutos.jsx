import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../apis/DataContext';
import { LerProdutos, AtualizarProduto } from '../../apis/api';
import './AtualizarProdutos.css';

export default function AtualizarProdutos() {
  const { produtos, setProdutos } = useContext(DataContext);
  const [produtoEditando, setProdutoEditando] = useState(null);
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    LerProdutos(setProdutos);
  }, [setProdutos]);

  const iniciarEdicao = (produto) => {
    setProdutoEditando(produto.id);
    setNome(produto.nome);
    setValor(produto.valor);
    setImagem(produto.imagem);
  };

  const cancelarEdicao = () => {
    setProdutoEditando(null);
    setNome('');
    setValor('');
    setImagem('');
  };

  const salvarEdicao = async (id) => {
    // 🔧 Aqui foi feita a correção:
    await AtualizarProduto(id, nome, valor, imagem);
    await LerProdutos(setProdutos);
    cancelarEdicao();
  };

  return (
    <div className="tela">
      <h1>Atualizar Produtos</h1>
      {produtos.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <ul className="lista-produtos">
          {produtos.map((p) => (
            <li key={p.id}>
              {produtoEditando === p.id ? (
                <div className="form-edicao">
                  <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
                  <input value={valor} onChange={(e) => setValor(e.target.value)} type="number" placeholder="Valor" />
                  <input value={imagem} onChange={(e) => setImagem(e.target.value)} placeholder="Imagem URL" />
                  <button onClick={() => salvarEdicao(p.id)}>Salvar</button>
                  <button onClick={cancelarEdicao}>Cancelar</button>
                </div>
              ) : (
                <>
                  <span>{p.nome}</span>
                  <button onClick={() => iniciarEdicao(p)}>Editar</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
