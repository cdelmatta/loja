import "./criar.css"
export default function CriarProdutos() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para criar produto
  };

  return (
    <div className="outlet-content">
      <div className="criar-produtos-container">
        <h2>Cadastrar Novo Produto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome do Produto:</label>
            <input type="text" required />
          </div>
          
          <div className="form-group">
            <label>Preço:</label>
            <input type="number" step="0.01" required />
          </div>

          <div className="form-group">
            <label>URL da Imagem:</label>
            <input type="url" required />
          </div>

          <button type="submit" className="botao-salvar">
            Cadastrar Produto
          </button>
        </form>
      </div>
    </div>
  );
}