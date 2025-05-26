import "./deletar.css"
export default function DeletarProdutos() {
  const produtos = [
    { id: 1, nome: "Produto 1", preco: 100.00 },
    { id: 2, nome: "Produto 2", preco: 200.00 },
  ];

  const handleDelete = (id) => {
    // Lógica para deletar produto
    console.log("Deletar produto:", id);
  };

  return (
    <div className="outlet-content">
      <div className="lista-produtos-delete">
        <h2>Gerenciar Produtos</h2>
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-item">
            <div>
              <h3>{produto.nome}</h3>
              <p>R$ {produto.preco.toFixed(2)}</p>
            </div>
            <button 
              className="botao-delete"
              onClick={() => handleDelete(produto.id)}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}