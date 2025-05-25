// Page1.jsx (Layout principal)
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Page1.css';

export default function Page1() {
  const navigate = useNavigate();

  return (
    <div className="container-principal">
      {/* Barra lateral fixa */}
      <div className="barra-lateral-fixa">
        <h1>KABUM</h1>
        <button 
          className="botao-menu"
          onClick={() => navigate('/page1/adicionar')}
        >
          Adicionar Produto
        </button>
        <button
          className="botao-menu"
          onClick={() => navigate('/page1/editar')}
        >
          Editar Produto
        </button>
        <button
          className="botao-menu"
          onClick={() => navigate('/page1/produtos')}
        >
          Produtos
        </button>
      </div>

      {/* Conteúdo dinâmico */}
      <div className="conteudo-dinamico">
        <Outlet />
        
        {/* Tela de boas-vindas padrão */}
        {window.location.pathname === '/page1' && (
          <div className="tela-inicial">
            <h1>BEM VINDO A LOJA</h1>
            <p>ESCOLHA UMA OPÇÃO</p>
          </div>
        )}
      </div>
    </div>
  );
}