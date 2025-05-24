import { useState } from 'react';
import { useNavigate } from 'react-router';
import fundo from '../../assets/imagens/fundo.jpg';
import { useAuth } from '../../context/AuthContext';
import './Cadastro.css';

export default function Cadastro() {
  const { setIsAuthenticated } = useAuth();
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    nascimento: '',
    telefone: '',
    sexo: '',
    cep: '',
    rua: '',
    bairro: '',
    numero: '',
    email: '',
    senha: ''
  });

  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const validarCPF = (cpf) => {
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarCPF(form.cpf)) {
      setErro('CPF inválido! Use o formato 000.000.000-00');
      return;
    }

    if (form.senha.length < 6) {
      setErro('Senha deve ter pelo menos 6 caracteres!');
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExistente = usuarios.find(
      usuario => usuario.email === form.email || usuario.cpf === form.cpf
    );

    if (usuarioExistente) {
      setErro('Usuário já cadastrado com este e-mail ou CPF!');
      return;
    }

    const novoUsuario = {
      ...form,
      id: Date.now()
    };

    localStorage.setItem('usuarios', JSON.stringify([...usuarios, novoUsuario]));
    sessionStorage.setItem('usuarioLogado', JSON.stringify(novoUsuario));
    setIsAuthenticated(true);
    navigate('/produtos');
  };

  return (
    <div className="container-cadastro">
      <img
        src={fundo}
        alt="Fundo decorativo"
        className="imagem-fundo"
        role="presentation"
      />
      <div className="conteudo-cadastro">
        <div className="formulario-cadastro">
          <h1>Cadastro</h1>
          {erro && <div className="mensagem-erro">{erro}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={form.senha}
              onChange={handleChange}
              required
            />
            <input
              name="nome"
              placeholder="Nome Completo"
              value={form.nome}
              onChange={handleChange}
              required
            />
            <input
              name="cpf"
              placeholder="CPF"
              value={form.cpf}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="nascimento"
              value={form.nascimento}
              onChange={handleChange}
              required
            />
            <input
              name="telefone"
              placeholder="Telefone"
              value={form.telefone}
              onChange={handleChange}
              required
            />
            <select
              name="sexo"
              value={form.sexo}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o sexo</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
            <input
              name="cep"
              placeholder="CEP"
              value={form.cep}
              onChange={handleChange}
              required
            />
            <input
              name="rua"
              placeholder="Rua"
              value={form.rua}
              onChange={handleChange}
              required
            />
            <input
              name="bairro"
              placeholder="Bairro"
              value={form.bairro}
              onChange={handleChange}
              required
            />
            <input
              name="numero"
              placeholder="Número"
              value={form.numero}
              onChange={handleChange}
              required
            />
            <button type="submit" className="botao-cadastrar">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>

  );
}