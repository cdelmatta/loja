import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import fundo from '../../assets/images/fundo.jpg';
import './Login.css';

export default function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioValido = usuarios.find(
      usuario => usuario.email === email && usuario.senha === senha
    );

    if(usuarioValido) {
      sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioValido));
      setIsAuthenticated(true);
      navigate('/produtos');
    } else {
      setErro('E-mail ou senha incorretos!');
    }
  };

  return (
    <div className="container-login">
      <img 
        src={fundo} 
        alt="Fundo decorativo" 
        className="imagem-fundo"
        role="presentation"
      />
      <div className="conteudo-login">
        <div className="formulario-login">
          <h1>Login</h1>
          {erro && <div className="mensagem-erro">{erro}</div>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <button type="submit" className="botao-login">
              Entrar
            </button>
          </form>
          <button 
            className="botao-cadastro"
            onClick={() => navigate('/cadastro')}
          >
            Criar Conta
          </button>
        </div>
      </div>
    </div>
  );
}