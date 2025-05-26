import "./view.css";
export default function ProdutosView() {
  return (
    <div className="outlet-content">
      <div className="produtos-view-container">
        <h1 className="mensagem-bemvindo">Bem-vindo ao Painel Administrativo</h1>
        <p className="descricao-painel">
          Utilize o menu lateral para gerenciar seus produtos
        </p>
      </div>
    </div>
  );
}