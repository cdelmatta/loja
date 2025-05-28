import React, { useState, useContext } from 'react';
import { CriarProduto, LerProdutos } from '../../data/fetchProdutos';
import { DataContext } from '../../context/data';
import './CriarProdutos.css';

export default function CriarProdutos() {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState('');
  const { setProdutos } = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CriarProduto(nome, valor, imagem);
    await LerProdutos(setProdutos);
    setNome('');
    setValor('');
    setImagem('');
  };

  return (
    <div className="tela">
      <h1>Criar Produto</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome do produto" required />
        <input value={valor} onChange={(e) => setValor(e.target.value)} type="number" placeholder="Valor" required />
        <input value={imagem} onChange={(e) => setImagem(e.target.value)} placeholder="URL da imagem" required />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}