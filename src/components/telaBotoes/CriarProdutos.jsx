import React, { useState, useContext } from 'react';
import { DataContext } from '../../apis/DataContext';
import './CriarProdutos.css';

export default function CriarProdutos() {
  const { criar } = useContext(DataContext);
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await criar(nome, valor, imagem);
    setNome('');
    setValor('');
    setImagem('');
  };

  return (
    <div className="tela">
      <h1>Criar Produto</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do produto"
          required
        />
        <input
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          type="number"
          placeholder="Valor"
          required
        />
        <input
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          placeholder="URL da imagem"
          required
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}
