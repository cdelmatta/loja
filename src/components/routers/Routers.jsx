import { Routes, Route } from "react-router";
import Login from "../../pages/login/Login";
import Cadastro from "../../pages/cadastro/Cadastro";
import Produto from "../../components/produto/Produto";
import PrivateRoute from "../routers/PrivateRoute";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route
        path="/produtos"
        element={
          <PrivateRoute>
            <Produto />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}