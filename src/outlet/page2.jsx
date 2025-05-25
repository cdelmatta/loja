// Page2.jsx (Adicionar Produto)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page2.css';

export default function Page2() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar o produto
    navigate('/page1');
  };

  return (
    <div className="formulario-container">
      <h2>Adicionar Novo Produto</h2>
      <form onSubmit={handleSubmit}>
        <div className="grupo-formulario">
          <label>Nome do Produto:</label>
          <input type="text" required />
        </div>
        
        <div className="grupo-formulario">
          <label>Valor:</label>
          <input type="number" step="0.01" required />
        </div>

        <div className="grupo-formulario">
          <label>URL da Imagem:</label>
          <input type="url" required />
        </div>

        <button type="submit" className="botao-salvar">
          Salvar Produto
        </button>
      </form>
    </div>
  );
}