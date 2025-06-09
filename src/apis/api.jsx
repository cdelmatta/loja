import axios from "axios";

const BASE_URL = "http://localhost:3001/produtos";

export async function CriarProduto(nome, valor, imagem) {
  try {
    const response = await axios.post(
      `${BASE_URL}/criar`,
      { nome, valor: Number(valor), imagem },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("Sucesso em criar produto");
    return response.data;
  } catch (error) {
    console.error("Erro ao criar produto:", error);
  }
}

export async function LerProdutos(setProdutos) {
  try {
    const response = await axios.get(`${BASE_URL}/ler`, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("Sucesso em ler produtos");
    setProdutos(response.data);
  } catch (error) {
    console.error("Erro ao ler produtos:", error);
  }
}

export async function DeletarProduto(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/deletar/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("Sucesso em deletar produto");
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
  }
}

export async function AtualizarProduto(id, nome, valor, imagem) {
  try {
    const response = await axios.put(
      `${BASE_URL}/atualizar/${id}`,
      { nome, valor: Number(valor), imagem },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("Sucesso em editar produto");
    return response.data;
  } catch (error) {
    console.error("Erro ao editar produto:", error);
  }
}
