import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RequireAuth from "./components/auth/RequireAuth";
import DashBoard from "./outlet/DashBoard";
import Login from "./pages/login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Produto from "./components/Produto/Produto";

import TelaInicial from "./components/telaBotoes/TelaInicial";
import VerProdutos from "./components/telaBotoes/VerProdutos";
import CriarProdutos from "./components/telaBotoes/CriarProdutos";
import AtualizarProdutos from "./components/telaBotoes/AtualizarProdutos";
import DeletarProdutos from "./components/telaBotoes/DeletarProdutos";

import DataProvider from "./apis/DataContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DataProvider> 
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/produtos" replace />} />

          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="produtos" element={<RequireAuth><Produto /></RequireAuth>} />
            <Route path="criarProdutos" element={<RequireAuth><CriarProdutos /></RequireAuth>} />
            <Route path="deletarProdutos" element={<RequireAuth><DeletarProdutos /></RequireAuth>} />
            <Route path="atualizarProdutos" element={<RequireAuth><AtualizarProdutos /></RequireAuth>} />
            <Route path="produtosView" element={<RequireAuth><TelaInicial /></RequireAuth>} />
            <Route path="ver" element={<RequireAuth><VerProdutos /></RequireAuth>} />
          </Route>

          <Route path="*" element={<Navigate to="/dashboard/produtos" replace />} />
        </Routes>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
