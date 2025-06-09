import React, { useContext, useState } from 'react';
import { DataContext } from '../../apis/DataContext';
import './AtualizarProdutos.css';

export default function AtualizarProdutos() {
  const { produtos, atualizar } = useContext(DataContext);
  const [produtoEditando, setProdutoEditando] = useState(null);
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState('');

  const iniciarEdicao = (p) => {
    setProdutoEditando(p.id);
    setNome(p.nome);
    setValor(p.valor);
    setImagem(p.imagem);
  };

  const cancelarEdicao = () => {
    setProdutoEditando(null);
    setNome('');
    setValor('');
    setImagem('');
  };

  const salvarEdicao = async (id) => {
    await atualizar(id, nome, valor, imagem);
    cancelarEdicao();
  };

  return (
    <div className="tela">
      <h1>Atualizar Produtos</h1>
      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <ul className="lista-produtos">
          {produtos.map((p) => (
            <li key={p.id}>
              {produtoEditando === p.id ? (
                <div className="form-edicao">
                  <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome"
                  />
                  <input
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    type="number"
                    placeholder="Valor"
                  />
                  <input
                    value={imagem}
                    onChange={(e) => setImagem(e.target.value)}
                    placeholder="Imagem URL"
                  />
                  <button onClick={() => salvarEdicao(p.id)}>
                    Salvar
                  </button>
                  <button onClick={cancelarEdicao}>
                    Cancelar
                  </button>
                </div>
              ) : (
                <>
                  <span>{p.nome}</span>{' '}
                  <button onClick={() => iniciarEdicao(p)}>
                    Editar
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
